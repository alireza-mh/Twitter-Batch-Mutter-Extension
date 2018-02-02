console.log("10");
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', submitToTwitter);
});

function submitToTwitter() {
    var batchText = document.getElementById("batch_mutter").value;
    window.close();
    if(batchText === "") return;
    var item = JSON.stringify(batchText);
    var script = "localStorage.setItem('twitter_mutter' ," + item +  ");" ;
    chrome.tabs.executeScript({
        code: script
    });

    chrome.tabs.executeScript( null , {
        file: "script.js"
    });
    chrome.storage.sync.set(batchText);
    var btn = document.querySelector(".MutedKeywordsAddItemForm-button");
}



