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


function setTheme(theme) {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("theme", theme);
    document.body.style = "";
    localStorage.removeItem("theme_color");
  
    if (theme == 'default') {
      document.querySelector(".animation-area").style.background = 'linear-gradient(to left, #2251d4, #0f8aa8)'
    }
    else if (theme == 'dark') { 
      document.querySelector(".animation-area").style.background = 'linear-gradient(to left, #323235, #111111)'
    }


    // Find the theme color from the themes array and set the color
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
    }
    else if (theme == 'dark') { 
      document.querySelector(".animation-area").style.background = 'linear-gradient(to left, #323235, #111111)'
    }
    else if (theme != 'NaN') { 
      document.querySelector(".animation-area").style.background = theme
    }
}