const SideBar = document.querySelector('.SideBar')
const RowLinks = document.querySelector('.BottomBar .RowLinks')
window.onload = function() {
   SideBar.classList.remove('Flex')
   RowLinks.classList.remove('Flex')
}

const Atom = document.getElementById('Atom')
Atom.onclick = function() {
   RowLinks.classList.toggle('Flex')
}

const Menu = document.getElementById('Menu')
Menu.onclick = function() {
   SideBar.classList.toggle('Flex')
}