chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Action!');
  chrome.tabs.executeScript({
    code: '["player_stats","header","game_stats","geotools","comm","bottom_right_stack","portal_filter_header","footer","butterbar"].forEach(function(e){if(e != null)document.getElementById(e).style.display = "none";});var dash = document.getElementById("dashboard_container");dash.style.top = dash.style.left = dash.style.right = dash.style.bottom = 0;'
  });
});