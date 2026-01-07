document.addEventListener('DOMContentLoaded', () => {

  // Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(target).classList.add('active');
    });
  });

  // Dark Mode
  const darkModeSwitch = document.getElementById('darkModeSwitch');
  const body = document.body;
  if(localStorage.getItem('darkMode')==='enabled'){body.classList.add('dark'); darkModeSwitch.checked=true;}
  darkModeSwitch.addEventListener('change', ()=>{
    if(darkModeSwitch.checked){body.classList.add('dark'); localStorage.setItem('darkMode','enabled');}
    else{body.classList.remove('dark'); localStorage.setItem('darkMode','disabled');}
  });

  // Particles
  const particleContainer = document.createElement('div');
  particleContainer.id='particles';
  document.body.appendChild(particleContainer);
  const particles = [];
  for(let i=0;i<30;i++){
    const p=document.createElement('div');
    p.classList.add('particle');
    p.style.left=Math.random()*100+'vw';
    p.style.top=Math.random()*100+'vh';
    p.style.width=4+Math.random()*6+'px';
    p.style.height=p.style.width;
    p.style.opacity=Math.random()*0.3;
    p.style.animationDuration=15+Math.random()*20+'s';
    particleContainer.appendChild(p);
    particles.push(p);
  }

  // Mouse movement interaction (desktop only)
  if(window.innerWidth >= 900){
    document.addEventListener('mousemove', (e)=>{
      const xRatio = e.clientX / window.innerWidth;
      const yRatio = e.clientY / window.innerHeight;
      particles.forEach((p, i)=>{
        const offsetX = (xRatio - 0.5) * (i % 5 + 1) * 10;
        const offsetY = (yRatio - 0.5) * (i % 5 + 1) * 10;
        p.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    });
  }

});
