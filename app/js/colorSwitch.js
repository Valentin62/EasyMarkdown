document.getElementById('tbtn').addEventListener('click', function() {
     if (document.getElementById('theme').getAttribute('data-theme') === "dark") {
          document.getElementById('theme').setAttribute('href', 'css/light.css');
          document.getElementById('toggle').setAttribute('class', 'fa fa-toggle-off');
          document.getElementById('theme').setAttribute('data-theme', 'light');
     } else {
          document.getElementById('theme').setAttribute('href', 'css/dark.css');
          document.getElementById('toggle').setAttribute('class', 'fa fa-toggle-on');
          document.getElementById('theme').setAttribute('data-theme', 'dark');
     }
});