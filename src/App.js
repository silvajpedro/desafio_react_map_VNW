import React, {Component} from "react"

export default class desafio extends Component{
state = {
  pessoa:[
  {nome: "Thrall", raça:"Orc" , classe:"Guerreiro", idade: "97", profissão:"Esfolamento"},
  {nome: "Dreltok", raça:"Troll" , classe:"Druida", idade: "202", profissão:"Botânica"},
  {nome: "Sylvanas", raça:"Undead" , classe:"Ladina", idade: "???", profissão:"Couraria"},
  {nome: "Solas", raça:"Elfo" , classe:"Mago", idade: "796", profissão:"Alquimia"},
  {nome: "Zoltan", raça:"Anão" , classe:"Caçador", idade: "65", profissão:"Ferraria"},
  {nome: "Anduin", raça:"Humano" , classe:"Paladino", idade: "45", profissão:"Mineração"},
],
jogo:"World of Warcraft"
}

  render(){
    return(
      <div>
        {this.state.pessoa.map((item)=>(
          <p>O(a) {item.raça} de nome {item.nome} tem como classe {item.classe} com {item.idade} anos e profissão em {item.profissão}</p>
        ))}
        <p>Só pra quem jogou {this.state.jogo}!!!</p>
      </div>
    )
  }
}
//com uma arrow function 3 modais 1 menu, 1 mensagem  e 1 imagem
// modal menu hamburguer e imagem