document.addEventListener('DOMContentLoaded', function () {
  const logo = document.getElementById('logo');
  logo.addEventListener('click', function () {
    logo.style.opacity = '0';
    setTimeout(()=> {
      logo.style.display = 'none';

    }, 1000)
  })
});