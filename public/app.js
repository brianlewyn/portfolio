const Atom = document.getElementById('Atom')
const RowLinks = document.querySelector('.BottomBar .RowLinks')

window.onload = function() {
   RowLinks.classList.remove('Flex')
}

Atom.onclick = function() {
   RowLinks.classList.toggle('Flex')
}