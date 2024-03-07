// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// dichiarazione dell'array con la lista di e-mail
const  mailList = ['pippopluto@gmail.com', 'paperinopippo@gmail.com', 'topolinopaperino@hotmail.com', 'alfonzononfare@outlook.it', 'parappeomarameo@libero.it', 'calimerotuttonero@msn.com', 'lamiaemail@email.it'];

// richiesta della mail tramite prompt e assegnazione ad una variabile
const userEmail = prompt('inserisci la tua e-mail');

// inizializzazione variabile la tua mail è presente
let isYourMailIn = false; 

// controllo della mail in input in array lista mail
    // ciclo per scorrere tutti gli elementi dell'array
    for (let i= 0; i < mailList.length; i++){

    //confronto dell'elemento dell'array con indice i, con la variabile usermail
        if (userEmail === mailList[i]){
            isYourMailIn = true;
        }    
    }
// messaggio di allert appropriato in base a se la mail è o meno presente
if (isYourMailIn === true){
    console.log('la tua e-mail: ' + userEmail + ' è contenuta nei nostri archivi, puoi procedere alla navigazione.');
} else {
    alert('E-mail non registrata o errata!');
}