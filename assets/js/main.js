document.addEventListener('DOMContentLoaded', function () {

  const time = 800;
  const logo = document.getElementById('logo');
  logo.addEventListener('click', function () {
    // hide logo
    console.log(logo.children[0], 'logo')
    logo.children[0].style.display = 'none'
    logo.children[1].style.display = 'block'
    setTimeout(() => {
      logo.style.display = 'none';
    }, time * 1.5);

    // move circle
    const menu = document.getElementById('menu');
    const menuInner = document.getElementsByClassName('menu-inner')[0];
    menu.style.transform = 'translate(-66%, -50%) rotate(0deg)';
    menuInner.style.transform = 'translate(0%, -50%) rotate(0deg)';


    const pseudoMenu = document.getElementsByClassName('menu-pseudo');
    const label = document.getElementsByClassName('label');
    const labelText = document.getElementsByClassName('label-text');
    const labelTextImage = document.getElementsByClassName('label-text-image');
    //  move label
    const moveLabel = (rotateAngle, current) => {
      let setRotate = rotateAngle;
      // setTimeout(() => {
      for (let i = 0; i < pseudoMenu.length; i++) {
        rotateAngle += 15;
        console.log(rotateAngle, 'rotateAngle')
        pseudoMenu[i].style.transform = `rotate(${-rotateAngle}deg)`;
        pseudoMenu[i].style.opacity = '1';
      }

      //  move text label
      rotateAngle = setRotate;
      for (let i = 0; i < labelText.length; i++) {
        rotateAngle += 15;
        label[i].style.transform = `translate(100%, -50%) rotate(${rotateAngle}deg) scale(1)`;
        // label[i].style.transformOrigin = `inherit`;
        if (current === i) {
          label[i].style.transform = `translate(100%, -50%) rotate(${rotateAngle}deg) scale(1.35)`;
          // label[i].style.transformOrigin = `left`;
        }
        setTimeout(() => {
          labelText[i].style.width = '12.625em';
          labelTextImage[i].style.opacity = '1'
        }, time / 2)
      }
      // }, time)
    }
    moveLabel(-60, 3);

    // body height
    console.log(document.body)
    document.body.style.height = `${(pseudoMenu.length - 1) * 100}vh`;

    document.addEventListener('scroll', function () {
      moveLabel(-60 + window.scrollY / 20, 3);

    })

  })

});