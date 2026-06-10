// ==========================================
// 1. BANCO DE DADOS DO APP (PLANTAS E CURSOS)
// ==========================================

const PLANTS = [
    { id: 1, name: "Costela de Adão", nick: "Monstera Deliciosa", origin: "Florestas Tropicais do México", price: 89.90, difficulty: "Fácil", light: "Meia sombra", water: "2x por semana", brotos: 45, imageUrl: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=600", tag: "Popular", desc: "Suas folhas recortadas icônicas são desenhadas naturalmente para deixar o vento passante e a luz chegar às folhas de baixo.", curiosity: "Na era vitoriana, ter uma Monstera em sua sala de estar indicava alta classe social e espírito de exploração botânica." },
    { id: 2, name: "Ficus Lyrata", nick: "Figueira-Lira", origin: "Oeste da África", price: 180.00, difficulty: "Média", light: "Muita luz indireta", water: "1x por semana", brotos: 90, imageUrl: "https://images.unsplash.com/photo-1597055181300-e3633a207518?q=80&w=600", tag: "Rara", desc: "Uma planta majestosa com folhas grandes em formato de lira, altamente decorativa e imponente.", curiosity: "Em seu habitat natural africano, ela pode crescer como uma planta epífita, germinando no topo de outras árvores." },
    { id: 3, name: "Espada de São Jorge", nick: "Sansevieria Trifasciata", origin: "África Ocidental", price: 45.00, difficulty: "Fácil", light: "Qualquer luz", water: "1x a cada 15 dias", brotos: 20, imageUrl: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?q=80&w=600", tag: "Resistente", desc: "Folhas verticais rígidas e coriáceas. Extremamente durável e limpa o ar de toxinas comuns.", curiosity: "A NASA a listou oficialmente como uma das melhores plantas para purificar o ar dentro de naves e estações espaciais." },
    { id: 4, name: "Orquídea Mariposa", nick: "Phalaenopsis", origin: "Sudeste Asiático", price: 75.00, difficulty: "Média", light: "Luz filtrada", water: "1x por semana", brotos: 40, imageUrl: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=600", tag: "Clássica", desc: "Flores delicadas que lembram o voo de mariposas. Perfeitas para ambientes internos iluminados.", curiosity: "Na China antiga, as orquídeas eram cultivadas pelo próprio filósofo Confúcio, que as chamava de 'Rainhas das Fragrâncias'." },
    { id: 5, name: "Planta Néon", nick: "Pothos Neon", origin: "Ilhas Salomão", price: 55.00, difficulty: "Fácil", light: "Média luz", water: "2x por semana", brotos: 25, imageUrl: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=600", tag: "Pendente", desc: "Folhagem de tom verde-limão vibrante que cresce em cascatas exuberantes.", curiosity: "É uma das poucas plantas de casa que sobrevive muito bem cultivada diretamente na água por anos." },
    { id: 6, name: "Begônia Maculata", nick: "Begonia Tamaya", origin: "Florestas Tropicais do Brasil", price: 120.00, difficulty: "Especialista", light: "Luz indireta filtrada", water: "2x por semana", brotos: 60, imageUrl: "https://images.unsplash.com/photo-1612360566326-8098b67f10b7?q=80&w=600", tag: "Colecionador", desc: "Folhas verde-oliva escuras cobertas com bolinhas brancas perfeitas e verso vermelho-sangue.", curiosity: "Diz a lenda fashion que o designer Christian Louboutin se inspirou no verso vermelho da Begônia Maculata para criar suas icônicas solas de sapato." },
    { id: 7, name: "Calathea Triostar", nick: "Stromanthe Thalia", origin: "América do Sul", price: 95.00, difficulty: "Especialista", light: "Sombra úmida", water: "3x por semana", brotos: 50, imageUrl: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&w=600", tag: "Exótica", desc: "Folhas pintadas à mão pela natureza em tons de rosa, creme e verde.", curiosity: "Pertence à família das 'plantas rezadeiras': à noite suas folhas se levantam verticalmente como mãos em oração." },
    { id: 8, name: "Cacto Macarrão", nick: "Rhipsalis Baccifera", origin: "América Central e África", price: 40.00, difficulty: "Fácil", light: "Meia sombra", water: "1x por semana", brotos: 20, imageUrl: "https://images.unsplash.com/photo-1509423424749-37312a3d4643?q=80&w=600", tag: "Diferente", desc: "Um cacto que quebra as regras: não tem espinhos, adora umidade e vive pendurado em árvores.", curiosity: "É uma das poucas espécies de cacto nativas encontradas naturalmente fora das Américas, cruzando o Atlântico séculos atrás." },
    { id: 9, name: "Zamioculca", nick: "Zamioculcas Zamiifolia", origin: "África Oriental", price: 65.00, difficulty: "Fácil", light: "Sombra total a Sol", water: "1x a cada 20 dias", brotos: 30, imageUrl: "https://images.unsplash.com/photo-1632205510651-7f938c4bdf45?q=80&w=600", tag: "Escritório", desc: "Folhas enceradas ultra brilhantes que parecem artificiais. Sobrevive a grandes períodos de negligência.", curiosity: "No Sudeste Asiático, ela é chamada de 'Árvore de Ouro' por atrair prosperidade e estabilidade financeira onde é colocada." }
];

const COURSES = [
    { id: 1, emoji: "🌱", title: "Jardinagem para Iniciantes", level: "Iniciante", duration: "45 min", lessons: 5, desc: "Aprenda a não matar mais nenhuma planta. Conceitos básicos sobre rega, luz e escolha do vaso ideal.", youtubeUrl: "https://www.youtube.com/watch?v=A8vGf_vXp2Q", topics: ["Como escolher a primeira planta", "O teste do dedo: quando regar", "Tipos de vasos e drenagem correta", "Identificando excesso ou falta de sol"] },
    { id: 2, emoji: "✂️", title: "Arte da Propagação e Mudas", level: "Iniciante", duration: "1h 15min", lessons: 6, desc: "Multiplique seu jardim de graça fazendo mudas por estacas de nós, folhas ou divisão de raízes.", youtubeUrl: "https://www.youtube.com/watch?v=FjIuKxPnvpM", topics: ["Onde cortar: localizando o nó", "Enraizamento na água vs na terra", "Cuidados com os brotos bebês", "Hormônios enraizadores naturais"] },
    { id: 3, emoji: "🪵", title: "Substratos e Solos Perfeitos", level: "Intermediário", duration: "50 min", lessons: 4, desc: "Esqueça a terra preta comum. Crie misturas aeradas e nutritivas específicas para cada espécie.", youtubeUrl: "https://www.youtube.com/watch?v=E-4W-02YfWw", topics: ["Perlita, fibra de coco e casca de pínus", "Montando solo para Monstera e Aráceas", "Drenagem perfeita para Cactos e Suculentas", "Adubação orgânica básica"] },
    { id: 4, emoji: "🦟", title: "Guia de Combate a Pragas", level: "Intermediário", duration: "1h", lessons: 7, desc: "Aprenda a identificar e eliminar cochonilhas, ácaros e fungos usando receitas 100% caseiras.", youtubeUrl: "https://www.youtube.com/watch?v=3R-gKq9K75w", topics: ["Identificação visual de pragas comuns", "O poder do Óleo de Neem e Sabão de Coco", "Como tratar fungos nas folhas", "Isolamento de plantas doentes"] }
];

const REWARDS = [
    { id: 1, emoji: "🎟️", title: "Cupom de Frete Grátis", cost: 100, desc: "Isenção total do frete para qualquer pedido de planta do catálogo." },
    { id: 2, emoji: "🪴", title: "Vaso de Cerâmica Artesanal", cost: 250, desc: "Um vaso exclusivo feito à mão por ceramistas locais parceiros." },
    { id: 3, emoji: "🧪", title: "Kit Nutrição Premium", cost: 400, desc: "Combo com adubo orgânico concentrado e borrifador vintage de vidro." }
];

// ==========================================
// 2. ESTADO GLOBAL DA APLICAÇÃO (SISTEMA LOCAL)
// ==========================================
let currentUser = null;
let cart = [];
let selectedGiftPlantId = null;
let currentDifficultyFilter = "Todas";
let currentCourseFilter = "Todos";

// Carregar dados iniciais e usuários fictícios se não existirem
if (!localStorage.getItem("fl_users")) {
    localStorage.setItem("fl_users", JSON.stringify([
        { name: "Admin Florescer", email: "admin@florescer.com", password: "123", brotos: 247, history: [{ action: "Bônus de Boas-vindas", val: 247, type: "plus", date: "10/06/2026" }] }
    ]));
}

// Inicialização ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    checkSession();
    setupEventListeners();
});

function checkSession() {
    const session = localStorage.getItem("fl_current_session");
    if (session) {
        const users = JSON.parse(localStorage.getItem("fl_users"));
        currentUser = users.find(u => u.email === session);
        if (currentUser) {
            showApp();
            return;
        }
    }
    showAuth();
}

// ==========================================
// 3. EVENTOS DO SISTEMA DE AUTENTICAÇÃO
// ==========================================
function setupEventListeners() {
    document.getElementById("form-login").addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("login-email").value.trim();
        const senha = document.getElementById("login-senha").value;
        const errDiv = document.getElementById("login-error");

        const users = JSON.parse(localStorage.getItem("fl_users"));
        const user = users.find(u => u.email === email && u.password === senha);

        if (user) {
            currentUser = user;
            localStorage.setItem("fl_current_session", email);
            errDiv.style.display = "none";
            showApp();
            showToast(`Bem-vindo, ${user.name}!`);
        } else {
            errDiv.innerText = "E-mail ou senha incorretos.";
            errDiv.style.display = "block";
        }
    });

    document.getElementById("form-register").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("reg-name").value.trim();
        const email = document.getElementById("reg-email").value.trim();
        const senha = document.getElementById("reg-senha").value;
        const errDiv = document.getElementById("register-error");

        if (senha.length < 6) {
            errDiv.innerText = "A senha deve ter pelo menos 6 caracteres.";
            errDiv.style.display = "block";
            return;
        }

        const users = JSON.parse(localStorage.getItem("fl_users"));
        if (users.some(u => u.email === email)) {
            errDiv.innerText = "Este e-mail já está cadastrado.";
            errDiv.style.display = "block";
            return;
        }

        const newUser = {
            name: name,
            email: email,
            password: senha,
            brotos: 50, // Ganha 50 brotos ao se cadastrar
            history: [{ action: "Cadastro na Plataforma", val: 50, type: "plus", date: "10/06/2026" }]
        };

        users.push(newUser);
        localStorage.setItem("fl_users", JSON.stringify(users));
        currentUser = newUser;
        localStorage.setItem("fl_current_session", email);

        errDiv.style.display = "none";
        showApp();
        showToast("Conta criada com sucesso! Ganhou 50 Brotos 🌱");
    });

    // Filtro de pesquisa de plantas por input em tempo real
    document.getElementById("search-plant").addEventListener("input", (e) => {
        renderCatalog();
    });
}

