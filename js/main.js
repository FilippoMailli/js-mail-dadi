/*
Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato
Gioco dei dadi, chi fa di più vince

Creiamo un array di email i cui nomi siano presenti in lista.
Per prima cosa chiediamo all'utente di inserire il proprio nome e cognome così da creare la propria email.
Creiamo il messaggio appropriato per entrambe le situazioni.
*/

var nome, cognome;
var email;
var lista = [5];
var presente = 1;
var nonPresente = 0;
var entra = 0;

/* Nomi creati:
- mario rossi
- marco verdi
- giuseppe.neri
- francesco gialli
- michele bianchi
*/

var lista = ['mario.rossi@gmail.com', 'marco.verdi@gmail.com', 'giuseppe.neri@gmail.com', 'francesco.gialli@gmail.com', 'michele.bianchi@gmail.com'];
nome = prompt('Inserisci il tuo nome: ');
cognome = prompt('Inserisci il tuo cognome: ');

var email = nome + '.' + cognome + '@gmail.com';

for (var i = 0; i <= 4; i ++) {
    if (lista[i] == email){
        entra += presente;
    }
    else {
        entra += nonPresente;
    }
}

if (entra == presente) {
    console.log(email + ' sei stato ammesso!');
}
else {
    console.log(email + ' non sei stato ammesso :(');
}

/*
GIOCO DEI DADI
*/

var numero;
var mioTiro;

numero = Math.floor(Math.random() * 10) + 1;
mioTiro = Math.floor(Math.random() * 10) + 1;

console.log('Tiri un dado, esce ' + numero);
console.log('Tiro io, esce ' + mioTiro);

if (numero == mioTiro) {
    console.log('PAREGGIO!')
}
else if (numero <= mioTiro) {
    console.log('HO VINTO IO');
}
else {
    console.log('HAI VINTO!');
}
