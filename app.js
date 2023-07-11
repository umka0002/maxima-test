// JavaScript code to handle the modal window
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// JavaScript code to handle the form submission
var form = document.getElementById("userForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  // Process the form data here (e.g., send it to the server)
  // You can use AJAX or fetch to submit the form data asynchronously
  // Example: use fetch API to submit form data asynchronously
  fetch(form.action, {
    method: form.method,
    body: new FormData(form)
  })
  .then(function(response) {
    // Handle the response from the server
    console.log(response);
  })
  .catch(function(error) {
    // Handle any errors that occur during the form submission
    console.error(error);
  });
});