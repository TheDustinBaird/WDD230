const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");


button.addEventListener('click', function(){
if (input.value == ''){
    alert("Please enter a book and chapter");
}
else{    
  let inputItem = input.value;
  input.value = "";


  const listItem = document.createElement("li");
  const delBtn = document.createElement("button");
  const userText = document.createElement("span");


  listItem.appendChild(userText);
  userText.textContent = inputItem;
  listItem.appendChild(delBtn);
  delBtn.textContent = "❌";
  list.appendChild(listItem);

  delBtn.onclick = function (e) {
    list.removeChild(listItem);
    input.focus();
  };

  input.focus();
}
});
