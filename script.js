const shareIcon = document.querySelector(".share-image");
const shareDiv = document.querySelector(".share-div");
const triangleBox = document.querySelector(".triangle-box");
let toggle = false;

shareIcon.addEventListener("click", () => {
  if (toggle) {
    shareDiv.style.display = "none";
    triangleBox.style.display = "none";
    shareIcon.style.border = "none"; // Remove border when toggled off
    toggle = false;
  } else {
    shareDiv.style.display = "flex";
    triangleBox.style.display = "block";
    shareIcon.style.border = "2px solid var(--desaturatedDarkBlue)"; // Add border when toggled on
    toggle = true;
  }
});
