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
/*
var HUDelements = [
	"player_stats",
	"header",
	"game_stats",
	"geotools",
	"comm",
	"bottom_right_stack",
	"portal_filter_header",
	"footer"//,        .gmnoprint 
	];

if(window.getComputedStyle(document.getElementById("dashboard_container"), null)["left"] == "20px"){
	HUDelements.forEach(function(e){if(e != null)document.getElementById(e).style.display = "none";});
	var dash = document.getElementById("dashboard_container");
	dash.style.top = dash.style.left = dash.style.right = dash.style.bottom = 0;
}
else{
	HUDelements.forEach(function(e){if(e != null)document.getElementById(e).style.display = "";});
	var dash = document.getElementById("dashboard_container");
	dash.style.top = "100px"
	dash.style.left = "20px"
	dash.style.right = "20px"
	dash.style.bottom = "65px";
}*/