document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o filtro com todas as cartas ao carregar a página
    filtrarCartas('todas');
    criarBotaoRemoverTodasCartas(); // Cria o botão para remover todas as cartas do deck
});

const cartas = [
    // Exemplo de carta
    { "nome": "Carta 1", "imagem": "images/archers.png", "categoria": "suporte", "id": "1" },
    { "nome": "Carta 2", "imagem": "images/arrows.png", "categoria": "feitico", "id": "2" },
    { "nome": "Carta 3", "imagem": "images/baby-dragon.png", "categoria": "suporte", "id": "3" },
    { "nome": "Carta 4", "imagem": "images/balloon.png", "categoria": "condicao_vitoria", "id": "4" },
    { "nome": "Carta 5", "imagem": "images/bandit.png", "categoria": "suporte", "id": "5" },
    { "nome": "Carta 6", "imagem": "images/barbarian-barrel.png", "categoria": "feitico", "id": "6" },
    { "nome": "Carta 7", "imagem": "images/barbarian-hut.png", "categoria": "suporte", "id": "7" },
    { "nome": "Carta 8", "imagem": "images/barbarians.png", "categoria": "suporte", "id": "8" },
    { "nome": "Carta 9", "imagem": "images/bats.png", "categoria": "ciclo", "id": "9" },
    { "nome": "Carta 10", "imagem": "images/battle-healer.png", "categoria": "suporte", "id": "10" },
    { "nome": "Carta 11", "imagem": "images/battle-ram.png", "categoria": "condicao_vitoria", "id": "11" },
    { "nome": "Carta 12", "imagem": "images/bomber.png", "categoria": "suporte", "id": "12" },
    { "nome": "Carta 13", "imagem": "images/bomb-tower.png", "categoria": "suporte", "id": "13" },
    { "nome": "Carta 14", "imagem": "images/bowler.png", "categoria": "suporte", "id": "14" },
    { "nome": "Carta 15", "imagem": "images/cannon.png", "categoria": "suporte", "id": "15" },
    { "nome": "Carta 16", "imagem": "images/cannon-cart.png", "categoria": "suporte", "id": "16" },
    { "nome": "Carta 17", "imagem": "images/clone.png", "categoria": "feitico", "id": "17" },
    { "nome": "Carta 18", "imagem": "images/dark-prince.png", "categoria": "suporte", "id": "18" },
    { "nome": "Carta 19", "imagem": "images/dart-goblin.png", "categoria": "suporte", "id": "19" },
    { "nome": "Carta 20", "imagem": "images/earthquake.png", "categoria": "feitico", "id": "20" },
    { "nome": "Carta 21", "imagem": "images/electro-dragon.png", "categoria": "suporte", "id": "21" },
    { "nome": "Carta 22", "imagem": "images/electro-giant.png", "categoria": "condicao_vitoria", "id": "22" },
    { "nome": "Carta 23", "imagem": "images/electro-spirit.png", "categoria": "ciclo", "id": "23" },
    { "nome": "Carta 24", "imagem": "images/electro-wizard.png", "categoria": "suporte", "id": "24" },
    { "nome": "Carta 25", "imagem": "images/elite-barbarians.png", "categoria": "suporte", "id": "25" },
    { "nome": "Carta 26", "imagem": "images/elixir-collector.png", "categoria": "suporte", "id": "26" },
    { "nome": "Carta 27", "imagem": "images/elixir-golem.png", "categoria": "condicao_vitoria", "id": "27" },
    { "nome": "Carta 28", "imagem": "images/executioner.png", "categoria": "suporte", "id": "28" },
    { "nome": "Carta 29", "imagem": "images/fireball.png", "categoria": "feitico", "id": "29" },
    { "nome": "Carta 30", "imagem": "images/firecracker.png", "categoria": "suporte", "id": "30" },
    { "nome": "Carta 31", "imagem": "images/fire-spirits.png", "categoria": "ciclo", "id": "31" },
    { "nome": "Carta 32", "imagem": "images/fisherman.png", "categoria": "suporte", "id": "32" },
    { "nome": "Carta 33", "imagem": "images/flying-machine.png", "categoria": "suporte", "id": "33" },
    { "nome": "Carta 34", "imagem": "images/freeze.png", "categoria": "feitico", "id": "34" },
    { "nome": "Carta 35", "imagem": "images/furnace.png", "categoria": "suporte", "id": "35" },
    { "nome": "Carta 36", "imagem": "images/giant.png", "categoria": "condicao_vitoria", "id": "36" },
    { "nome": "Carta 37", "imagem": "images/giant-skeleton.png", "categoria": "suporte", "id": "37" },
    { "nome": "Carta 38", "imagem": "images/giant-snowball.png", "categoria": "feitico", "id": "38" },
    { "nome": "Carta 39", "imagem": "images/goblin-barrel.png", "categoria": "condicao_vitoria", "id": "39" },
    { "nome": "Carta 40", "imagem": "images/goblin-cage.png", "categoria": "suporte", "id": "40" },
    { "nome": "Carta 41", "imagem": "images/goblin-gang.png", "categoria": "suporte", "id": "41" },
    { "nome": "Carta 42", "imagem": "images/goblin-giant.png", "categoria": "condicao_vitoria", "id": "42" },
    { "nome": "Carta 43", "imagem": "images/goblin-hut.png", "categoria": "suporte", "id": "43" },
    { "nome": "Carta 44", "imagem": "images/goblins.png", "categoria": "suporte", "id": "44" },
    { "nome": "Carta 45", "imagem": "images/golem.png", "categoria": "condicao_vitoria", "id": "45" },
    { "nome": "Carta 46", "imagem": "images/graveyard.png", "categoria": "condicao_vitoria", "id": "46" },
    { "nome": "Carta 47", "imagem": "images/guards.png", "categoria": "suporte", "id": "47" },
    { "nome": "Carta 48", "imagem": "images/heal-spirit.png", "categoria": "ciclo", "id": "48" },
    { "nome": "Carta 49", "imagem": "images/hog-rider.png", "categoria": "condicao_vitoria", "id": "49" },
    { "nome": "Carta 50", "imagem": "images/hunter.png", "categoria": "suporte", "id": "50" },
    { "nome": "Carta 51", "imagem": "images/ice-golem.png", "categoria": "suporte", "id": "51" },
    { "nome": "Carta 52", "imagem": "images/ice-spirit.png", "categoria": "ciclo", "id": "52" },
    { "nome": "Carta 53", "imagem": "images/ice-wizard.png", "categoria": "suporte", "id": "53" },
    { "nome": "Carta 54", "imagem": "images/inferno-dragon.png", "categoria": "suporte", "id": "54" },
    { "nome": "Carta 55", "imagem": "images/inferno-tower.png", "categoria": "suporte", "id": "55" },
    { "nome": "Carta 56", "imagem": "images/knight.png", "categoria": "suporte", "id": "56" },
    { "nome": "Carta 57", "imagem": "images/lava-hound.png", "categoria": "condicao_vitoria", "id": "57" },
    { "nome": "Carta 58", "imagem": "images/lightning.png", "categoria": "feitico", "id": "58" },
    { "nome": "Carta 59", "imagem": "images/lumberjack.png", "categoria": "suporte", "id": "59" },
    { "nome": "Carta 60", "imagem": "images/magic-archer.png", "categoria": "suporte", "id": "60" },
    { "nome": "Carta 61", "imagem": "images/mega-knight.png", "categoria": "suporte", "id": "61" },
    { "nome": "Carta 62", "imagem": "images/mega-minion.png", "categoria": "suporte", "id": "62" },
    { "nome": "Carta 63", "imagem": "images/miner.png", "categoria": "condicao_vitoria", "id": "63" },
    { "nome": "Carta 64", "imagem": "images/minion-horde.png", "categoria": "suporte", "id": "64" },
    { "nome": "Carta 65", "imagem": "images/minions.png", "categoria": "suporte", "id": "65" },
    { "nome": "Carta 66", "imagem": "images/mini-pekka.png", "categoria": "suporte", "id": "66" },
    { "nome": "Carta 67", "imagem": "images/mirror.png", "categoria": "suporte", "id": "67" },
    { "nome": "Carta 68", "imagem": "images/mortar.png", "categoria": "condicao_vitoria", "id": "68" },
    { "nome": "Carta 69", "imagem": "images/mother-witch.png", "categoria": "suporte", "id": "69" },
    { "nome": "Carta 70", "imagem": "images/musketeer.png", "categoria": "suporte", "id": "70" },
    { "nome": "Carta 71", "imagem": "images/night-witch.png", "categoria": "suporte", "id": "71" },
    { "nome": "Carta 72", "imagem": "images/pekka.png", "categoria": "suporte", "id": "72" },
    { "nome": "Carta 73", "imagem": "images/poison.png", "categoria": "feitico", "id": "73" },
    { "nome": "Carta 74", "imagem": "images/prince.png", "categoria": "suporte", "id": "74" },
    { "nome": "Carta 75", "imagem": "images/princess.png", "categoria": "suporte", "id": "75" },
    { "nome": "Carta 76", "imagem": "images/rage.png", "categoria": "feitico", "id": "76" },
    { "nome": "Carta 77", "imagem": "images/ram-rider.png", "categoria": "suporte", "id": "77" },
    { "nome": "Carta 78", "imagem": "images/rascals.png", "categoria": "suporte", "id": "78" },
    { "nome": "Carta 79", "imagem": "images/rocket.png", "categoria": "feitico", "id": "79" },
    { "nome": "Carta 80", "imagem": "images/royal-delivery.png", "categoria": "feitico", "id": "80" },
    { "nome": "Carta 81", "imagem": "images/royal-ghost.png", "categoria": "suporte", "id": "81" },
    { "nome": "Carta 82", "imagem": "images/royal-giant.png", "categoria": "condicao_vitoria", "id": "82" },
    { "nome": "Carta 83", "imagem": "images/royal-hogs.png", "categoria": "condicao_vitoria", "id": "83" },
    { "nome": "Carta 84", "imagem": "images/royal-recruits.png", "categoria": "suporte", "id": "84" },
    { "nome": "Carta 85", "imagem": "images/skeleton-army.png", "categoria": "suporte", "id": "85" },
    { "nome": "Carta 86", "imagem": "images/skeleton-barrel.png", "categoria": "condicao_vitoria", "id": "86" },
    { "nome": "Carta 87", "imagem": "images/skeleton-dragons.png", "categoria": "suporte", "id": "87" },
    { "nome": "Carta 88", "imagem": "images/skeletons.png", "categoria": "ciclo", "id": "88" },
    { "nome": "Carta 89", "imagem": "images/sparky.png", "categoria": "suporte", "id": "89" },
    { "nome": "Carta 90", "imagem": "images/spear-goblins.png", "categoria": "suporte", "id": "90" },
    { "nome": "Carta 91", "imagem": "images/tesla.png", "categoria": "suporte", "id": "91" },
    { "nome": "Carta 92", "imagem": "images/the-log.png", "categoria": "feitico", "id": "92" },
    { "nome": "Carta 93", "imagem": "images/three-musketeers.png", "categoria": "suporte", "id": "93" },
    { "nome": "Carta 94", "imagem": "images/tombstone.png", "categoria": "suporte", "id": "94" },
    { "nome": "Carta 95", "imagem": "images/tornado.png", "categoria": "feitico", "id": "95" },
    { "nome": "Carta 96", "imagem": "images/valkyrie.png", "categoria": "suporte", "id": "96" },
    { "nome": "Carta 97", "imagem": "images/wall-breakers.png", "categoria": "condicao_vitoria", "id": "97" },
    { "nome": "Carta 98", "imagem": "images/witch.png", "categoria": "suporte", "id": "98" },
    { "nome": "Carta 99", "imagem": "images/wizard.png", "categoria": "suporte", "id": "99" },
    { "nome": "Carta 100", "imagem": "images/x-bow.png", "categoria": "condicao_vitoria", "id": "100" },
    { "nome": "Carta 101", "imagem": "images/zap.png", "categoria": "feitico", "id": "101" },
    { "nome": "Carta 102", "imagem": "images/zappies.png", "categoria": "suporte", "id": "102" }
];

