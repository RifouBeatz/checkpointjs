function mettreMotsEnMajuscules(phrase) {
    return phrase.split(' ').map(mot => mot.charAt(0).toUpperCase() + mot.slice(1)).join(' ');
}


console.log(mettreMotsEnMajuscules("bonjour tout le monde")); 
