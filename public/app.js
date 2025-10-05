// app.js - Estúdio Lua Cris
// Estrutura de dados JSON para os serviços
const dadosServicos = [
    {
        "id": 1,
        "titulo": "Ensaio Infantil",
        "descricao": "Registramos a pureza e a alegria das crianças em momentos espontâneos e divertidos.",
        "conteudo": "Nosso ensaio infantil é cuidadosamente planejado para capturar a essência e a personalidade de cada criança. Trabalhamos com cenários lúdicos e naturais que permitem que os pequenos se sintam à vontade para expressar suas emoções genuínas. Utilizamos técnicas de fotografia que valorizam a espontaneidade, resultando em imagens cheias de vida e autenticidade.",
        "categoria": "Infantil",
        "preco": "A partir de R$ 350",
        "duracao": "2 horas",
        "entrega": "15 dias",
        "imagem": "adress/endaio infantil.jpeg",
        "destaques": ["Cenários lúdicos", "Fotos espontâneas", "Ambiente seguro", "Profissionais especializados"]
    },
    {
        "id": 2,
        "titulo": "Ensaio em Família",
        "descricao": "Eternizamos a beleza e a emoção desses momentos únicos na vida.",
        "conteudo": "O ensaio em família é uma oportunidade única de registrar o amor e a conexão entre seus entes queridos. Trabalhamos tanto em estúdio quanto em locações externas, adaptando-nos ao estilo e personalidade de cada família. Nossas sessões são descontraídas e divertidas, focadas em capturar interações genuínas e momentos especiais que contarão a história da sua família por gerações.",
        "categoria": "Família",
        "preco": "A partir de R$ 500",
        "duracao": "3 horas",
        "entrega": "20 dias",
        "imagem": "adress/ensaio em familia dois.jpeg",
        "destaques": ["Locação interna ou externa", "Interações genuínas", "Orientação de styling", "Fotos para todas as gerações"]
    },
    {
        "id": 3,
        "titulo": "Campanhas Publicitárias",
        "descricao": "Realçamos sua personalidade e beleza em datas tão especiais.",
        "conteudo": "Especializados em campanhas publicitárias e fotografia comercial, criamos imagens que comunicam efetivamente a identidade da sua marca. Desenvolvemos conceitos criativos aliados à técnica fotográfica para produzir material visual de alto impacto. Trabalhamos com produtos, serviços, moda e retratos corporativos, sempre com atenção aos detalhes e à qualidade final.",
        "categoria": "Comercial",
        "preco": "Sob consulta",
        "duracao": "Variável",
        "entrega": "10-15 dias",
        "imagem": "adress/campanhas pubblicitarias.jpeg",
        "destaques": ["Conceito criativo", "Direção de arte", "Alta qualidade técnica", "Versatilidade de uso"]
    }
];

// Dados para o portfólio
const dadosPortfolio = [
    {
        "id": 1,
        "titulo": "Ensaio Infantil",
        "categoria": "Infantil",
        "imagem": "adress/endaio infantil  dois.jpeg",
        "descricao": "Sessão temática de primavera"
    },
    {
        "id": 2,
        "titulo": "Família",
        "categoria": "Família",
        "imagem": "adress/ensaio em familia.jpeg",
        "descricao": "Ensaio em parque natural"
    },
    {
        "id": 3,
        "titulo": "Campanha Moda Verão",
        "categoria": "Comercial",
        "imagem": "adress/principal.jpeg",
        "descricao": "Coleção resort 2024"
    },
    {
        "id": 4,
        "titulo": "Ensaio Gestante",
        "categoria": "Gestante",
        "imagem": "adress/gravida dois.jpeg",
        "descricao": "A mulher no seu momento mais especial"
    }
];

// Função para carregar serviços na página inicial
function carregarServicos() {
    const servicosContainer = document.getElementById('servicos-container');
    
    if (servicosContainer) {
        servicosContainer.innerHTML = '';
        
        dadosServicos.forEach(servico => {
            const card = document.createElement('article');
            card.className = 'service-card';
            card.innerHTML = `
                <div class="service-image" onclick="redirecionarParaDetalhes(${servico.id}, 'servico')">
                    <img src="${servico.imagem}" alt="${servico.titulo}">
                    <div class="click-indicator">Clique para detalhes</div>
                </div>
                <div class="service-info">
                    <h3>${servico.titulo}</h3>
                    <p>${servico.descricao}</p>
                    <button class="btn" onclick="redirecionarParaDetalhes(${servico.id}, 'servico')">Ver detalhes</button>
                </div>
            `;
            servicosContainer.appendChild(card);
        });
    }
}

