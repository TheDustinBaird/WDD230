const lastupdated = document.querySelector('#lastupdated');
    lastupdated.textContent = document.lastModified;


const copyrightyear = document.querySelector('#copyrightyear');
copyrightyear.textContent = new Date().getFullYear();

/*let stringDate=currDay+", "+currDate.getDate()+" "+currMonth+" "+currentYear;
document.getElementById("todayDate").textContent=stringDate;*/

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).date(now); 

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

const d = new Date();
const year = d.getFullYear();


if(d.getDay() === 2 || d.getDay() === 1) {
	const banner = document.querySelector("#banner");
	banner.style.display = "block";
}