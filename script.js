let num = document.getElementsByClassName("ascii");
let p = document.getElementById("soma");
let addLogin = document.getElementById("letraLogin");
let addPassword = document.getElementById("letraPass");
let login = document.getElementById("login");
let password = document.getElementById("password");
let restart = document.getElementById("restart");
let inputs = document.getElementsByTagName("input");

let valor = "";
let ascii = 0;
let texto = "";

for(let i=0; i<4; i++) {
    num[i].addEventListener("click", function() {
        ascii += parseInt(this.value);
        if(ascii>31 && ascii<127) {
            valor = String.fromCharCode(ascii);
        } else {
            valor = "Valor invalido";
        }

        texto = ascii + " = " + valor;
        p.innerText = texto;
    })
}

addLogin.addEventListener("click", function() {
    p.innerText = "''";
    let input = login.value;
    if(ascii <=31 || ascii>127) {
        valor = "";
    }
    input += valor;
    login.value = input;
    ascii = 0;
});

addPassword.addEventListener("click", function() {
    p.innerText = "''";
    let input = password.value;
    if(ascii <=31 || ascii>127) {
        valor = "";
    }
    input += valor;
    password.value = input;
    ascii = 0;
});

restart.addEventListener("click", function() {
    ascii = 0;
    p.innerHTML = "''";
    password.value = "";
    login.value = "";
});