function toggleAuthMode(isLogin) {
    document.getElementById("login-card").style.display = isLogin ? "block" : "none";
    document.getElementById("register-card").style.display = isLogin ? "none" : "block";
    document.getElementById("login-error").style.display = "none";
    document.getElementById("register-error").style.display = "none";
}

function showAuth() {
    document.getElementById("auth-screen").style.display = "grid";
    document.getElementById("app-screen").style.display = "none";
}

function showApp() {
    document.getElementById("auth-screen").style.display = "none";
    document.getElementById("app-screen").style.display = "block";
    
    // Atualizar dados no Header
    document.getElementById("header-brotos-val").innerText = currentUser.brotos;
    document.getElementById("user-avatar").innerText = currentUser.name.charAt(0).toUpperCase();

    // Renderizar telas iniciais
    renderCatalog();
    renderGiftSelection();
    renderCourses();
    renderBrotosPage();
    updateCartCounter();
}

function logout() {
    localStorage.removeItem("fl_current_session");
    currentUser = null;
    cart = [];
    showAuth();
}

// ==========================================
// 4. MECANISMOS DE NAVEGAÇÃO ENTRE ABAS
// ==========================================
function navigateTo(tabId) {
    // Esconder todas as seções
    document.querySelectorAll(".tab-content").forEach(el => el.style.display = "none");
    // Remover classe ativa dos botões do menu
    document.querySelectorAll(".nav button").forEach(btn => btn.classList.remove("active"));

    // Mostrar seção desejada
    document.getElementById(`page-${tabId}`).style.display = "block";
    
    // Deixar botão ativo no menu
    const activeBtn = document.getElementById(`nav-${tabId}`);
    if (activeBtn) activeBtn.classList.add("active");

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 5. SEÇÃO: CATÁLOGO DE PLANTAS & DETALHES
// ==========================================
function filterDifficulty(difficulty, btnElement) {
    currentDifficultyFilter = difficulty;
    const parent = btnElement.parentElement;
    parent.querySelectorAll("button").forEach(b => b.classList.remove("active"));
    btnElement.classList.add("active");
    renderCatalog();
}

function renderCatalog() {
    const grid = document.getElementById("plants-grid");
    const searchQuery = document.getElementById("search-plant").value.toLowerCase();
    grid.innerHTML = "";

    const filtered = PLANTS.filter(p => {
        const matchesDiff = currentDifficultyFilter === "Todas" || p.difficulty === currentDifficultyFilter;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery) || p.nick.toLowerCase().includes(searchQuery);
        return matchesDiff && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--muted); padding: 40px 0;">Nenhuma planta encontrada.</p>`;
        return;
    }

    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => showPlantDetail(p.id);
        card.innerHTML = `
            <div class="card-img">
                <span class="card-tag">${p.tag}</span>
                <img src="${p.imageUrl}" alt="${p.name}">
            </div>
            <div class="card-body">
                <span class="nick">${p.nick}</span>
                <h3>${p.name}</h3>
                <div class="card-meta">
                    <span class="price">R$ ${p.price.toFixed(2)}</span>
                    <span class="diff">${p.difficulty}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function showPlantDetail(plantId) {
    const plant = PLANTS.find(p => p.id === plantId);
    if (!plant) return;

    const container = document.getElementById("plant-detail-content");
    container.innerHTML = `
        <div class="detail-img">
            <img src="${plant.imageUrl}" alt="${plant.name}">
        </div>
        <div>
            <span class="eyebrow">${plant.tag} • Nível ${plant.difficulty}</span>
            <h1>${plant.name}</h1>
            <span class="origin">Nativa de: ${plant.origin}</span>
            <p class="story">${plant.desc}</p>
            
            <div class="specs">
                <div class="spec">
                    <div class="k">Luminosidade</div>
                    <div class="v">${plant.light}</div>
                </div>
                <div class="spec">
                    <div class="k">Rega</div>
                    <div class="v">${plant.water}</div>
                </div>
            </div>

            <div class="curio">
                <strong>Curiosidade Histórica:</strong> ${plant.curiosity}
            </div>

            <div class="detail-price">
                <span class="p">R$ ${plant.price.toFixed(2)}</span>
                <span style="color: var(--green); font-weight: 500;">🌱 +${plant.brotos} Brotos fidelidade</span>
            </div>

            <div class="detail-actions">
                <button class="btn-ghost" onclick="navigateTo('catalog')">Voltar</button>
                <button class="btn-buy" onclick="addToCart(${plant.id})">Adicionar ao Carrinho</button>
            </div>
        </div>
    `;

    navigateTo("detail");
}

// ==========================================
// 6. GERENCIAMENTO DE CARRINHO E CHECKOUT
// ==========================================
function toggleCart(open) {
    document.getElementById("cart-drawer").style.display = open ? "flex" : "none";
    document.getElementById("cart-drawer-overlay").style.display = open ? "block" : "none";
    if (open) renderCart();
}

function addToCart(plantId) {
    const plant = PLANTS.find(p => p.id === plantId);
    if (!plant) return;

    const existing = cart.find(item => item.plant.id === plantId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ plant: plant, quantity: 1 });
    }

    updateCartCounter();
    showToast(`${plant.name} adicionada ao carrinho!`);
}

function updateCartCounter() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById("cart-counter").innerText = totalItems;
}

function changeQty(plantId, amount) {
    const idx = cart.findIndex(item => item.plant.id === plantId);
    if (idx === -1) return;

    cart[idx].quantity += amount;
    if (cart[idx].quantity <= 0) {
        cart.splice(idx, 1);
    }
    updateCartCounter();
    renderCart();
}

function removeFromCart(plantId) {
    cart = cart.filter(item => item.plant.id !== plantId);
    updateCartCounter();
    renderCart();
}

function renderCart() {
    const container = document.getElementById("cart-items-container");
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = `<div class="empty">Seu carrinho está vazio.<br>Escolha plantas incríveis no catálogo!</div>`;
        document.getElementById("cart-total-price").innerText = "R$ 0,00";
        document.getElementById("cart-brotos-reward").innerText = "🌱 0";
        return;
    }

    let totalVal = 0;
    let totalBrotos = 0;

    cart.forEach(item => {
        totalVal += item.plant.price * item.quantity;
        totalBrotos += item.plant.brotos * item.quantity;

        const el = document.createElement("div");
        el.className = "cart-item";
        el.innerHTML = `
            <img src="${item.plant.imageUrl}" alt="${item.plant.name}">
            <div class="ci-info">
                <h4>${item.plant.name}</h4>
                <div class="qty">
                    <button onclick="changeQty(${item.plant.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeQty(${item.plant.id}, 1)">+</button>
                </div>
            </div>
            <div style="text-align: right;">
                <div style="font-weight: 700;">R$ ${(item.plant.price * item.quantity).toFixed(2)}</div>
                <button class="remove" onclick="removeFromCart(${item.plant.id})">Remover</button>
            </div>
        `;
        container.appendChild(el);
    });

    document.getElementById("cart-total-price").innerText = `R$ ${totalVal.toFixed(2)}`;
    document.getElementById("cart-brotos-reward").innerText = `🌱 +${totalBrotos}`;
}

function openCheckoutModal() {
    if (cart.length === 0) {
        showToast("Adicione itens antes de ir para o checkout.");
        return;
    }
    toggleCart(false);

    let summaryHtml = '<ul style="list-style:none; padding:0; font-size:14px; color: var(--muted);">';
    let total = 0;
    cart.forEach(item => {
        summaryHtml += `<li style="display:flex; justify-content:space-between; margin-bottom:6px;">
            <span>${item.quantity}x ${item.plant.name}</span>
            <strong>R$ ${(item.plant.price * item.quantity).toFixed(2)}</strong>
        </li>`;
        total += item.plant.price * item.quantity;
    });
    summaryHtml += `</ul><div style="border-top:1px solid var(--line); margin-top:10px; padding-top:10px; display:flex; justify-content:space-between; font-weight:700; font-size:16px;">
        <span>Total Compra:</span><span>R$ ${total.toFixed(2)}</span>
    </div>`;

    document.getElementById("checkout-summary").innerHTML = summaryHtml;
    document.getElementById("modal-checkout").style.display = "flex";
}

function processCheckout() {
    let gainedBrotos = cart.reduce((acc, item) => acc + item.plant.brotos * item.quantity, 0);
    
    // Atualizar dados locais do usuário ativo
    currentUser.brotos += gainedBrotos;
    currentUser.history.unshift({
        action: "Compra de plantas no Catálogo",
        val: gainedBrotos,
        type: "plus",
        date: "10/06/2026"
    });

    // Sincronizar banco de dados no localStorage
    updateUserInDatabase();

    // Limpar carrinho
    cart = [];
    updateCartCounter();

    // Trocar modal para sucesso
    document.getElementById("modal-checkout").style.display = "none";
    document.getElementById("success-brotos-gain").innerText = `🌱 +${gainedBrotos} Brotos`;
    document.getElementById("modal-success").style.display = "flex";
}

function closeSuccessAndGoToBrotos() {
    closeModals();
    showApp();
    navigateTo("brotos");
}

// ==========================================
// 7. FLUXO DE PRESENTE INTEGRADO (3 PASSOS)
// ==========================================
function renderGiftSelection() {
    const grid = document.getElementById("gift-selection-grid");
    grid.innerHTML = "";

    PLANTS.forEach(p => {
        const btn = document.createElement("button");
        btn.className = "gift-pick";
        btn.id = `gift-plant-${p.id}`;
        btn.onclick = () => selectGiftPlant(p.id);
        btn.innerHTML = `
            <img src="${p.imageUrl}" alt="${p.name}">
            <span>${p.name}</span>
        `;
        grid.appendChild(btn);
    });

    // Seleciona a primeira planta por padrão
    selectGiftPlant(PLANTS[0].id);
}

function selectGiftPlant(id) {
    selectedGiftPlantId = id;
    document.querySelectorAll(".gift-pick").forEach(el => el.classList.remove("sel"));
    const selectedEl = document.getElementById(`gift-plant-${id}`);
    if (selectedEl) selectedEl.classList.add("sel");
}

function nextGiftStep(stepNum) {
    document.getElementById("gift-step-1").style.display = stepNum === 1 ? "block" : "none";
    document.getElementById("gift-step-2").style.display = stepNum === 2 ? "block" : "none";
    document.getElementById("gift-step-3").style.display = stepNum === 3 ? "block" : "none";

    document.getElementById("step-1-indicator").className = stepNum === 1 ? "step on" : "step";
    document.getElementById("step-2-indicator").className = stepNum === 2 ? "step on" : "step";
    document.getElementById("step-3-indicator").className = stepNum === 3 ? "step on" : "step";

    if (stepNum === 3) {
        const de = document.getElementById("gift-from").value.trim() || "Alguém especial";
        const para = document.getElementById("gift-to").value.trim() || "Amigo Querido";
        const msg = document.getElementById("gift-msg").value.trim() || "Cultive conexões e boas energias!";
        const plant = PLANTS.find(p => p.id === selectedGiftPlantId);

        document.getElementById("lbl-gift-to").innerText = para;
        document.getElementById("lbl-gift-msg").innerText = msg;
        document.getElementById("lbl-gift-from").innerText = de;
        document.getElementById("lbl-gift-plant-bonus").innerHTML = `🎁 Acompanha uma linda <strong>${plant.name}</strong> contendo histórias exclusivas.`;
    }
}

function finalizeGift() {
    // Premiar usuário por presentear (+50 brotos)
    currentUser.brotos += 50;
    currentUser.history.unshift({
        action: `Presente enviado para ${document.getElementById("gift-to").value || "Alguém"}`,
        val: 50,
        type: "plus",
        date: "10/06/2026"
    });

    updateUserInDatabase();
    showApp();

    // Resetar campos de texto
    document.getElementById("gift-from").value = "";
    document.getElementById("gift-to").value = "";
    document.getElementById("gift-msg").value = "";
    nextGiftStep(1);

    showToast("Presente gerado! +50 Brotos adicionados 🌱");
    navigateTo("brotos");
}

// ==========================================
// 8. ABA: PLATAFORMA DE CURSOS (BOTÂNICA)
// ==========================================
function filterCourses(level, btnElement) {
    currentCourseFilter = level;
    const parent = btnElement.parentElement;
    parent.querySelectorAll("button").forEach(b => b.classList.remove("active"));
    btnElement.classList.add("active");
    renderCourses();
}

function renderCourses() {
    const grid = document.getElementById("courses-grid");
    grid.innerHTML = "";

    const filtered = COURSES.filter(c => currentCourseFilter === "Todos" || c.level === currentCourseFilter);

    filtered.forEach(c => {
        const card = document.createElement("div");
        card.className = "course-card";
        card.onclick = () => openCourseModal(c.id);
        card.innerHTML = `
            <div class="course-emoji">${c.emoji}</div>
            <span class="level-tag lv-${c.level}">${c.level}</span>
            <h3>${c.title}</h3>
            <p>${c.desc}</p>
            <div class="course-foot">
                <span>⏱️ ${c.duration}</span>
                <span>📚 ${c.lessons} lições</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openCourseModal(courseId) {
    const course = COURSES.find(c => c.id === courseId);
    if (!course) return;

    document.getElementById("modal-course-emoji").innerText = course.emoji;
    document.getElementById("modal-course-title").innerText = course.title;
    document.getElementById("modal-course-desc").innerText = course.desc;

    const listHtml = document.getElementById("modal-course-topics");
    listHtml.innerHTML = "";
    course.topics.forEach(t => {
        listHtml.innerHTML += `<li>${t}</li>`;
    });

    const watchBtn = document.getElementById("btn-watch-course");
    watchBtn.onclick = () => {
        window.open(course.youtubeUrl, "_blank");
        
        // Simular prêmio por assistir a aula (Ganha 15 Brotos por estudo)
        currentUser.brotos += 15;
        currentUser.history.unshift({
            action: `Concluiu o curso: ${course.title}`,
            val: 15,
            type: "plus",
            date: "10/06/2026"
        });
        updateUserInDatabase();
        showApp();
        showToast("Obrigado por estudar! +15 Brotos na sua conta! 🌱");
        closeModals();
    };

    document.getElementById("modal-course").style.display = "flex";
}

// ==========================================
// 9. ABA: MEUS BROTOS (FIDELIDADE & RECOMPENSAS)
// ==========================================
function renderBrotosPage() {
    document.getElementById("brotos-saldo-display").innerText = currentUser.brotos;

    // Renderizar Recompensas
    const grid = document.getElementById("rewards-grid");
    grid.innerHTML = "";

    REWARDS.forEach(r => {
        const canRedeem = currentUser.brotos >= r.cost;
        const card = document.createElement("div");
        card.className = "reward-card";
        card.innerHTML = `
            <div class="e">${r.emoji}</div>
            <h3>${r.title}</h3>
            <p>${r.desc}</p>
            <div class="reward-cost">🌱 ${r.cost} Brotos</div>
            <button class="btn-redeem" ${canRedeem ? "" : "disabled"} onclick="redeemReward(${r.id})">
                ${canRedeem ? "Resgatar Recompensa" : "Brotos Insuficientes"}
            </button>
        `;
        grid.appendChild(card);
    });

    // Renderizar Histórico
    const histList = document.getElementById("history-list");
    histList.innerHTML = "";

    if (currentUser.history.length === 0) {
        histList.innerHTML = `<p style="color:var(--muted); font-size:14px;">Nenhuma movimentação registrada.</p>`;
        return;
    }

    currentUser.history.forEach(h => {
        const item = document.createElement("div");
        item.className = "hist-item";
        item.innerHTML = `
            <div>
                <div class="act">${h.action}</div>
                <div style="font-size:12px; color:var(--muted); margin-top:2px;">${h.date}</div>
            </div>
            <div class="val ${h.type}">
                ${h.type === "plus" ? "+" : "-"}${h.val} 🌱
            </div>
        `;
        histList.appendChild(item);
    });
}

function redeemReward(rewardId) {
    const reward = REWARDS.find(r => r.id === rewardId);
    if (!reward || currentUser.brotos < reward.cost) return;

    // Deduzir pontos
    currentUser.brotos -= reward.cost;
    const uniqueCoupon = `FLOR-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${reward.cost}`;
    
    currentUser.history.unshift({
        action: `Resgate de Cupom: ${reward.title}`,
        val: reward.cost,
        type: "minus",
        date: "10/06/2026"
    });

    updateUserInDatabase();
    showApp();

    // Mostrar cupom na tela modal
    document.getElementById("displayed-coupon-code").innerText = uniqueCoupon;
    document.getElementById("modal-reward-success").style.display = "flex";
}

// ==========================================
// 10. FUNÇÕES UTILITÁRIAS DO SISTEMA (MODAIS, TOASTS)
// ==========================================
function updateUserInDatabase() {
    const users = JSON.parse(localStorage.getItem("fl_users"));
    const idx = users.findIndex(u => u.email === currentUser.email);
    if (idx !== -1) {
        users[idx] = currentUser;
        localStorage.setItem("fl_users", JSON.stringify(users));
    }
}

function closeModals() {
    document.getElementById("modal-checkout").style.display = "none";
    document.getElementById("modal-success").style.display = "none";
    document.getElementById("modal-course").style.display = "none";
    document.getElementById("modal-reward-success").style.display = "none";
}

function showToast(text) {
    const toast = document.getElementById("toast");
    toast.innerText = text;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 3500);
}
