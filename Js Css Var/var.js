const JStext = document.getElementsByTagName('b');
const spacing = document.getElementById('spacing');
const blurs = document.getElementById('blur');
const color = document.getElementById('color');
const picture =  document.querySelector('.pic')

color.addEventListener('input', () => {
  for (let el of JStext) {
    el.style.color = color.value; 
  }
  document.documentElement.style.setProperty('--color', color.value);
});

spacing.addEventListener('input', () => {
  document.documentElement.style.setProperty('--spacing', spacing.value + 'px');
});

blurs.addEventListener( 'input', () => {
    document.documentElement.style.setProperty('--blur',blurs.value + 'px')
})