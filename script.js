const nav=document.getElementById('nav');const menuToggle=document.getElementById('menuToggle');
menuToggle.addEventListener('click',()=>{nav.classList.toggle('open');menuToggle.textContent=nav.classList.contains('open')?'×':'☰'});
document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.textContent='☰'}));
const cursor=document.querySelector('.cursor');if(window.matchMedia('(pointer:fine)').matches){document.addEventListener('mousemove',e=>{cursor.style.left=`${e.clientX}px`;cursor.style.top=`${e.clientY}px`})}else{cursor.style.display='none'}
const sections=document.querySelectorAll('section[id]');const links=document.querySelectorAll('.nav a');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`))}),{rootMargin:'-35% 0px -55% 0px'});sections.forEach(section=>observer.observe(section));
