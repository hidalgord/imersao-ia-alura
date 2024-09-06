function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultado-pesquisa");

    // Inicializa uma string para armazenar o HTML dos resultados
    let resultado = "";

    // Itera sobre cada dado da pesquisa e constrói o HTML
    for (let dado of dados) {
        resultado += `
        <div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
    }

    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultado;
}