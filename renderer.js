const remote = require("electron").remote;
/* Fermeture de la page */

document.getElementById("close-btn").addEventListener("click", function(e) {
	var window = remote.getCurrentWindow();
	window.close();
});


/* Reduction de la page */

document.getElementById("min-btn").addEventListener("click", function(e) {
    var window = remote.getCurrentWindow();
    window.minimize();
});


/* Maximisation de la page */

document.getElementById("max-btn").addEventListener("click", function(e) {
   var window = remote.getCurrentWindow();
   if(!window.isMaximized()){
       window.maximize();
   } else {
       window.unmaximize();
   }
});