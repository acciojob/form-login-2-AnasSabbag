//your JS code here. If required.

function handleSubmit() {
	const fName=document.getElementById("first-name").value;
	const lName=document.getElementById("last-name").value;
	const phone=document.getElementById("phone").value;
	const email=document.getElementById("email").value;

	
	const alrt=`First Name: ${fName}\nLast Name: ${lName} \nPhone Number: ${phone} \nEmail ID: ${email}\n`;
	alert(alrt);
	
}