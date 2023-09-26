let campos = [
    document.querySelector("#nome_curso"),
    document.querySelector("#carga_curso")
];

let corpoTabela = document.querySelector("tbody");

let formulario = document.querySelector(".formulario");

formulario.addEventListener("submit",function(event) {
    
    event.preventDefault();

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let nomeCurso = campos[0].value;
    td1.textContent = nomeCurso;

    let td2 = document.createElement("td");
    let cargaCurso = campos[1].value;
    td2.textContent = cargaCurso;
    
    tr.appendChild(td1);
    tr.appendChild(td2);

    corpoTabela.appendChild(tr);
});