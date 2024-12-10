function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}


console.log(filtrerTableau([1, 2, 3, 4, 5], nombre => nombre % 2 === 0)); 