let cartasNoDeck = []; // Lista de cartas no deck
let filtroAtual = 'todas'; // Variável que armazena o filtro atual

function filtrarCartas(categoria) {
    filtroAtual = categoria; // Armazena o filtro atual
    const containerCartas = document.getElementById('cartas');
    containerCartas.innerHTML = '';

    // Filtra as cartas com base na categoria selecionada
    const cartasFiltradas = categoria === 'todas' ? cartas : cartas.filter(carta => carta.categoria === categoria);

    // Remove as cartas que já estão no deck
    const cartasDisponiveis = cartasFiltradas.filter(carta => !cartasNoDeck.includes(carta.id));

    // Renderiza as cartas disponíveis na interface
    cartasDisponiveis.forEach(carta => {
        const cartaDiv = document.createElement('div');
        cartaDiv.className = 'carta';
        cartaDiv.innerHTML = `
            <img src="${carta.imagem}" alt="${carta.nome}" id="${carta.nome.replace(/\s+/g, '_')}" onclick="animarCarta(this)">
            <button class="animated-btn" onclick="adicionarCarta('${carta.id}', '${carta.imagem}')">Usar</button>
        `;
        containerCartas.appendChild(cartaDiv);
    });
}

function adicionarCarta(cartaId, imagem) {
    const deck = document.querySelector('.deck');

    // Impede que a mesma carta seja adicionada mais de uma vez
    if (cartasNoDeck.includes(cartaId)) {
        alert("Esta carta já está no deck!");
        return;
    }

    // Adiciona a carta ao próximo slot vazio
    for (let i = 0; i < deck.getElementsByClassName('slot').length; i++) {
        const slot = deck.getElementsByClassName('slot')[i];
        const placeholder = slot.querySelector('.placeholder');
        if (placeholder) {
            placeholder.remove();
            const img = document.createElement('img');
            img.src = imagem;
            img.setAttribute('data-id', cartaId); // Define corretamente o `data-id` da carta
            img.onclick = function () {
                removerCarta(slot);
            };
            slot.appendChild(img);

            // Adiciona o cartaId à lista de cartas no deck
            cartasNoDeck.push(cartaId);
            break;
        }
    }

    // Atualiza os filtros para refletir o estado atual
    filtrarCartas(filtroAtual);
    atualizarEstadoDoDeck();
}

