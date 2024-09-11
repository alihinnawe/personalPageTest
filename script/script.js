const friendNames = [
	{ given: "Ines", family: "Hannemann" },
	{ given: "Dirk", family: "Wöhr" },
	{ given: "Martin", family: "Feil" },
	{ given: "Wolfram", family: "Scheck" },
	{ given: "Anja", family: "Metelmann" },
	{ given: "Eva", family: "Hinnawe" },
	{ given: "Ali", family: "null" }

];

function initialize () {

		document.querySelector("div.life>div.resume>label").classList.add("highlight");
	}
	



window.addEventListener("load", event => {
	initialize();
	
	const personTemplate = document.querySelector(".table-template");
	const tableBodyRow = document.querySelector(".tableClass");
	
	for(const friendName of friendNames){
		
		const templatePerson = personTemplate.content.firstElementChild.cloneNode(true);
		tableBodyRow.append(templatePerson);
		templatePerson.querySelector("td.vorName").textContent = friendName.given ;
		templatePerson.querySelector("td.nachName").textContent = friendName.family;
		
	}
	
	
});

const buttonSubmission = document.querySelector("main>div>button")
buttonSubmission.addEventListener("click",(event)=>{
	const emailAddress = document.querySelector("div.credential>div.email>input").value.trim() || null;

	const person = {
		email: emailAddress
	
	}

	const person1 = JSON.stringify(person);
	const footer1 = document.querySelector("body>footer");
	footer1.append(person1);

	const labels = document.querySelectorAll("div.resume>label")
	for (const label of labels) {
		label.classList.remove("highlight")

	}
	
})



