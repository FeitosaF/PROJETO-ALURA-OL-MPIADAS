// O resultado no OUTPUT do VSCode está dando erro por causa que não está na mesma página.
// O resultado só aparece no console do navegador.
/*console.log(dados);
console.log(dados[1]);
console.log(dados[0].descricao);*/


function pesquisar(){

  let section = document.getElementById ('atletas');

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

if (!campoPesquisa) { // Condiçao como campo de busca vazio
  section.innerHTML = "<p class = 'bad'> Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte </p>";
  return
}

campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = ""; // String vazia para armazenar os resultados
  let titulo = "";
  let descricao = "";
  let tags = "";
  
  // Para cada dado da lista de dados faz uma alteração
  for (let dado of dados){ // O for coloca todos os elementos
    
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += ` 
      <div class="atletas-resultados">
      <h2> <a href="#" target="_blank"> ${dado.titulo} </a> </h2>
          <p class="descricao"> ${dado.descricao} </p>
          <p class="descricaoa"> <a href= ${dado.link} target="_blank"> Mais informações </a> </p>
    </div>
  `;
    }
      
  };

  if (!resultados) {
    resultados = "<p class = 'bad'> Nada foi encontrado </p>";
    
  }
  section.innerHTML = resultados;


} 

