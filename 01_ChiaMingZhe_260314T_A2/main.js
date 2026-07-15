//target all elements to save to constants
const infoquiz=document.querySelector("#infoquiz");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page1=document.querySelector("#page1");
const page2=document.querySelector("#page2");
const page3=document.querySelector("#page3");

function hideall(){ //function to hide all pages
	page1.style.display="none";
	page2.style.display="none";
	page3.style.display="none";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
infoquiz.addEventListener("click", function () {
	hideall(); //we don't know which page is shown, so hideall
	page1.style.display="block";
});
page2btn.addEventListener("click", function () {
	hideall(); //we don't know which page is shown, so hideall
	page2.style.display="block";
});
page3btn.addEventListener("click", function () {
	hideall(); //we don't know which page is shown, so hideall
	page3.style.display="block";
});
hideall(); //call hideall function to hide all pages