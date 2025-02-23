//your JS code here. If required.

function handleSubmit() {
	let fName=form.querySelector('[name="First Name"]').value;
	let lName=form.querySelector('[name="Last Name"]').value;
	let phone=form.querySelector('[name="Phone Number"]').value;
	let email=form.querySelector('[name="Email ID"]').value;
	

	alert(`First Name: ${fName}\nLast Name: ${lName} \nPhone Number: ${phone} \nEmail ID: ${email}`);
	
	
}