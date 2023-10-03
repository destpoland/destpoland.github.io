var theme = localStorage.getItem('theme') || 'default';
let themes;

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
    document.querySelector(".animation-area").style.background = "linear-gradient(to left, #2251d4, #0f8aa8)";
    localStorage.removeItem("theme_color");
  
    // Find the theme color from the themes array and set the color
    themes.forEach((palette) => {
      if (palette.theme == theme) {
        document.querySelector(".animation-area").value = palette.color;
        console.log(document.querySelector(".animation-area").value)
      }
    });
  }


  function changeTheme(value) {
    document.querySelector('#colorPicker').style.backgroundColor = value;
    document.querySelector('.box-area').style.backgroundColor = value;
}