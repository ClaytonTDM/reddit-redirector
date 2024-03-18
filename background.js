chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.create({url: "warning.html"});
});

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        if (
            details.url.indexOf("i.reddit.com") !== -1 ||
            details.url.indexOf("/media") !== -1
        ) {
            return;
        }
        return {
            redirectUrl: details.url.replace(
                "https://www.reddit.com",
                "https://new.reddit.com"
            ),
        };
    },
    { urls: ["*://www.reddit.com/*"] },
    ["blocking"]
);