function atualizarEstadoDoDeck() {
    const deck = document.querySelector('.deck');
    const cartasNoDeckCount = cartasNoDeck.length;

    if (cartasNoDeckCount === 8) {
        document.getElementById('copyDeckButton').style.display = 'block';
        document.getElementById('redirectDeckButton').style.display = 'block';
    } else {
        document.getElementById('copyDeckButton').style.display = 'none';
        document.getElementById('redirectDeckButton').style.display = 'none';
    }
}

function removerCarta(slot) {
    const img = slot.querySelector('img');
    const cartaId = img.getAttribute('data-id');

    if (cartaId) {
        // Remove a carta do array de cartas no deck
        cartasNoDeck = cartasNoDeck.filter(id => id !== cartaId);

        // Mostra a carta novamente na lista de filtros
        filtrarCartas(filtroAtual);
    }

    slot.innerHTML = '<div class="placeholder"></div>'; // Adiciona o placeholder novamente
    atualizarEstadoDoDeck();
}

function removerTodasCartasDoDeck() {
    const deck = document.querySelector('.deck');

    // Remove todas as cartas do deck
    Array.from(deck.querySelectorAll('img')).forEach(img => {
        const cartaId = img.getAttribute('data-id');
        cartasNoDeck = cartasNoDeck.filter(id => id !== cartaId); // Remove do array global
        img.parentElement.innerHTML = '<div class="placeholder"></div>'; // Adiciona o placeholder
    });

    // Atualiza os filtros para mostrar todas as cartas novamente
    filtrarCartas(filtroAtual);
    atualizarEstadoDoDeck();
}

