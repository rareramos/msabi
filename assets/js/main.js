document.addEventListener('DOMContentLoaded', function () {

  let lastKnownScrollPosition = 0;
  let ticking = false;
  const time = 800;
  const angle = 23;
  const logo = document.getElementById('logo');
  logo.addEventListener('click', function () {
    // hide logo
    logo.children[0].style.display = 'none'
    logo.children[1].style.display = 'block'
    setTimeout(() => {
      logo.style.display = 'none';
    }, time * 1.5);

    // move circle
    const menuInner = document.getElementsByClassName('menu-inner')[0];
    menuInner.style.transform = 'translate(0%, -50%) rotate(0deg)';


    const pseudoMenu = document.getElementsByClassName('menu-pseudo');
    const label = document.getElementsByClassName('label');
    const labelText = document.getElementsByClassName('label-text');
    const labelTextImage = document.getElementsByClassName('label-text-image');
    //  move label

    const moveLabel = (rotateAngle) => {
      let setRotate = rotateAngle;
      // setTimeout(() => {
      for (let i = 0; i < pseudoMenu.length; i++) {
        rotateAngle += angle;

        pseudoMenu[i].style.transform = `rotate(${-rotateAngle}deg)`;
        pseudoMenu[i].style.opacity = '1';

        const zooming = () => {
          const menuCorePoint = document.getElementById('menu-core');
          const menuCorePointPosition = menuCorePoint.getBoundingClientRect();
          const number = Math.abs((label[i].getBoundingClientRect().y - menuCorePointPosition.y) * 0.058);

          // change color
          if (number > 0 && number < 3) {
            label[i].children[0].style.backgroundColor = '#2069FC'
            label[i].children[1].style.backgroundColor = '#2069FC'
          } else {
            label[i].children[0].style.backgroundColor = '#0f5e9e'
            label[i].children[1].style.backgroundColor = '#0f5e9e'

          }
          return pseudoMenu[i].style.fontSize = `${16 + 17 - number}px`;
        }
        zooming();
      }

      //  move text label
      rotateAngle = setRotate;
      for (let i = 0; i < labelText.length; i++) {
        rotateAngle += angle;
        label[i].style.transform = `translate(100%, -50%) rotate(${rotateAngle}deg)`;
        // setTimeout(() => {
        labelText[i].style.width = '12.625em';
        labelTextImage[i].style.opacity = '1'
        // }, time / 2)
      }
      // }, time)
    }
    moveLabel(-(angle * pseudoMenu.length));

    // body height
    document.body.style.height = `${(pseudoMenu.length - 1) * 100}vh`;

    function doSomething(scrollPos) {
      // move label (responsive mode)
      const scrollHeight = document.body.offsetHeight - window.innerHeight;
      const scrolling = scrollPos / ((scrollHeight) / ((pseudoMenu.length - 1) * angle));
      moveLabel(-(angle * pseudoMenu.length) + scrolling);
    }


    document.addEventListener('scroll', function () {
      lastKnownScrollPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          doSomething(lastKnownScrollPosition);
          ticking = false;
        });
        ticking = true;
      }

    })

  })

});