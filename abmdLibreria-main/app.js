//variabili
var input = document.querySelector('.input_text');
var tit = document.querySelector('.titolo');
var di = document.querySelector('.id');
var gen = document.querySelector('.genere');
var button= document.querySelector('.search-button');
var prezz= document.querySelector('.prezzo');
var imma = document.querySelector('.immagine');
// funzione per vedere la get
var formget1 = document.getElementById("get");
formget1.style.display = "none";
function formget() {
  if (formget1.style.display === "none") {
    formget1.style.display = "block";
  } else {
    formget1.style.display = "none";
  }
}
// richiesta get
button.addEventListener('click', function(){
var nome = input.value;
fetch('https://librarymanagementpw.azurewebsites.net/api/Book')
.then(response => response.json())
.then(data => {
  for(var i=0; i<data.length; i++){
    obj = data[i];
    for(var key in obj){
      var value = obj[key];
      console.log(obj);
      if(key == "title" || key == "id"|| key == "genreName"){
        //console.log(value);
        if(nome == value){
          var tit = obj['title'];
          var di = obj['id']; 
          var gen = obj['genreName'];
          var prezz = obj['price'];
          if(tit == "Viaggio al centro della terra" || di == 959){
            imma.src = "https://alessandria.bookrepublic.it/api/books/9788809815896/cover";
          }
          else if(nome == "Il mastino dei baskerville"|| di == 978){
            imma.src = "https://images-na.ssl-images-amazon.com/images/I/71sbLSDNoWL._SL1132_.jpg";
          }
          else if(nome == "Giro del mondo in 80 giorni" || di == 990){
            imma.src = "https://www.havocpoint.it/wp-content/uploads/2020/09/giro_mondo_n_ed_cover_HR_rgb.jpg";
          }
          else if(nome == "007" || di == 965){
            imma.src = "https://1.bp.blogspot.com/-VXkps2kyguw/Xn9RjOIsxnI/AAAAAAABBvY/OUlrJwsac7Uw4SDq2zv7VdxqRO-V2N6pACLcBGAsYHQ/s1600/r0JB_01_01.jpg";
          }
          else if(nome == "IT" || di == 966){
            imma.src = "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501175466/it-9781501175466_hr.jpg";
          }
          else if(nome == "Assasinio a venezia" || di == 991){
            imma.src = "https://www.multiplexalbenga.it/media/content/3929/assassinio.jpg";
          }
          else if(nome == "L'ombra dello scorpione" || di == 910){
            imma.src = "https://img.libraccio.it/images/9788845275739_0_500_0_75.jpg";
          } 
          else if(nome == "L'imprevedibile piano della scrittrice senza nome" || di == 964){
            imma.src = "https://i.pinimg.com/originals/8b/5e/ae/8b5eae57524f3f6e80056b4375de8448.jpg";
          } 
          $('.titolo').text(tit);
          $('.id').text("id: " + di);
          $('.genere').text("genere: "+gen);
          $('.prezzo').text("prezzo: "+prezz+"€");
        }
      }
    }
  }
})
.catch(err => {
  console.log(err)
  alert("get andata male")
});
})
// get per i libri in evidenza
window.onload = function() {
  function initialize() {
    var nome1 = "Viaggio al centro della terra";
    fetch('https://librarymanagementpw.azurewebsites.net/api/Book')
    .then(response => response.json())
    .then(data => {
      for(var i=0; i<data.length; i++){
        obj = data[i];
        for(var key in obj){
          var value = obj[key];
          if(key == "title" || key == "id"|| key == "genreName"){
            if(nome1 == value){
              var tit = obj['title'];
              var di = obj['id']; 
              var gen = obj['genreName'];
              var prezz = obj['price'];
              $('.titolo1').text(tit);
              $('.id1').text("id: " + di);
              $('.genere1').text("genere: "+gen);
              $('.prezzo1').text("prezzo: "+prezz+"€");
            }
          }
        }
      }
    })
    var nome2 = "Il mastino dei baskerville";
    fetch('https://librarymanagementpw.azurewebsites.net/api/Book')
    .then(response => response.json())
    .then(data => {
      for(var i=0; i<data.length; i++){
        obj = data[i];
        for(var key in obj){
          var value = obj[key];
          if(key == "title" || key == "id"|| key == "genreName"){
            if(nome2 == value){
              var tit = obj['title'];
              var di = obj['id']; 
              var gen = obj['genreName'];
              var prezz = obj['price'];
              $('.titolo2').text(tit);
              $('.id2').text("id: " + di);
              $('.genere2').text("genere: "+gen);
              $('.prezzo2').text("prezzo: "+prezz+"€");
            }
          }
        }
      }
    })
    var nome3 = "Giro del mondo in 80 giorni";
    fetch('https://librarymanagementpw.azurewebsites.net/api/Book')
    .then(response => response.json())
    .then(data => {
      for(var i=0; i<data.length; i++){
        obj = data[i];
        for(var key in obj){
          var value = obj[key];
          if(key == "title" || key == "id"|| key == "genreName"){
            if(nome3== value){
              var tit = obj['title'];
              var di = obj['id']; 
              var gen = obj['genreName'];
              var prezz = obj['price'];
              $('.titolo3').text(tit);
              $('.id3').text("id: " + di);
              $('.genere3').text("genere: "+gen);
              $('.prezzo3').text("prezzo: "+prezz+"€");
            }
          }
        }
      }
    })
    var nome4 = "007";
    fetch('https://librarymanagementpw.azurewebsites.net/api/Book')
    .then(response => response.json())
    .then(data => {
      for(var i=0; i<data.length; i++){
        obj = data[i];
        for(var key in obj){
          var value = obj[key];
          if(key == "title" || key == "id"|| key == "genreName"){
            if(nome4== value){
              var tit = obj['title'];
              var di = obj['id']; 
              var gen = obj['genreName'];
              var prezz = obj['price'];
              $('.titolo4').text(tit);
              $('.id4').text("id: " + di);
              $('.genere4').text("genere: "+gen);
              $('.prezzo4').text("prezzo: "+prezz+"€");
            }
          }
        }
      }
    })
    var nome5 = "IT";
    fetch('https://librarymanagementpw.azurewebsites.net/api/Book')
    .then(response => response.json())
    .then(data => {
      for(var i=0; i<data.length; i++){
        obj = data[i];
        for(var key in obj){
          var value = obj[key];
          if(key == "title" || key == "id"|| key == "genreName"){
            if(nome5== value){
              var tit = obj['title'];
              var di = obj['id']; 
              var gen = obj['genreName'];
              var prezz = obj['price'];
              $('.titolo5').text(tit);
              $('.id5').text("id: " + di);
              $('.genere5').text("genere: "+gen);
              $('.prezzo5').text("prezzo: "+prezz+"€");
            }
          }
        }
      }
    })
    var nome6 = "Assassinio a venezia";
    fetch('https://librarymanagementpw.azurewebsites.net/api/Book')
    .then(response => response.json())
    .then(data => {
      for(var i=0; i<data.length; i++){
        obj = data[i];
        for(var key in obj){
          var value = obj[key];
          if(key == "title" || key == "id"|| key == "genreName"){
            if(nome6== value){
              var tit = obj['title'];
              var di = obj['id']; 
              var gen = obj['genreName'];
              var prezz = obj['price'];
              $('.titolo6').text(tit);
              $('.id6').text("id: " + di);
              $('.genere6').text("genere: "+gen);
              $('.prezzo6').text("prezzo: "+prezz+"€");
            }
          }
        }
      }
    })
    var nome7 = "L'ombra dello scorpione";
    fetch('https://librarymanagementpw.azurewebsites.net/api/Book')
    .then(response => response.json())
    .then(data => {
      for(var i=0; i<data.length; i++){
        obj = data[i];
        for(var key in obj){
          var value = obj[key];
          if(key == "title" || key == "id"|| key == "genreName"){
            if(nome7== value){
              var tit = obj['title'];
              var di = obj['id']; 
              var gen = obj['genreName'];
              var prezz = obj['price'];
              $('.titolo7').text(tit);
              $('.id7').text("id: " + di);
              $('.genere7').text("genere: "+gen);
              $('.prezzo7').text("prezzo: "+prezz+"€");
            }
          }
        }
      }
    })
    var nome8 = "L'imprevedibile piano della scrittrice senza nome";
    fetch('https://librarymanagementpw.azurewebsites.net/api/Book')
    .then(response => response.json())
    .then(data => {
      for(var i=0; i<data.length; i++){
        obj = data[i];
        for(var key in obj){
          var value = obj[key];
          if(key == "title" || key == "id"|| key == "genreName"){
            if(nome8== value){
              var tit = obj['title'];
              var di = obj['id']; 
              var gen = obj['genreName'];
              var prezz = obj['price'];
              $('.titolo8').text(tit);
              $('.id8').text("id: " + di);
              $('.genere8').text("genere: "+gen);
              $('.prezzo8').text("prezzo: "+prezz+"€");
            }
          }
        }
      }
    })
  }
  
  initialize();
};
//var
var addBookBtn = document.querySelector('.submitBook');
var AddBookFormDiv = document.getElementById("AddBookForm");