function criarBotaoRemoverTodasCartas() {
    const deckContainer = document.querySelector('.deck-container'); // Assumindo que o deck está dentro de um container específico
    const botaoRemoverTodas = document.createElement('button');
    botaoRemoverTodas.id = 'removerTodasButton';
    botaoRemoverTodas.innerText = 'Remover Todas';
    botaoRemoverTodas.className = 'animated-btn';
    botaoRemoverTodas.onclick = removerTodasCartasDoDeck;
    deckContainer.appendChild(botaoRemoverTodas);
}

function copiarDeck() {
    const deck = document.querySelector('.deck');
    const cartasSelecionadas = Array.from(deck.querySelectorAll('img')).map(img => img.getAttribute('data-id'));

    if (cartasSelecionadas.length < 8) {
        console.error('Complete o deck antes de copiá-lo!');
        return;
    }

    // Redireciona para o Clash Royale em uma nova aba
    const baseUrl = "https://clashroyale.com"; // Exemplo de URL ou deeplink
    const deckParam = `deck=${cartasSelecionadas.join(';')}`;
    const url = `${baseUrl}?${deckParam}`;
    window.open(url, '_blank');
}

function redirecionarParaClashRoyale() {
    const deck = document.querySelector('.deck');
    const cartasSelecionadas = Array.from(deck.querySelectorAll('img')).map(img => img.getAttribute('data-id'));

    if (cartasSelecionadas.length < 8) {
        console.error('Complete o deck antes de abrir no Clash Royale!');
        return;
    }

    // Construa o link deeplink para abrir o Clash Royale com o deck selecionado
    const baseUrl = "clashroyale://copyDeck?";
    const deckParam = `deck=${cartasSelecionadas.join(';')}`;
    const slotsParam = `slots=${'0;'.repeat(8).slice(0, -1)}`;
    const ttParam = "tt=159000000"; // Exemplo de identificação do deck
    const lParam = "l=MyDeck"; // Nome do deck

    const deeplink = `${baseUrl}${deckParam}&${slotsParam}&${ttParam}&${lParam}`;

    // Abre o Clash Royale em uma nova aba ou janela
    window.open(deeplink, '_blank');
}

function animarCarta(carta) {
    carta.classList.add('carta-animada');
    setTimeout(() => carta.classList.remove('carta-animada'), 300); // Remove a animação após 300ms
}
