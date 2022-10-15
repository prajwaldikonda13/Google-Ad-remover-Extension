document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('status').textContent = "Extension loaded";
    var button = document.getElementById('removeAds');
    button.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            // alert("hi link")
            chrome.tabs.sendMessage(tabs[0].id, { data:"removeAds"}, function (response) {
            });
        });
    });
});





