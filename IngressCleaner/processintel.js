chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Action!');
  chrome.tabs.executeScript(null, {file: "Ingresscleaner.js"});
});