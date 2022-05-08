import './style.css';

const btn = document.createElement('button');
btn.textContent = 'button';
btn.classList.add('bg-red');
btn.addEventListener('click', async function () {
  // import('./locale/en.json').then(function () {
  //   alert('locale loaded');
  // });
  const module = await import('./locale/cn.json');
  console.log(module);
});

document.body.appendChild(btn);
