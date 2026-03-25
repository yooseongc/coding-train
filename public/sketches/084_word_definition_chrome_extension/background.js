
window.word = '';
chrome.runtime.onMessage.addListener((req, sender, sendResp) => {
    window.word = req.text;
});