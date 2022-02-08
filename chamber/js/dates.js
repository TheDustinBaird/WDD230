const lastupdated = document.querySelector('#lastupdated');
    lastupdated.textContent = document.lastModified;


const copyrightyear = document.querySelector('#copyrightyear');
copyrightyear.textContent = new Date().getFullYear();

let stringDate=currDay+", "+currDate.getDate()+" "+currMonth+" "+currentYear;
document.getElementById("todayDate").textContent=stringDate;


console.log(d.getDay());
if(d.getDay() === 2 || d.getDay() === 1) {
	const banner = document.querySelector("#banner");
	banner.style.display = "block";
}