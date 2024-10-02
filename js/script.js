//Em desenvolvimento

const projetos = [
    //...
];

function carregarProjetos(lang) {
    //...
}

// Expor carregarProjetos globalmente
window.carregarProjetos = carregarProjetos;

document.addEventListener('DOMContentLoaded', () => carregarProjetos('pt'));
