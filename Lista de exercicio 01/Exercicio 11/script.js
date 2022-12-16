function area(){
    var maior = parseFloat(prompt("Digite o valor da base maior: "));
    var menor = parseFloat(prompt("Digite o valor da base menor: "));
    var altura = parseFloat(prompt("Digite o valor da altura: "));
    area =((maior + menor) * altura) / 2;
    alert("O valor da area do trapezio é " + area);
}