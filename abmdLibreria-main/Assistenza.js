function sendEmail() {
    var issue = document.getElementById('issue').value;
    var userEmail = document.getElementById('userEmail').value;
    var userName = document.getElementById('userName').value;
    // Controllo se il nome contiene solo lettere
    var namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(userName)) {
        alert("Il nome può contenere solo lettere.");
        return false;
    }
    // Controllo se la descrizione del problema contiene solo lettere
    if (!namePattern.test(issue)) {
        alert("La descrizione del problema può contenere solo lettere.");
        return false;
    }
    if (issue.trim() === "" || userEmail.trim() === "" || userName.trim() === "") {
        alert("Per favore, compila tutti i campi.");
        return false;
    }
    var email = "mancuso.alessio@iisgalvanimi.edu.it";
    var subject = "Richiesta di Assistenza";
    var body = "Nome: " + userName + "\nEmail: " + userEmail + "\nDescrizione del problema:\n" + issue;
    window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    return false;
}
function copyToClipboard() {
    var issue = document.getElementById('issue');
    issue.select();
    issue.setSelectionRange(0, 99999); // Per dispositivi mobili
    document.execCommand("copy");
    alert("Testo copiato: " + issue.value);
}
function toggleFAQ(event) {
    var faqAnswer = event.target.nextElementSibling;
    faqAnswer.style.display = faqAnswer.style.display === "none" ? "block" : "none";
}