AddBookFormDiv.style.display = "none";

//fuzione per vedre aggiungi libro
function toggleAddBook() {
  if (AddBookFormDiv.style.display === "none") {
    AddBookFormDiv.style.display = "block";
  } else {
    AddBookFormDiv.style.display = "none";
  }
}
//funzione per aggiungere libro (post)
addBookBtn.addEventListener('click', function() {
  var titoloTxt = document.getElementById('titolo');
  var prezzoTxt = document.getElementById('prezzo');
  let isbnTxt = document.getElementById('isbn');
  var genereTxt = document.getElementById('genere');
  var prez = prezzoTxt.value;
  var isb = isbnTxt.value;
  if(genereTxt.value == "avventura"){
    var genereId = 5;
  }
  else if(genereTxt.value == "giallo"){
    var genereId = 6;
  }
  else if(genereTxt.value == "horror"){
    var genereId = 1;
  }
  else if(genereTxt.value == "drammatico"){
    var genereId = 11;
  }
  else if(genereTxt.value == "commedia"){
    var genereId = 10;
  }
  else if(genereTxt.value == "romantico"){
    var genereId = 3;
  }
  else if(genereTxt.value == "noir"){
    var genereId = 7;
  }
  else if(genereTxt.value == "azione"){
    var genereId = 8;
  }
  else if(genereTxt.value == "fantasy"){
    var genereId = 2;
  }
  else if(genereTxt.value == "thriller"){
    var genereId = 4;
  }
  
  if (prez > 0 && !isNaN(prez)) {
    if (isb.length >= 13 && isb.length <= 17) {
      let post = {
        "id": 4, 
        "title": titoloTxt.value,
        "price": Number(prezzoTxt.value),
        "isOut": true,
        "isbn": isb,
        "genreId": genereId, 
        "shelfId": 1, 
        "genreName": genereTxt.value
      };

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      };

      fetch('https://librarymanagementpw.azurewebsites.net/api/Book', requestOptions)
        .then(response => {
          if (!response.ok) {
            return response.text().then(text => {
              throw new Error(`Richiesta non accettata: ${response.statusText} - ${text}`);
            });
          }
          return response.text(); // Legge risposta
        })
        .then(text => {
          if (text) {
            return JSON.parse(text); // risposta non vuota, parsing del JSON
          } else {
            return {}; // Se la risposta è vuota, ritorna un oggetto vuoto
          }
        })
        .then(data => {
          console.log(data);
          alert("Post andato a buon fine");
        })
        .catch(err => {
          console.error(err);
          alert("Post andato male");
        });
    } else {
      alert("L'ISBN deve contenere tra 13 e 17 numeri");
    }
  } else {
    alert("Il prezzo deve essere un numero maggiore di 0");
  }
});

