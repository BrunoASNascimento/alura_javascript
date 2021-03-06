var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function () {
    event.preventDefault();
    var form = document.querySelector("#form-add");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTR = document.createElement("tr");
    
    var nomeTD = document.createElement("td");
    var pesoTD = document.createElement("td");
    var alturaTD = document.createElement("td");
    var gorduraTD = document.createElement("td");
    var imcTD = document.createElement("td");

    nomeTD.textContent=nome;
    pesoTD.textContent=peso;
    alturaTD.textContent=altura;
    gorduraTD.textContent=gordura;
    imcTD.textContent=calculaImc(peso,altura);

    pacienteTR.appendChild(nomeTD);
    pacienteTR.appendChild(pesoTD);
    pacienteTR.appendChild(alturaTD);
    pacienteTR.appendChild(gorduraTD);
    pacienteTR.appendChild(imcTD);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTR);

});