col1 = document.getElementById("colorPick1");
col2 = document.getElementById("colorPick2");
css = document.querySelector("h3")
btn = document.getElementById("random");

function setGrad() {
 document.body.style.background = "linear-gradient(to right, " + col1.value + ", " + col2.value + ")"
 css.textContent = document.body.style.background + ";";
}

setGrad();

col1.addEventListener("input", setGrad);

col2.addEventListener("input", setGrad);

btn.addEventListener("click", setRGrad);

var name = "Josh"

var a = `Hello ${name}`
