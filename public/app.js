setTimeout(function() {
   const Loading = document.querySelector('.Loading')
   Loading.classList.add('hidden')
}, 2000);

const BtnArray = Array.from(document.querySelectorAll('.Box_BtnSection button'))
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


const Atom = document.getElementById('Atom')
const RowLinks = document.querySelector('.Box_BtnLink')
Atom.addEventListener('click', () => {
   if (RowLinks.classList.contains('Active')){
      RowLinks.classList.remove('Active')
      Atom.innerHTML = ix.atom
   } else {
      RowLinks.classList.add('Active')
      Atom.innerHTML = ix.x
   }
})

const HighMenu = document.getElementById('HighMenu')
const LowMenu = document.getElementById('LowMenu')
const SideBar = document.querySelector('.SideBar')
LowMenu.onclick = function() {
   if (SideBar.classList.contains('Active')){
      SideBar.classList.remove('Active')
      LowMenu.innerHTML = ix.menu
      HighMenu.innerHTML = ix.menu
   } else {
      SideBar.classList.add('Active')
      LowMenu.innerHTML = ix.x
      HighMenu.innerHTML = ix.x
   }
}
HighMenu.onclick = function() {
   if (SideBar.classList.contains('Active')){
      SideBar.classList.remove('Active')
      LowMenu.innerHTML = ix.menu
      HighMenu.innerHTML = ix.menu
   } else {
      SideBar.classList.add('Active')
      LowMenu.innerHTML = ix.x
      HighMenu.innerHTML = ix.x
   }
}