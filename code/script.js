// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active")
 
}
// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle 

document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault()

  const inputValue = document.getElementById('firstname').value
  alert(`Kul att du är med oss ${inputValue}!`)
})