// funzione vedi elimina
var formeli = document.getElementById("elimina");

formeli.style.display = "none";
function formelimina() {
  if (formeli.style.display === "none") {
    formeli.style.display = "block";
  } else {
    formeli.style.display = "none";
  }
}
// funzione elimina (delete)
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('elim');

  button.addEventListener('click', event => {
    event.preventDefault(); // comportamento del pulsante

    const bookId = document.getElementById('bookId').value;
    const url = `https://librarymanagementpw.azurewebsites.net/api/Book/${bookId}`;

    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('richiesta respinta ' + response.statusText);
      }
      //  risposta contenuto da leggere
      return response.text().then(text => text ? JSON.parse(text) : {});
    })
    .then(data => {
      alert('Cancellazione avvenuta con successo');
      console.log(data);
    })
    .catch(error => {
      alert('Error: ' + error.message);
    });
  });
});
// funzione manda email
function sendEmail() {
  var issue = document.getElementById('issue').value;
  var userEmail = document.getElementById('userEmail').value;
  var userName = document.getElementById('userName').value;
  // nome contiene solo lettere
  var namePattern = /^[A-Za-z\s]+$/;
  if (!namePattern.test(userName)) {
      alert("Il nome può contenere solo lettere.");
      return false;
  }
  // descrizione del problema contiene solo lettere
  if (!namePattern.test(issue)) {
      alert("La descrizione del problema può contenere solo lettere.");
      return false;
  }
  if (issue.trim() === "" || userEmail.trim() === "" || userName.trim() === "") {
      alert("Per favore, compila tutti i campi.");
      return false;
  }
  // ASSISTENZA
  var email = "mancuso.alessio@iisgalvanimi.edu.it";
  var subject = "Richiesta di Assistenza";
  var body = "Nome: " + userName + "\nEmail: " + userEmail + "\nDescrizione del problema:\n" + issue;
  window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  return false;
}
//funzione copia testo
function copyToClipboard() {
  var issue = document.getElementById('issue');
  issue.select();
  issue.setSelectionRange(0, 99999); // Per dispositivi mobili
  document.execCommand("copy");
  alert("Testo copiato: " + issue.value);
}
// funzione FAQ
function toggleFAQ(event) {
  var faqAnswer = event.target.nextElementSibling;
  faqAnswer.style.display = faqAnswer.style.display === "none" ? "block" : "none";
}