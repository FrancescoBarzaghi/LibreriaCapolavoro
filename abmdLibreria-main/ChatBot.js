
document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("send-button");
    const chatInput = document.getElementById("chat-input");
    const chatContainer = document.getElementById("chat-container");

    sendButton.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") sendMessage();
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message === "") return;

        appendMessage("Tu", message, "user");
        chatInput.value = "";

        setTimeout(() => {
            const response = getBotResponse(message);
            appendMessage("Bot", response, "bot");
        }, 500);
    }

    function appendMessage(sender, message, className) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", className);
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes("ciao")) {
            return "Ciao! Benvenuto nell'assistenza online. Come posso aiutarti?";
        } else if (lowerMessage.includes("come funziona")) {
            return "Il nostro servizio ti permette di chattare con un agente virtuale per ottenere supporto immediato. Scrivi un messaggio nella casella di testo e premi Invia per iniziare!";
        } else if (lowerMessage.includes("aiuto") || lowerMessage.includes("assistenza")) {
            return "Sono qui per aiutarti. Puoi chiedermi informazioni sui nostri servizi, prezzi, orari e molto altro.";
        } else if (lowerMessage.includes("prezzo")) {
            return "I prezzi variano in base al servizio richiesto. Puoi fornirmi più dettagli sul servizio di cui hai bisogno per informazioni più specifiche.";
        } else if (lowerMessage.includes("orari")) {
            return "Siamo aperti dal lunedì al venerdì dalle 9:00 alle 18:00. Puoi contattarci in qualsiasi momento tramite questa chat.";
        } else if (lowerMessage.includes("sull'account")) {
            return "devi andare su login nella schermata home in alto a destra.";
        } else if (lowerMessage.includes("dati")) {
            return "vai su chi siamo per scoprire dei dati su di noi.";
        } else if (lowerMessage.includes("servizio")) {
            return "I nostri principali servizzi sono: la ricerca di libri, aggiunta di libri, i generi, il login, l'assistenza.  ";
        } else if (lowerMessage.includes("grazie")) {
            return "Non c'è di che! Se bisogno non esistare a scrivermi ";
        } else {
            return "Mi dispiace, non ho capito. Puoi chiedermi come funziona il servizio, assistenza o qualsiasi altra cosa desideri sapere!";
        } 
        
    }
});