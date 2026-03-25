
window.addEventListener('mouseup', () => {
    const word = window.getSelection().toString().trim();
    if (word.length > 0) {
        chrome.runtime.sendMessage({ text: word });
    }
});