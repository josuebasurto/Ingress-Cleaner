var b = document.body;
b.className = (b.className == "clean") ? "" : "clean";
chrome.storage.sync.get({
    //favoriteColor: 'red',
    gmapsui: true
  }, function(items) {
    //document.getElementById('color').value = items.favoriteColor;
    var mc = document.getElementById("map_canvas");
    if(items.gmapsui==true)
    	mc.className = (b.className == "clean") ? "clean" : "";
	else
		mc.className = "";
});