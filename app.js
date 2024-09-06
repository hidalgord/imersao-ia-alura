function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultado-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Inserir dados para a busca</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string para armazenar o HTML dos resultados
    let resultado = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    // Itera sobre cada dado da pesquisa e constrói o HTML
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) ||
            descricao.includes(campoPesquisa) ||
            tags.includes(campoPesquisa)) {
            resultado += `
                <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultado;

    if (!resultado) {
        section.innerHTML = "<p>Dados não encontrados</p>"
    }
}