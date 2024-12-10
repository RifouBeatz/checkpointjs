function sommeTableau(tableau) {
    return tableau.reduce((accumulateur, valeur) => accumulateur + valeur, 0);
}


console.log(sommeTableau([1, 2, 3, 4])); 
