// Saves options to chrome.storage.sync.
function save_options() {
  //var color = document.getElementById('color').value;
  var gmapsui = document.getElementById('googlemapsui').checked;
  chrome.storage.sync.set({
    //favoriteColor: color,
    gmapsui: gmapsui
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and gmapsui = true.
  chrome.storage.sync.get({
    //favoriteColor: 'red',
    gmapsui: true
  }, function(items) {
    //document.getElementById('color').value = items.favoriteColor;
    document.getElementById('googlemapsui').checked = items.gmapsui;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);