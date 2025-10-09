function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module) return;

  // Logo
  if (!gameInstance.logo) {
    gameInstance.logo = document.createElement("div");
    gameInstance.logo.className = "logo " + gameInstance.Module.splashScreenStyle;
    gameInstance.container.appendChild(gameInstance.logo);
  }

  // Progress bar
  if (!gameInstance.progress) {
    gameInstance.progress = document.createElement("div");
    gameInstance.progress.className = "progress " + gameInstance.Module.splashScreenStyle;

    // Make progress bar fullscreen
    Object.assign(gameInstance.progress.style, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw", // use viewport width
      height: "100vh", // use viewport height
      margin: 0,
      padding: 0,
      background: "#000", // black background
    });
    

    gameInstance.progress.full = document.createElement("div");
    gameInstance.progress.full.className = "full";
    Object.assign(gameInstance.progress.full.style, {
      width: "0%", // start at 0%
      height: "10px",
      background: "#0f0",
      transition: "width 0.3s",
    });

    gameInstance.progress.appendChild(gameInstance.progress.full);
    gameInstance.container.appendChild(gameInstance.progress);
  }

  // Update progress
  gameInstance.progress.full.style.width = (progress * 100) + "%";

  // Hide when done
  if (progress == 1) {
    gameInstance.logo.style.display = "none";
    gameInstance.progress.style.display = "none";
  }
}
