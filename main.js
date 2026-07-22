//target all elements to save to constants
const infoquiz=document.querySelector("#infoquiz");
const cutgame=document.querySelector("#cutgame");
const page3btn=document.querySelector("#page3btn");
const page1=document.querySelector("#page1");
const page2=document.querySelector("#page2");
const page3=document.querySelector("#page3");
const btnSubmit=document.querySelector("#btnSubmit"); 
const scorebox=document.querySelector("#scorebox");
const cutAudio = new Audio("audio/cutting.mp3");
const imageArray = ["images/trim.gif", "images/zoom.gif", "images/drag.gif", "images/playback.gif", "images/transition.gif", "images/saturation.gif"]; 
const dynamicArea = document.querySelector("#dynamicArea");

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
	var q1,q2,score=0;
	corrAnsArray=["idklol","wow","Power Director"];
	function CheckAns(){    
		score=0; //reset score to 0, check ans and give score if correct 
		for(let i=0;i<corrAnsArray.length;i++){
			CheckOneQn(i+1,corrAnsArray[i]);
		}
		scorebox.innerHTML="Score:"+score;
	}
	btnSubmit.addEventListener("click",CheckAns);
	function CheckOneQn(qnNo,CorrAns){
		qTemp=document.querySelector("input[name='q"+qnNo+"']:checked").value;
		if(qTemp==CorrAns)score++;
		console.log(qTemp); //check q1 value retrieved
	}
});
cutgame.addEventListener("click", function () {
	hideall(); //we don't know which page is shown, so hideall
	var idcount=0; //to generate unique id
	addBtn=document.querySelector("#addBtn");
	addBtn.addEventListener("click",addElement);
	remBtn=document.querySelector("#remBtn");
	remBtn.addEventListener("click",function(){
		dynamicArea.replaceChildren(); //removes all clips
		cutAudio.play(); //plays cutting audio
	});
	function addElement(){ //add a new element, assign new id
		var childCount=dynamicArea.children.length;
		var newDiv = document.createElement('div');
		newDiv.id = 'new-clip-'+(idcount++); //increment id  
		newDiv.textContent = "vid:"+newDiv.id;
		newDiv.className = 'new-class';
		let imageVar=imageArray[idcount%imageArray.length];
		newDiv.style.backgroundImage = imageVar;
		dynamicArea.appendChild(newDiv);
	}
	//add eventlistner to parent, as delegate
	dynamicArea.addEventListener("click",SomeFn);
	function SomeFn(evt){
		console.log(this); //see who received.
		var sender=evt.target;
		console.log(sender); //see who is sender
		sender.remove(); //remove clip individually
		cutAudio.play();
	}
	page2.style.display="block";
	
});
page3btn.addEventListener("click", function () {
	hideall(); //we don't know which page is shown, so hideall
	page3.style.display="block";
});
hideall(); //call hideall function to hide all pages