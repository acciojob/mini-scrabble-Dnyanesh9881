//your code here
let input=document .getElementById("evaluatedText");
input.addEventListener("input", ()=>{
	const textLength=document.getElementById("letterCount");

	textLength.innerText=input.value.length;
})