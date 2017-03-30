// Get the modal
var saveModal = document.getElementById('saveModal');

// Get the button that opens the modal
var saveBtn = document.getElementById("saveBtn");

// Get the <span> element that closes the modal
var saveSpan = document.getElementsByClassName("saveSpan")[0];

// When the user clicks the button, open the modal
saveBtn.onclick = function() {
     saveModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
saveSpan.onclick = function() {
     saveModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
     if (event.target == saveModal) {
         saveModal.style.display = "none";
     }
}