// Função para carregar portfólio na página inicial
function carregarPortfolio() {
    const portfolioContainer = document.getElementById('portfolio-container');
    
    if (portfolioContainer) {
        portfolioContainer.innerHTML = '';
        
        dadosPortfolio.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.innerHTML = `
                <div onclick="redirecionarParaDetalhes(${item.id}, 'portfolio')">
                    <img src="${item.imagem}" alt="${item.titulo}">
                    <div class="portfolio-overlay">
                        <h3>${item.titulo}</h3>
                        <p>${item.descricao}</p>
                        <span class="btn">Ver detalhes</span>
                    </div>
                </div>
            `;
            portfolioContainer.appendChild(portfolioItem);
        });
    }
}

// Função para redirecionar para a página de detalhes
function redirecionarParaDetalhes(id, tipo) {
    window.location.href = `detalhes.html?id=${id}&tipo=${tipo}`;
}

// Função para carregar detalhes na página de detalhes
function carregarDetalhes() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const tipo = urlParams.get('tipo');
    
    const detailsContainer = document.getElementById('service-details-content');
    
    if (detailsContainer) {
        let item;
        
        if (tipo === 'servico') {
            item = dadosServicos.find(s => s.id === id);
        } else if (tipo === 'portfolio') {
            item = dadosPortfolio.find(p => p.id === id);
        }
        
        if (item) {
            if (tipo === 'servico') {
                detailsContainer.innerHTML = `
                    <div class="service-detail-header">
                        <h1>${item.titulo}</h1>
                        <p class="service-category">${item.categoria}</p>
                    </div>
                    <div class="service-detail-content">
                        <div class="service-detail-image">
                            <img src="${item.imagem}" alt="${item.titulo}">
                        </div>
                        <div class="service-detail-info">
                            <div class="service-description">
                                <h2>Sobre este serviço</h2>
                                <p>${item.conteudo}</p>
                            </div>
                            <div class="service-highlights">
                                <h3>Destaques do serviço</h3>
                                <ul>
                                    ${item.destaques.map(destaque => `<li>${destaque}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="service-pricing">
                                <div class="price-info">
                                    <h3>Investimento</h3>
                                    <p class="price">${item.preco}</p>
                                </div>
                                <div class="duration-info">
                                    <h3>Duração</h3>
                                    <p>${item.duracao}</p>
                                </div>
                                <div class="delivery-info">
                                    <h3>Entrega</h3>
                                    <p>${item.entrega}</p>
                                </div>
                            </div>
                            <div class="service-cta">
                                <a href="index.html#contato" class="btn">Agendar este serviço</a>
                            </div>
                        </div>
                    </div>
                `;
            } else if (tipo === 'portfolio') {
                detailsContainer.innerHTML = `
                    <div class="service-detail-header">
                        <h1>${item.titulo}</h1>
                        <p class="service-category">${item.categoria}</p>
                    </div>
                    <div class="service-detail-content">
                        <div class="service-detail-image">
                            <img src="${item.imagem}" alt="${item.titulo}">
                        </div>
                        <div class="service-detail-info">
                            <div class="service-description">
                                <h2>Sobre este trabalho</h2>
                                <p>${item.descricao}</p>
                            </div>
                            <div class="service-highlights">
                                <h3>Detalhes do projeto</h3>
                                <p>Este é um exemplo do nosso trabalho na categoria ${item.categoria}. Entre em contato para agendar uma sessão semelhante.</p>
                            </div>
                            <div class="service-cta">
                                <a href="index.html#contato" class="btn">Agendar sessão semelhante</a>
                            </div>
                        </div>
                    </div>
                `;
            }
        } else {
            detailsContainer.innerHTML = `
                <div class="error-message">
                    <h2>Item não encontrado</h2>
                    <p>O item que você está procurando não existe ou foi removido.</p>
                    <a href="index.html" class="btn">Voltar para a página inicial</a>
                </div>
            `;
        }
    }
}

// Configurar o formulário de contato
function configurarFormulario() {
    const form = document.getElementById('form-contato');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }
}

// Navegação suave para âncoras
function configurarNavegacaoSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inicialização da página
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se estamos na página inicial ou na página de detalhes
    if (window.location.pathname.includes('detalhes.html')) {
        carregarDetalhes();
    } else {
        carregarServicos();
        carregarPortfolio();
        configurarFormulario();
        configurarNavegacaoSuave();
    }
    
    console.log('Estúdio Lua Cris - JavaScript carregado com sucesso!');
});