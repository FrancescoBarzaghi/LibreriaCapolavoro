function myLogin(){
    let x = document.getElementById("myInput");
    let y = document.getElementById("nascondi1");
    let z = document.getElementById("nascondi2");
    if (x.type == "password"){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }   
}
function salvaJSON() {
    let nome = document.getElementById("nome").value;
    let password = document.getElementById("myInput").value;
    
    if(nome === "" || password === "") {
        alert("Devi compilare tutti campi");
    } else {
        // Hash della password
        let passwordHash = CryptoJS.SHA256(password).toString();
        
        let utentiAcc = {
            "nome": nome,
            "password": passwordHash  
        };
        
        // Salva i dati 
        localStorage.setItem("datiUtente", JSON.stringify(utentiAcc));
        console.log("Dati salvati:", utentiAcc);
        alert("Dati salvati");
        window.location.href = "login.html";
    }
}
function salvaJSONAcc() {
    let nome = document.getElementById("nome").value;
    let password = document.getElementById("myInput").value;
    
    if(nome === "" || password === "") {
        alert("Devi compilare tutti campi");
    } 
    else {
        let passwordHash = CryptoJS.SHA256(password).toString();
        let utenti = {
            "nome": nome,
            "password": passwordHash  
        };
        let datiUtente = localStorage.getItem("datiUtente");
        if (datiUtente!== null) {
            // Hash della password inserita
            let jsonstringa = JSON.stringify(utenti);
            if (jsonstringa === datiUtente) {
                setTimeout(() => {
                    if (nome === "Admin") {
                        window.location.href = "aggiungiLibro.html";
                    } else {
                        window.location.href = "index (1).html";
                    }
                }, 1000);
            }
            else {
                alert("Dati non presenti o non corrispondenti.");
            }
        }
        else {
            alert("Nessun dato salvato.");
        }
    }
}
