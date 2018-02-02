// var s = document.createElement('script');
// s.src = chrome.extension.getURL('script.js');
// (document.head||document.documentElement).appendChild(s);
// s.onload = function() {
//     s.parentNode.removeChild(s);
// };
var p = document.createElement('script');
p.src = chrome.extension.getURL('popup.js');
(document.head||document.documentElement).appendChild(p);
p.onload = function() {
    p.parentNode.removeChild(p);
};