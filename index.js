// Access the show button element 
let showbtn = document.getElementById("showbtn"); 
  
// Access the Close button element 
let closebtn = document.getElementById("closebtn"); 
  
// Acces the popup element 
let popup = document.querySelector(".popup"); 
let subp = document.getElementById("sub-p"); 
  
// Show the popup on click 
showbtn.addEventListener("click", () => { 
    popup.style.display = "block"; 
    showbtn.style.display = "none"; 
    document.body.style.backgroundColor = "#1c361d"; 
    subp.style.display = "none"; 
}); 
  
// Close the popup on click 
closebtn.addEventListener("click", () => { 
    popup.style.display = "none"; 
    showbtn.style.display = "block"; 
    document.body.style.backgroundColor = "#022603"; 
    subp.style.display = "block"; 
});