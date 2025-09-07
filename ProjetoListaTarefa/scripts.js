
function adicionarTarefa() {
  let mensagem = "Tarefa adicionada com sucesso!";
  document.getElementById("mensagem").textContent = mensagem;

  let inputTarefa = document.getElementById("tarefa");

  let tarefa = inputTarefa.value;

  let listaTarefa= document.getElementById("listadetarefa");

  let li= document.createElement("li");

  li.textContent= tarefa

  listaTarefa.appendChild(li);

 
}

