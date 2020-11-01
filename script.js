var i = 0;
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
        let inputTwitrer = document.querySelector("input[name='keyword']");
        dispatchEventValue(inputTwitrer, splitData[i].toString());
        let Btn = document.querySelector("div[data-testid='settingsDetailSave']");
        setTimeout(() => {
            Btn.click();
        }, 500);
        i++;
        setTimeout(() => {
            document.querySelector("a[aria-label*='muted']").click();
        }, 1500);
        if (i < splitData.length) {
            loopOfSubmit();
        }
    }, 2000);
}

/**
 * @method dispatchEventValue
 * @description dispatch event for react component
 * @param targetInput
 * @param value
 */
function dispatchEventValue(targetInput, value) {
    let input = targetInput;
    let lastValue = input.value;
    input.value = value;
    let event = new Event('input', { bubbles: true });
    let tracker = input._valueTracker;
    if (tracker) {
        tracker.setValue(lastValue);
    }
    input.dispatchEvent(event);
}
