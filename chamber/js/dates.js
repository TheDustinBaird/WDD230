const lastupdated = document.querySelector('#lastupdated');
    lastupdated.textContent = document.lastModified;


const d = new Date();
const year = d.getFullYear();

if(d.getDay() === 1 || d.getDay() === 2) {
	const banner = document.querySelector("#banner");
}

const copyrightyear = document.querySelector('#copyrightyear');
copyrightyear.textContent = year;

const datefield = document.querySelector(".date");
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(d);

datefield.innerHTML = `<em>${fulldateUK}</em>`;


