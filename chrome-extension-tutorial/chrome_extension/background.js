
console.log('background is running!');
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    // The user clicked the button!
    // 'tab' is an object with information about the current open tab
    console.log('button clicked!', tab);
    const msg = {
        message: 'user clicked!'
    }
    chrome.tabs.sendMessage(tab.id, msg, function (response) {
        console.log('response from content.js: ', response);
    });
}
