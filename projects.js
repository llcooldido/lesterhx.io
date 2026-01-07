document.addEventListener('DOMContentLoaded', () => {
  const darkModeSwitch = document.getElementById('darkModeSwitch');
  const body = document.body;

  // Load saved dark mode preference
  if(localStorage.getItem('darkMode')==='enabled'){ body.classList.add('dark'); darkModeSwitch.checked=true; }

  // Toggle dark mode
  darkModeSwitch.addEventListener('change', ()=>{
    if(darkModeSwitch.checked){
      body.classList.add('dark');
      localStorage.setItem('darkMode','enabled');
    } else {
      body.classList.remove('dark');
      localStorage.setItem('darkMode','disabled');
    }
  });
});
