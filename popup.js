/**
 * @desc Wait until all DOM loaded then execute DOM manipulation
 */
document.addEventListener('DOMContentLoaded', function () {
    var btnMutter  = document.querySelector('#btn_mutter');
    var linkMore  = document.querySelector('#link-more');
    var btnMore  = document.querySelector('#btn-more');
    btnMutter && btnMutter.addEventListener('click', submitToTwitter);
    linkMore && linkMore.addEventListener("click" , function () {
        this.style.display = "none" ;
        document.querySelector("#more-options").style.display = "block";
    });
    btnMore && btnMore.addEventListener('click', categoryMutter);
});

/**
 * @name submitToTwitter
 * @desc Submit values to twitter site.
 */
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
/**
 * @name loadInput
 * @desc Show Loading(spinner) inside of Text-Area
 */
function loadInput() {
    if (document.getElementById("textarea-loader").style.display === "block"){
        document.getElementById("textarea-loader").style.display = "none";
    }
    else{
        document.getElementById("textarea-loader").style.display = "block";
    }

}

var already = [];
function categoryMutter() {
    if(document.querySelector("input[name=curse]").checked && !already["curse"]){
        loadInput();
        already["curse"] = true;
        var curseUrl = "https://raw.githubusercontent.com/farzadme/MuteWords/master/Curse%20-%20%D8%A7%D9%84%D9%81%D8%A7%D8%B8%20%D9%86%D8%A7%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D9%88%20%D8%B1%DA%A9%DB%8C%DA%A9.txt";
        fetch(curseUrl).then(function(response) {
            response.text().then(function(text) {
                document.getElementById("batch_mutter").value += (document.getElementById("batch_mutter").value) ? "\n" + text : text;
                loadInput();
            })
        }).catch(function(err) {
            // Error :(
        });
    }
    if(document.querySelector("input[name=movie]").checked && !already["movie"]){
        loadInput();
        already["movie"] = true;
        var movieUrl = "https://raw.githubusercontent.com/farzadme/MuteWords/master/Movie%20%26%20Series%20-%20%D9%81%DB%8C%D9%84%D9%85%20%D9%88%20%D8%B3%D8%B1%DB%8C%D8%A7%D9%84.txt";
        fetch(movieUrl).then(function(response) {
            response.text().then(function(text) {
                document.getElementById("batch_mutter").value += (document.getElementById("batch_mutter").value) ? "\n" + text : text;
                loadInput();
            })
        }).catch(function(err) {
            // Error :(
        });
    }
    if(document.querySelector("input[name=sport]").checked && !already["sport"]){
        loadInput();
        already["sport"] = true;
        var sportUrl = "https://raw.githubusercontent.com/farzadme/MuteWords/master/Football%20%26%20Sports%20-%20%D9%81%D9%88%D8%AA%D8%A8%D8%A7%D9%84%20%D9%88%20%D9%88%D8%B1%D8%B2%D8%B4%DB%8C.txt";
        fetch(sportUrl).then(function(response) {
            response.text().then(function(text) {
                document.getElementById("batch_mutter").value += (document.getElementById("batch_mutter").value) ? "\n" + text : text;
                loadInput();
            })
        }).catch(function(err) {
            // Error :(
        });
    }
    if(document.querySelector("input[name=political]").checked && !already["political"]){
        loadInput();
        already["political"] = true;
        var politicalUrl = "https://raw.githubusercontent.com/farzadme/MuteWords/master/Political%20-%20%D8%B3%DB%8C%D8%A7%D8%B3%DB%8C.txt";
        fetch(politicalUrl).then(function(response) {
            response.text().then(function(text) {
                document.getElementById("batch_mutter").value += (document.getElementById("batch_mutter").value) ? "\n" + text : text;
                loadInput();
            })
        }).catch(function(err) {
            // Error :(
        });
    }
    if(document.querySelector("input[name=custom]").value !== ""){
        var url = document.querySelector("input[name=custom]").value;
        fetch(url).then(function(response) {
            response.text().then(function(text) {
                document.getElementById("batch_mutter").value += (document.getElementById("batch_mutter").value) ? "\n" + text : text;
            })
        }).catch(function(err) {
            // Error :(
        });
    }
}


