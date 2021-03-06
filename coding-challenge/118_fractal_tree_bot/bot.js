
require('dotenv').config();
const Mastodon = require('mastodon-api');
const util = require('util');
const fs = require('fs');
const exec = util.promisify(require('child_process').exec);

console.log('Fractal-Tree Bot starting...');

const M = new Mastodon({
    client_key: process.env.CLIENT_KEY,
    client_secret: process.env.CLIENT_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    api_url: 'https://twingyeo.kr/api/v1/' // optional, defaults to https://mastodon.social/api/v1/
});

const cmd = 'node sketch.js';

// exec(cmd + Math.random(0, 360))
//     .then(response => {
//         console.log(response.stdout);
//         const stream = fs.createReadStream('tree.png');
//         const params = {
//             file: stream,
//             description: `A randomly generated fractal tree`
//         };
//         return M.post('media', params);
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(console.error);

const stream = M.stream('streaming/user');

stream.on('message', response => {
    if (response.event === 'update' && !response.data.in_reply_to_id) {
        const id = response.data.account.id;
        const acct = response.data.account.acct;
        const content = response.data.content;

        const regex = /\d+/;
        const results = content.match(regex);
        let angle = -1;
        if (results) {
            angle = results[0];
        }

        toot(acct, id, angle)
            .then(response => console.log(response))
            .catch(error => console.error(error));
    }
}); 


async function toot(acct, reply_id, angle) {
    if (angle === -1) {
        const params = {
            status: `@${acct} Please specify an angle in degrees using digits`,
            in_reply_to_id: reply_id
        };
        const response = await M.post('statuses', params);
        return {
            success: true,
            angle: -1
        };
    } else {
        // Step 1
        const response1 = await exec(cmd + ' ' + angle);
        const out = response1.stdout.split('\n');
        const stream = fs.createReadStream('tree.png');

        // Step 2: Upload Media
        const params1 = {
            file: stream,
            description: `A randomly generated fractal tree with ${angle}`
        };
        const response2 = await M.post('media', params1);
        const id = response2.data.id;

        // Step 3
        const params2 = {
            status: `@${acct} Behold my beautiful tree with angle ${angle} degrees`,
            in_reply_to_id: reply_id,
            media_ids: [id]
        };
        const response3 = await M.post('statuses', params2);
        return {
            success: true,
            angle: angle
        };
    }
}
