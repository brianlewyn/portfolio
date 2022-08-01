const SideBar = document.querySelector('.SideBar')
const RowLinks = document.querySelector('.BottomBar .RowLinks')
window.onload = function() {
   SideBar.classList.remove('Flex')
   SideBar.classList.remove('SBExtend')
   RowLinks.classList.remove('Flex')
}

const Atom = document.getElementById('Atom')
Atom.onclick = function() {
   LogicIconClose(Atom, RowLinks, 'Flex', 'Atom')
}

const Menu = document.getElementById('Menu')
const Menu_md = document.getElementById('Menu_md')
Menu.onclick = function() {
   LogicIconClose(Menu, SideBar, 'Flex', 'Menu')
}
MenuMd.onclick = function() {
   let [BtnIcon, Element, Class, NameTemp] = [MenuMd, SideBar, 'SBExtend', 'MenuMd']
   const IconClose = '<path d="M18.7502 3L11.9992 9.75L5.2498 3L3 5.25L9.7494 12L3 18.75L5.2498 21L11.9992 14.25L18.7502 21L21 18.75L14.2506 12L21 5.25L18.7502 3Z" />'
   if (!Element.classList.contains(Class)) {
      Element.classList.add(Class)
      Element.classList.add('SBExtend')
      localStorage.setItem(NameTemp, BtnIcon.innerHTML)
      BtnIcon.innerHTML = IconClose
   } else {
      Element.classList.remove(Class)
      BtnIcon.innerHTML = localStorage.getItem(NameTemp)
   }
}

const LogicIconClose = function(BtnIcon, Element, Class, NameTemp) {
   const IconClose = '<path d="M18.7502 3L11.9992 9.75L5.2498 3L3 5.25L9.7494 12L3 18.75L5.2498 21L11.9992 14.25L18.7502 21L21 18.75L14.2506 12L21 5.25L18.7502 3Z" />'
   if (!Element.classList.contains(Class)) {
      Element.classList.add(Class)
      localStorage.setItem(NameTemp, BtnIcon.innerHTML)
      BtnIcon.innerHTML = IconClose
   } else {
      Element.classList.remove(Class)
      BtnIcon.innerHTML = localStorage.getItem(NameTemp)
   }
}