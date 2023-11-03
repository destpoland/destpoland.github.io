var theme = localStorage.getItem('theme') || 'dark';
let themes;
console.log(theme)


function getContrastHex(hexcolor) {
  hexcolor = hexcolor.replace('#', '');
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#1c1c1c' : 'white';
}


fetch(origin + '/settings/themes.json')
  .then((res) => res.json())
  .then((data_themes) => {
    themes = data_themes;
  })
  .catch((e) => {
    // Houston, we have a problem.
    console.error(e);
    throw new Error('Failed to load themes');
  });

  function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    if (fileInput.files.length > 0) {
        const selectedFile = fileInput.files[0];
        alert("Selected file: " + selectedFile.name);
        // You can perform client-side actions with the selected file here.

        const reader = new FileReader();

        reader.onload = function() {
            // Save the custom background image URL in localStorage
            localStorage.setItem("customBackground", reader.result);
            // Set the background image once the file is loaded
            document.querySelector(".animation-area").style.display = 'none';
            document.querySelector("body").style.backgroundImage = `url(${reader.result})`;
        };

        reader.readAsDataURL(selectedFile);
    } else {
        alert("No file selected. Please choose a file to upload.");
    }
}



function setTheme(theme) {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("theme", theme);
    document.body.style = "";
    localStorage.removeItem("theme_color");
  
    if (theme == 'default') {
      document.querySelector(".animation-area").style.background = 'linear-gradient(to left, #2251d4, #0f8aa8)'
      document.querySelector(".animation-area").style.display = 'flex';
    }
    else if (theme == 'custom') {
      console.log("Clicked!")
    }
    else if (theme == 'dark') { 
      document.querySelector(".animation-area").style.background = 'linear-gradient(to left, #323235, #111111)'
      document.querySelector(".animation-area").style.display = 'flex';
    }


    themes.forEach((palette) => {
      if (palette.theme == theme) {
        document.querySelector(".animation-area").value = palette.color;
        console.log(document.querySelector(".animation-area").style.background)
      }
    });
  }


function changeTheme(value) {
    document.querySelector('#colorPicker').style.backgroundColor = value;
    document.querySelector('.box-area').style.backgroundColor = value;
}

window.onload = function () {
	if (theme == 'default') {
      document.querySelector(".animation-area").style.background = 'linear-gradient(to left, #2251d4, #0f8aa8)'
      document.querySelector(".animation-area").style.display = 'flex';
    }
    else if (theme == 'dark') { 
      document.querySelector(".animation-area").style.background = 'linear-gradient(to left, #323235, #111111)'
      document.querySelector(".animation-area").style.display = 'flex';
    }
    else if (theme == 'custom') { 
      const customBackground = localStorage.getItem("customBackground");
        if (customBackground) {
            document.querySelector(".animation-area").style.display = 'none';
            document.querySelector("body").style.backgroundImage = `url(${customBackground})`;
        } else {
            document.querySelector(".animation-area").style.display = 'block';
        }
    }
    else if (theme != 'NaN') { 
      document.querySelector(".animation-area").style.background = theme
      document.querySelector(".animation-area").style.display = 'flex';
    }


    


}