document.addEventListener('DOMContentLoaded', function() { // (Tinha visto no YouTube que é uma boa prática
    const form = document.getElementById("add_pessoas");   //  colocar este "DOMContentLoaded" no comeso do js).

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const nome_input = document.getElementById("nome");
        const numero_input = document.getElementById("numero");

        var linha = "<tr>";
        linha += `<td>${nome_input.value}</td>`;
        linha += `<td>${numero_input.value}</td>`;
        linha += "</tr>";

        const tabela = document.getElementById("tabela");
        tabela.querySelector('tbody').innerHTML += linha; 

        nome_input.value = "";
        numero_input.value = "";
    });
});