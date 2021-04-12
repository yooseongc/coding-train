

let data;

function preload() {
    data = loadJSON('movies.json');
}


function setup() {
    console.log('titles', data.titles);
    console.log('users', data.users);
    noCanvas();
    part1();
    createP('\n\n\n');
    part2();
    createP('\n\n\n');
    part3();
}

function part1() {
    // calculate similarity using euclidian distance.

    createP('Part1 : Get similarity of two Users');
    const dropdown1 = createSelect('');
    const dropdown2 = createSelect('');
    const button = createButton('submit');
    const resultP = createP('');
    
    const users = {};
    for (const user of data.users) {
        users[user.name] = user;
        dropdown1.option(user.name);
        dropdown2.option(user.name);
    }
    
    const euclideanSimilarity = () => {
        const user1 = users[dropdown1.value()];
        const user2 = users[dropdown2.value()];

        let sumOfSquares = 0;
        for (const title of data.titles) {
            const rating1 = user1[title];
            const rating2 = user2[title];
            if (rating1 != null && rating2 != null) {
                const diff = rating1 - rating2;
                sumOfSquares += diff * diff;
            }
        }
        const d = sqrt(sumOfSquares);
        const similarity = 1 / (1 + d);
        resultP.html('similarity: ' + similarity);
    };
    button.mousePressed(euclideanSimilarity);
}

function part2() {
    createP('Part2 : List up the most "Similar" users.');
    const dropdown1 = createSelect('');
    const button = createButton('submit');
    const resultParentDiv = createDiv('');
    const resultDivs = [];
    
    const users = {};
    for (const user of data.users) {
        users[user.name] = user;
        dropdown1.option(user.name);
    }

    const euclidianDistance = (name1, name2) => {
        const rating1 = users[name1];
        const rating2 = users[name2];
        const titles = data.titles;
        
        let sumOfSquares = 0;
        for (const title of titles) {
            const r1 = rating1[title];
            const r2 = rating2[title];
            if (r1 != null & r2 != null) {
                const diff = r1 - r2;
                sumOfSquares += diff * diff;
            }
        }
        const d = sqrt(sumOfSquares);
        const similarity = 1 / (1 + d);
        return similarity;
    };
    const findNearestNeighbors = () => {
        resultDivs.forEach(div => div.remove());
        resultDivs.length = 0;
        const userName = dropdown1.value();
        const similarityScores = {};
        for (const otherUser of data.users) {
            if (userName === otherUser.name) {
                similarityScores[userName] = -1;
            } else {
                const similarity = euclidianDistance(userName, otherUser.name);
                similarityScores[otherUser.name] = similarity;
            }
        }
        const sorted = data.users.slice().sort((a, b) => {
            const score1 = similarityScores[a.name];
            const score2 = similarityScores[b.name];
            return score2 - score1;
        });
        // console.log(sorted);
        const k = 5;
        for (let i = 0; i < k; i++) {
            const name = sorted[i].name;
            const div = createDiv(name + ': ' + similarityScores[name]);
            div.parent(resultParentDiv);
            resultDivs.push(div);
        }
    };
    button.mousePressed(findNearestNeighbors);
}

function part3() {
    createP('Part3 : kNN to predict ratings for movies I haven\'t seen yet.');
    
    const dropdowns = [];
    const titles = data.titles;
    for (const title of titles) {
        const div = createDiv(title);
        const dropdown = createSelect('');
        dropdown.title = title;
        dropdown.option('not seen');
        dropdown.parent(div);
        dropdowns.push(dropdown);
        for (let star = 1; star <= 5; star++) {
            dropdown.option(star);
        }
    }
    const button = createButton('submit');
    const resultDivs = [];
    

    const euclidianDistance = (rating1, rating2) => {
        const titles = data.titles;
        let sumOfSquares = 0;
        for (const title of titles) {
            const r1 = rating1[title];
            const r2 = rating2[title];
            if (r1 != null & r2 != null) {
                const diff = r1 - r2;
                sumOfSquares += diff * diff;
            }
        }
        const d = sqrt(sumOfSquares);
        const similarity = 1 / (1 + d);
        return similarity;
    };
    const findNearestNeighbors = (user) => {
        resultDivs.forEach(div => div.remove());
        resultDivs.length = 0;
        const similarityScores = {};
        for (const otherUser of data.users) {
            const similarity = euclidianDistance(user, otherUser);
                similarityScores[otherUser.name] = similarity;
        }
        const sorted = data.users.slice().sort((a, b) => {
            const score1 = similarityScores[a.name];
            const score2 = similarityScores[b.name];
            return score2 - score1;
        });
        // console.log(sorted.map(v => v.name));
        for (const title of data.titles) {
            if (user[title] == null) {
                const k = 5;
                let weightedSum = 0;
                let similaritySum = 0;
                for (let i = 0; i < k; i++) {
                    const name = sorted[i].name;
                    const sim = similarityScores[name];
                    const rating = sorted[i][title];
                    if (rating != null) {
                        weightedSum += rating * sim;
                        similaritySum += sim;
                    }
                }
                const stars = nf(weightedSum / similaritySum, 1, 2);
                const div = createDiv(title + ': ' + stars);
                resultDivs.push(div);
            }
        }
    };
    const predictRatings = () => {
        const newUser = {};
        for (const dropdown of dropdowns) {
            const title = dropdown.title;
            const rating = dropdown.value();
            newUser[title] = (rating === 'not seen') ? null : rating;
        }
        findNearestNeighbors(newUser);
    };

    button.mousePressed(predictRatings);
}