i = 0;
function setTwitter() {
    loopOfSubmit();
}
setTwitter();
function loopOfSubmit() {
    let rawData = (localStorage.getItem("twitter_mutter"));
    let splitData ;
    if (rawData.split(",").length > 1) {
        splitData = rawData.split(",");
    }
    else {
        splitData = rawData.split("\n");
    }
    setTimeout(() => {
        document.querySelector(".MutedKeywordsActions-openDialogButton").click();
        let input = document.querySelector(".MutedKeywordsAddItemForm-input > .rich-editor");
        input.innerHTML = "<div>" + splitData[i].toString() + "<div>";
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