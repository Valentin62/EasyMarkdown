// Get the modal
var infoModal = document.getElementById('infoModal');

// Get the button that opens the modal
var ibtn = document.getElementById("infoBtn");

// Get the <span> element that closes the modal
var infoSpan = document.getElementsByClassName("infoSpan")[0];

// When the user clicks the button, open the modal
ibtn.onclick = function() {
     infoModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
infoSpan.onclick = function() {
     infoModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
     if (event.target == infoModal) {
         infoModal.style.display = "none";
     }
}
