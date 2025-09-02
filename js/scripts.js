console.log("Welcome to My Portfolio")

/* Menu Toggle */
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  var icon = x.querySelector('.icon i'); // Select the Font Awesome icon

  if (x.className === 'navtoggle') {
    x.className += ' responsive';
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark'); // Change to X icon
  } else {
    x.className = 'navtoggle';
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars'); // Change back to bars
  }
}