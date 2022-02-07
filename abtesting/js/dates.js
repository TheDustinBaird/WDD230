const lastupdated = document.querySelector('#lastupdated');
    lastupdated.textContent = document.lastModified;


const copyrightyear = document.querySelector('#copyrightyear');
copyrightyear.textContent = new Date().getFullYear();