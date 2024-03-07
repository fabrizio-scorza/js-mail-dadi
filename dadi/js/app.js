// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// dichiarazione delle variabili da utilizzare
let victory = 0;

    //assegnazione alle variabili di un valore random da 1 a 6 
    let userNumber = Math.floor(Math.random() * 6) + 1;
    let gameDealerNumber = Math.floor(Math.random() *6) + 1;

// confronto delle due variabili per decretare il vincitore
    if (userNumber > gameDealerNumber ){
        victory = 1;
    } else if (userNumber < gameDealerNumber){
        victory  = -1;
    } 

// stampa a video dei numeri con il vincitore
console.log('il tuo numero è: ' + userNumber + '. Il numero del banco è: ' + gameDealerNumber + '.');
if (victory == 1){
    console.log ('HAI VINTO');
} else if (victory == 0 ){
    console.log('PAREGGIO');
} else {
    console.log('HAI PERSO');
}
