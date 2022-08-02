const BtnArray = Array.from(document.querySelectorAll('.BtnGroup button'))
const SectionArray = Array.from(document.querySelectorAll('main section'))
const TitleSection = document.getElementById('CurrentTitle')

BtnArray.forEach(btn => {
   btn.addEventListener('click', () => {

      // One only button active
      BtnArray.forEach(item => {
         item.classList.remove('Active')
      })
      btn.classList.add('Active')
      
      // One only section active
      SectionArray.forEach(item => {
         item.classList.remove('Active')
      })
      const n = BtnArray.indexOf(btn)
      SectionArray[n].classList.add('Active')

      // Set title current section
      const NewTitle = btn.lastElementChild.innerHTML
      const NewNode = document.createTextNode(NewTitle)
      TitleSection.replaceChild(NewNode, TitleSection.childNodes[0])
   })
})


const IconClose = '<path d="M18.7502 3L11.9992 9.75L5.2498 3L3 5.25L9.7494 12L3 18.75L5.2498 21L11.9992 14.25L18.7502 21L21 18.75L14.2506 12L21 5.25L18.7502 3Z" />'
const IconMenu = '<path d="M2 4H22V6.66667H2V4ZM2 10.6667H22V13.3333H2V10.6667ZM2 17.3333H22V20H2V17.3333Z" />'

const Atom = document.getElementById('Atom')
const RowLinks = document.querySelector('.BtnLinkGroup')
Atom.addEventListener('click', () => {
   if (RowLinks.classList.contains('Active')){
      RowLinks.classList.remove('Active')
      Atom.innerHTML = localStorage.getItem('Atom')
   } else {
      RowLinks.classList.add('Active')
      localStorage.setItem('Atom', Atom.innerHTML)
      Atom.innerHTML = IconClose
   }
})

const HighMenu = document.getElementById('HighMenu')
const LowMenu = document.getElementById('LowMenu')
const SideBar = document.querySelector('.SideBar')
LowMenu.onclick = function() {
   if (SideBar.classList.contains('Active')){
      SideBar.classList.remove('Active')
      LowMenu.innerHTML = IconMenu
      HighMenu.innerHTML = IconMenu
   } else {
      SideBar.classList.add('Active')
      LowMenu.innerHTML = IconClose
      HighMenu.innerHTML = IconClose
   }
}
HighMenu.onclick = function() {
   if (SideBar.classList.contains('Active')){
      SideBar.classList.remove('Active')
      LowMenu.innerHTML = IconMenu
      HighMenu.innerHTML = IconMenu
   } else {
      SideBar.classList.add('Active')
      LowMenu.innerHTML = IconClose
      HighMenu.innerHTML = IconClose
   }
}