const lastupdated = document.querySelector('#lastupdated');
    lastupdated.textContent = document.lastModified;


const d = new Date();
const year = d.getFullYear();

if(d.getDay() === 2 || d.getDay() === 1) {
	const banner = document.querySelector("#banner");
    banner.style.display = "block";
}
console.log()

const copyrightyear = document.querySelector('#copyrightyear');
copyrightyear.textContent = year;

const datefield = document.querySelector(".date");
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(d);




