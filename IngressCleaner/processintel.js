chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Ingress Cleaner icon was clicked! (' + new Date + ")");
  chrome.tabs.executeScript(null, {file: "Ingresscleaner.js"});
});