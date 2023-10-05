
const dpnameInput = document.getElementById("dpname");
const clear1Image = document.getElementById("clear1");
const emailInput = document.getElementById("email");
const clear2Image = document.getElementById("clear2");

// Add focus event listeners to the input boxes
dpnameInput.addEventListener("focus", () => {
    clear1Image.style.display = 'block'; // Show the image
});

emailInput.addEventListener("focus", () => {
    clear2Image.style.display = 'block'; // Show the image
});

// Add blur event listeners to hide the images when focus is lost
dpnameInput.addEventListener("blur", () => {
    clear1Image.style.display = 'none'; // Hide the image
});

emailInput.addEventListener("blur", () => {
    clear2Image.style.display = 'none'; // Hide the image
});