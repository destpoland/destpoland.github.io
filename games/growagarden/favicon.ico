<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>404</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #f0f8ff;
        font-family: Arial, sans-serif;
        overflow: hidden;
      }

      .container {
        text-align: center;
        z-index: 1;
      }

      h1 {
        font-size: 3rem;
        color: #2c3e50;
      }

      p {
        font-size: 1.2rem;
        color: #7f8c8d;
        margin-bottom: 2rem;
      }

      a {
        display: inline-block;
        padding: 10px 20px;
        background-color: #3498db;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        transition: background-color 0.3s;
      }

      a:hover {
        background-color: #2980b9;
      }

      .duck {
        position: absolute;
        width: 80px;
        height: 80px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="60" cy="60" rx="40" ry="30" fill="%23FFD700"/><circle cx="75" cy="50" r="10" fill="%23FFD700"/><circle cx="80" cy="45" r="3" fill="%23000"/><circle cx="85" cy="40" r="5" fill="%23FF6B6B"/><ellipse cx="30" cy="65" rx="15" ry="10" fill="%23FFD700"/></svg>');
        background-size: contain;
        background-repeat: no-repeat;
        transition: left 2s linear, top 2s linear;
        pointer-events: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>404</h1>
      <p>Oh no! The page you're looking for has flown away.</p>
      <p>Our duck is trying to find it, but seems to be lost too!</p>
      <a target="_top" href="/">Return Home</a>
    </div>

    <div class="duck" id="duck"></div>

    <script>
      const duck = document.getElementById("duck");
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Initial position
      let posX = Math.random() * (screenWidth - 80);
      let posY = Math.random() * (screenHeight - 80);

      duck.style.left = posX + "px";
      duck.style.top = posY + "px";

      function moveDuck() {
        // Random direction and distance
        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 200;

        // Calculate new position
        let newX = posX + moveX;
        let newY = posY + moveY;

        // Keep duck within bounds
        newX = Math.max(0, Math.min(screenWidth - 80, newX));
        newY = Math.max(0, Math.min(screenHeight - 80, newY));

        // Update position
        posX = newX;
        posY = newY;

        duck.style.left = posX + "px";
        duck.style.top = posY + "px";

        // Flip duck based on direction
        if (moveX > 0) {
          duck.style.transform = "scaleX(-1)";
        } else {
          duck.style.transform = "scaleX(1)";
        }

        // Schedule next move
        setTimeout(moveDuck, 2000);
      }

      // Start duck movement
      setTimeout(moveDuck, 1000);

      // Make duck move when clicked/tapped
      duck.addEventListener("click", moveDuck);

      // Handle window resize
      window.addEventListener("resize", function () {
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
      });
    </script>
  </body>
</html>
