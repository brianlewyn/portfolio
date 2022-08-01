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
const OneOnlyElementActive = function(elements, key, n) {
   for (item of elements) {
      if (item.classList.contains(key)) {
         item.classList.remove(key)
      }
      elements[n].classList.add(key)
   }
}
const SetTitleCurrentSection = function(n){
   const NewTitle = BtnSection[n].lastElementChild.innerHTML
   const NewNode = document.createTextNode(NewTitle)
   TitleSection.replaceChild(NewNode, TitleSection.childNodes[0])
}
const SwitchOn = function(n) {
   if (!BtnSection[n].classList.contains('BUTTON')) {
      OneOnlyElementActive(BtnSection, 'BUTTON', n)
      OneOnlyElementActive(Section, 'SECTION', n)
      SetTitleCurrentSection(n)
   }
}

const SideBar = document.querySelector('.SideBar')
const RowLinks = document.querySelector('.BottomBar .RowLinks')
window.onload = function() {
   SideBar.classList.remove('Flex')
   SideBar.classList.remove('Extend')
   RowLinks.classList.remove('Flex')
}

const Atom = document.getElementById('Atom')
Atom.onclick = function() {
   LogicIconClose(Atom, RowLinks, 'Flex', 'Atom')
}

const Menu = document.getElementById('Menu')
Menu.onclick = function() {
   LogicIconClose(Menu, SideBar, 'Flex', 'Menu')
}
const Menu_md = document.getElementById('Menu_md')
MenuMd.onclick = function() {
   LogicIconClose(MenuMd, SideBar, 'Extend', 'MenuMd')
}

const TitleSection = document.getElementById('TitleSection')
const BtnSection = document.querySelectorAll('.BtnGroup button')
const Section = document.querySelectorAll('section')

BtnSection[0].onclick = function() {
   SwitchOn(0)
}
BtnSection[1].onclick = function() {
   SwitchOn(1)
}
BtnSection[2].onclick = function() {
   SwitchOn(2)
}
BtnSection[3].onclick = function() {
   SwitchOn(3)
}
BtnSection[4].onclick = function() {
   SwitchOn(4)
}
BtnSection[5].onclick = function() {
   SwitchOn(5)
}
BtnSection[6].onclick = function() {
   SwitchOn(6)
}
BtnSection[7].onclick = function() {
   SwitchOn(7)
}