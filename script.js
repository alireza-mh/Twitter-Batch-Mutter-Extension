i = 0;
function setTwitter() {
    loopOfSubmit();
}
setTwitter();

function loopOfSubmit() {
    let rawData = (localStorage.getItem("twitter_mutter"));
    let splitData = rawData.split(",");
    setTimeout(() => {
        document.querySelector(".MutedKeywordsActions-openDialogButton").click();
        let input = document.querySelector(".MutedKeywordsAddItemForm-input > .rich-editor");
        input.innerHTML = "<div>" + splitData[i].toString() + "<div>";
        // var event = new Event('change');
        // input.dispatchEvent(event);
        let Btn = document.querySelector(".MutedKeywordsAddItemForm-button");
        setTimeout(() => {
            Btn.click();
        }, 500);
        i++;
        if (i < splitData.length) {
            loopOfSubmit();
        }
    }, 2000);
}