window.onload=init

function init() {
    const greetBtn = document.getElementById("greetBtn")
    greetBtn.onclick = onGreetUserBtnClicked
}

function onGreetUserBtnClicked() {
    const userText = document.getElementById("nameField")
    alert ("Hello " + userText.value);
}
