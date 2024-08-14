function reverseString(texto){
    let separar = texto.split("");
    let reversa = separar.reverse();
    let unir = reversa.join("");
    console.log(unir);
}

reverseString("odnum aloh")