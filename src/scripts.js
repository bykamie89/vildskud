const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const menubtn = document.querySelector('.menu_toggle_btn');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

menubtn.addEventListener('click', toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', toggleMenu);
});

var info = document.getElementsByClassName('infobox');
var i;

for (i = 0; i < info.length; i++) {
  info[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

const cookieBox = document.querySelector('.cookiewrapper'),
  acceptBtn = cookieBox.querySelector('.cookiebuttons button');

acceptBtn.onclick = () => {
  document.cookie = 'CookieBy=Vkive; max-age=' + 60 * 60 * 24 * 30;
  if (document.cookie) {
    cookieBox.classList.add('hide');
  } else {
    alert("Cookie can't be set!");
  }
};
let checkCookie = document.cookie.indexOf('CookieBy=Vkive');
checkCookie != -1
  ? cookieBox.classList.add('hide')
  : cookieBox.classList.remove('hide');
