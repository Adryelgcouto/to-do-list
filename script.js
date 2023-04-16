function finalizarTarefa(tarefa) {
  const elementoPai = tarefa.parentNode
  elementoPai.classList.toggle('finalizada')
}
const listaFix = [
  'Adicione uma tarefa no botão acima ☝️',
  'Passe o mouse na tarefa para ver o botão excluir 🗑️',
  'Clique na tarefa para marca-la como feita ✔️'
]
console.log(listaFix)
function listaFixas() {
  // pegar aequivo da lista
  const ul = document.querySelector("ul")
  for (let i = 0; i < listaFix.length; i++){
    let ulLista = listaFix[i]
    ul.innerHTML += `
                  <li>
                      <div class="btn-delete">
                        <ion-icon name="trash-outline"></ion-icon>
                      </div>
                      <span onclick="finalizarTarefa(this)">${ulLista}</span>
                  </li>
    
    `
  }
}
listaFixas()
function enivarInfo(){
  const text = document.querySelector("input");
  console.log(text.value)
  //selecionar o ul novamente 
  const ulValue = document.querySelector("ul")
  ulValue.innerHTML += `
  <li>
  <div class="btn-delete">
    <ion-icon name="trash-outline"></ion-icon>
  </div>
  <span onclick="finalizarTarefa(this)">${text.value}</span>
</li>
  `

}

function finalizarTodas() {
  const listaCheck = document.querySelectorAll('li');
  console.log(listaCheck)
  for(let i = 0; i < listaCheck.length; i++){
    listaCheck[i].classList.toggle('finalizada')
  }
  // colocasr a classe neles 
  
}