function funk(){
    document.getElementById("Button").innerHTML = "Thank you";
    console.log("Roy Sopher")
}

function valiation() {
    const input = document.getElementById("password");
    if (!input.checkValidity()) {
        document.getElementById("password").innerHTML = inpObj.validationMessage;

    }

}