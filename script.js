
  const lerp = (a, b, n) => (1 - n) * a + n * b;
  
  const button = document.querySelector('.single6.btn');
  const link = document.querySelector('.btn__link');
  const buttonRect = button.getBoundingClientRect();
  const maxDist = 150;
  let newX = 0;
  let newY = 0;
  let x = 0;
  let y = 0;

const getDistance = (el, x, y) => {
    return Math.floor(Math.sqrt(
      Math.pow(x - (el.offsetLeft + (el.offsetWidth / 2)), 2) + 
      Math.pow(y - (el.offsetTop + el.offsetHeight / 2), 2)
    ));
  }
    
  document.addEventListener('mousemove', e => {
    const dist = getDistance(button, e.clientX, e.clientY);
    
    if (dist < maxDist) {
      x = (e.clientX - (buttonRect.left + buttonRect.width / 2)) * 0.2;
      y = (e.clientY - (buttonRect.top + buttonRect.height / 2)) * 0.2;
    }
    else {
      x = 0;
      y = 0;
    }
  });
  
  function render() {
    newX = lerp(newX, x, 0.1);
    newY = lerp(newY, y, 0.1);
    button.style.transform = `translate(${newX * 0.33}px, ${newY * 0.33}px)`;
    link.style.transform = `translate(${newX}px, ${newY}px)`;
    requestAnimationFrame(render);
  }
  
  window.onload = () => render();