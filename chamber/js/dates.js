const lastupdated = document.querySelector('#lastupdated');
    lastupdated.textContent = document.lastModified;


const copyrightyear = document.querySelector('#copyrightyear');
copyrightyear.textContent = new Date().getFullYear();

/*let stringDate=currDay+", "+currDate.getDate()+" "+currMonth+" "+currentYear;
document.getElementById("todayDate").textContent=stringDate;*/

/* Causing errors
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).date(now); 

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;  
*/

const d = new Date();
const year = d.getFullYear();

console.log(d.getDay());

if(d.getDay() === 2 || d.getDay() === 1) {
	const banner = document.querySelector("#banner");
	banner.style.display = "block";
}

/* NEW CODE TO TRY

//declare variables and get date information
const d = new Date();
const year = d.getFullYear();


// using getElementById
document.querySelector("#currentyear").textContent = year;
document.getElementById("lastupdated").textContent = `Last Updated: ${document.lastModified}`;

// element to output to
const datefieldUK = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

if(d.getDay() === 2 || d.getDay() === 1) {
	const banner = document.querySelector("#banner");
	banner.style.display = "block";
}

*/