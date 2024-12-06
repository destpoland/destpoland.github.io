
document.addEventListener("DOMContentLoaded", function() {

  const innerContent = document.getElementById("content");

  // Function to handle the auto-load logic
  function handleAutoLoad() {
    const savedPage = localStorage.getItem("savedPage");
    if (savedPage) {
      innerContent.innerHTML = savedPage; // Load saved content into the innerContent div
      console.log("Auto-loaded saved content:", savedPage);
    }
  }

  // Automatically load saved content after full page load


});