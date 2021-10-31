// this the way or method will use to select element from Html element with class attribute or id attribute from Html file or fold

// Discount-Container
// select discount-layout attribute from html element and called it dltDiscount in order to manipulated the element with javascript
const dltDiscount = document.getElementById("discount-layout");

// Header 
// select header-sticky attribute from html element and called it headerSticky in order to manipulated the element with javascript
const headerSticky = document.getElementById("header-sticky");

// Light and Dark Mode
// select toggle-mode attribute from html element and called it toggleSwitcher / toggleIcon in order to manipulated the element with javascript
// Toggle theme
const toggleSwitcher = document.querySelector('input[type="checkbox"]');
// Toggle icon
const toggleIcon = document.querySelector(".toggle-icon");

// Sliding Section
// select office-wear attribute from html element and called it officeWear in order to manipulated the element with javascript
const officeWear = document.getElementsByClassName("office-wear");


// Subscript Here
// select click-btn / dropdown-discountContn attribute from html element and called it clickBtn / dropdownDiscountContn in order to manipulated the element with javascript
const clickBtn = document.getElementById("click-btn");
const dropdownDiscountContn = document.getElementById("dropdown-discountContn");

// Discount Container 
// Here i'm creating the function, thats founctions when the discount-layout is click, then do something
function removeDiscount(e) {
  // If the target, has class attribute called delete-btn, then do something
  if(e.target.classList.contains("delete-btn")) {
    // The target is the parentelement for h3 and button tags
    const li = e.target.parentElement;
    // Here dltDiscount romove child  
    dltDiscount.removeChild(li);
  }
};
// Add a handler for the 'click' event by providing a callback function called removeDiscount.
dltDiscount.addEventListener("click", removeDiscount);


//The headerSticky which is the id the header, headerSticky.offsetTop property means returns the top position in pixels
const stickyTop = headerSticky.offsetTop;

// Here i'm creating a function called stickyNav, for the the header-sticky, the header will sticky to the top when its reach its scroll position
function stickyNav() {
  // if    
  if(window.pageYOffset >= stickyTop) {
    
    // Here is to add the class call sticky form CSS 
    headerSticky.classList.add("sticky");
  } else {
    // Remove "sticky" when you leave the scroll position   
    headerSticky.classList.remove("sticky");
  }
};

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {
  stickyNav()
}



// Sliding Section
// let the myIndex equal to 0
let myIndex = 0;

// sliderImage is now empty semicolon
sliderImage();

// Here is the function for the sliderImage
function sliderImage() {
  let i;
  // Here i create a loops for officeWear with can execute a block of code a numbers of times.   
  for (i = 0; i < officeWear.length; i++) {
    officeWear[i].style.display = "none";
  }
  
  // Here i increment the value variable with the ++ operator.  
  myIndex++;
  
  // Here if the officeWear + the length is greater myIndex, myIndex equal to 1  
  if (myIndex > officeWear.length) {myIndex = 1}
  officeWear[myIndex - 1].style.display = "block";
  // change sliderImage every 2.5 seconds  
  setTimeout(sliderImage, 2500);
}

// Light and Dark Mode
// DarkThemeMode Styles that change the toggleIcon, textContent form (Dark Mode to Light) and (fa-sun to fa-moon)
function darkThemeMode() {
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.remove("fa-sun");
  toggleIcon.children[1].classList.add("fa-moon");
}

// lightThemeMode Styles that change the toggleIcon, textContent from (Light Mode to Dark Mode) and (fa-moon to fa-sun)
function lightThemeMode() {
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.remove("fa-moon");
  toggleIcon.children[1].classList.add("fa-sun");
}


// Creating function that switch the theme dynamically form dark to light
function switchTheme(e) {
  if(e.target.checked) {
    // Return the documentElement of the document, The setAttribute() method adds the specified attribute to an element, and gives it the specified value.   
    document.documentElement.setAttribute("dark-theme", "dark");
    // calling the darkThemeMode function inside the if statment in other to switch together dynamically    
    darkThemeMode();
  } else {
    // Return the documentElement of the document, The setAttribute() method adds the specified attribute to an element, and gives it the specified value. 
    document.documentElement.setAttribute("dark-theme", "light");
     // calling the darkThemeMode function inside the else statment in other to switch together dynamically 
    lightThemeMode();
  }
}

// Creating Eventlister for the toggle
toggleSwitcher.addEventListener("change", switchTheme);

// Subscript Here
// Eventlistener / click with arrow function
clickBtn.addEventListener("click", () => {
  // if the dropdownDiscountContn/style is having display = to none okay do something
  if (dropdownDiscountContn.style.display === 'none') {
  // if the dropdownDiscountContn is then click, then do something by display block
    dropdownDiscountContn.style.display = 'block';
  } else {
  // if the dropdownDiscountContn is then click, then do something by display none of the block
    dropdownDiscountContn.style.display = 'none';
  }
});