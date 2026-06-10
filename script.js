// ==========================================
// 1. BANCO DE DADOS DO APP (PLANTAS E CURSOS)
// ==========================================

const PLANTS = [
    { id: 1, name: "Costela de Adao", nick: "Monstera Deliciosa", origin: "Florestas Tropicais do Mexico", price: 89.90, difficulty: "Facil", light: "Meia sombra", water: "2x por semana", brotos: 45, imageUrl: "https://cdn.assets-casacor.tec.br/file/casacor-images-news/2024/11/costela-de-adao.webp", tag: "Popular", desc: "Suas folhas recortadas iconicas sao desenhadas naturalmente para deixar o vento passar.", curiosity: "Na era vitoriana, ter uma Monstera indicava alta classe social." },
    { id: 2, name: "Ficus Lyrata", nick: "Figueira-Lira", origin: "Oeste da Africa", price: 180.00, difficulty: "Media", light: "Muita luz indireta", water: "1x por semana", brotos: 90, imageUrl: "https://cdn.awsli.com.br/800x800/2772/2772039/produto/372166868/bambino-3-7fw8rm5889.jpg", tag: "Rara", desc: "Uma planta majestosa com folhas grandes em formato de lira.", curiosity: "Em seu habitat natural, ela pode crescer como uma planta epifita." },
    { id: 3, name: "Espada de Sao Jorge", nick: "Sansevieria Trifasciata", origin: "Africa Ocidental", price: 45.00, difficulty: "Facil", light: "Qualquer luz", water: "1x a cada 15 dias", brotos: 20, imageUrl: "https://marilianoticia.com.br/wp-content/uploads/2025/05/Por-que-colocar-a-espada-de-sao-jorge-na-entrada-de-casa-e-como-mante-la-bonita.webp", tag: "Resistente", desc: "Folhas verticais rigidas. Extremamente duravel e limpa o ar de toxinas.", curiosity: "A NASA a listou oficialmente como uma das melhores plantas para purificar o ar." },
    { id: 4, name: "Orquidea Mariposa", nick: "Phalaenopsis", origin: "Sudeste Asiatico", price: 75.00, difficulty: "Media", light: "Luz filtrada", water: "1x por semana", brotos: 40, imageUrl: "https://uploads.giromarilia.com.br/2026/01/Orquidea-mariposa-quantos-dias-a-flor-dura-quando-a-luz-esta-realmente-correta-1280x720-1-984x553.webp", tag: "Classica", desc: "Flores delicadas que lembram o voo de mariposas.", curiosity: "Na China antiga, as orquideas eram cultivadas por Confucio." },
    { id: 5, name: "Planta Neon", nick: "Pothos Neon", origin: "Ilhas Salomao", price: 55.00, difficulty: "Facil", light: "Media luz", water: "2x por semana", brotos: 25, imageUrl: "https://static.wixstatic.com/media/7c6eea_6f32ffc532984bd0ad335f339dcae22b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg", tag: "Pendente", desc: "Folhagem de tom verde-limao vibrante que cresce em cascatas.", curiosity: "Sobrevive muito bem cultivada diretamente na agua por anos." },
    { id: 6, name: "Begonia Maculata", nick: "Begonia Tamaya", origin: "Florestas do Brasil", price: 120.00, difficulty: "Especialista", light: "Luz indireta", water: "2x por semana", brotos: 60, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1L61yqmSL6pGIqJpdGjJ8xWQDVfBHuvHbhA&s", tag: "Colecionador", desc: "Folhas cobertas com bolinhas brancas perfeitas e verso vermelho.", curiosity: "Diz a lenda que Louboutin se inspirou nela para criar suas solas vermelhas." },
    { id: 7, name: "Calathea Triostar", nick: "Stromanthe Thalia", origin: "America do Sul", price: 95.00, difficulty: "Especialista", light: "Sombra umida", water: "3x por semana", brotos: 50, imageUrl: "https://cdn.shopify.com/s/files/1/0621/8157/2697/files/vicl9zxts8qachlra2dw_6f1be892-dc1d-4c6f-99a6-eb60c5a77242_1000x1000_crop_center.jpg.webp?v=1738163014", tag: "Exotica", desc: "Folhas pintadas com tons de rosa, creme e verde.", curiosity: "A noite suas folhas se levantam verticalmente como maos em oracao." },
    { id: 8, name: "Cacto Macarrao", nick: "Rhipsalis Baccifera", origin: "America Central", price: 40.00, difficulty: "Facil", light: "Meia sombra", water: "1x por semana", brotos: 20, imageUrl: "https://cdn.awsli.com.br/2772/2772039/produto/379338127/cacto-macarr-o-v44xnawqod.webp", tag: "Diferente", desc: "Um cacto sem espinhos que adora humidade e vive em arvores.", curiosity: "E uma das poucas especies de cacto nativas fora das Americas." },
    { id: 9, name: "Zamioculca", nick: "Zamioculcas Zamiifolia", origin: "Africa Oriental", price: 65.00, difficulty: "Facil", light: "Sombra total", water: "1x a cada 20 dias", brotos: 30, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Zamioculcas.jpg", tag: "Escritorio", desc: "Folhas brilhantes que parecem artificiais. Super resistente.", curiosity: "E chamada de Arvore de Ouro por atrair prosperidade." }
];

const COURSES = [
    { id: 1, emoji: "🌱", title: "Jardinagem para Iniciantes", level: "Iniciante", duration: "45 min", lessons: 5, desc: "Aprenda os conceitos basicos sobre rega, luz e escolha do vaso ideal.", youtubeUrl: "https://youtu.be/4K6AKiK4ihA?si=0-T0_s52ExjH9U1W", topics: ["Como escolher a primeira planta", "Teste do dedo: quando regar", "Tipos de vasos e drenagem"] },
    { id: 2, emoji: "✂️", title: "Arte da Propagacao e Mudas", level: "Iniciante", duration: "1h 15min", lessons: 6, desc: "Multiplique seu jardim fazendo mudas por estacas de nos ou folhas.", youtubeUrl: "https://youtu.be/-9pAkmfSHrQ?si=5ljNiTJidmq16tic", topics: ["Onde cortar: localizando o no", "Enraizamento na agua vs terra", "Cuidados com os brotos bebes"] },
    { id: 3, emoji: "🪵", title: "Substratos e Solos Perfeitos", level: "Intermediario", duration: "50 min", lessons: 4, desc: "Crie misturas aeradas e nutritivas especificas para cada especie.", youtubeUrl: "https://youtu.be/mDlgsz9Cynw?si=roEcr5nT4W4gR0u8", topics: ["Perlita, fibra de coco e casca", "Solo para Monstera e Araceas", "Mistura para Cactos"] },
    { id: 4, emoji: "🦟", title: "Guia de Combate a Pragas", level: "Intermediario", duration: "1h", lessons: 7, desc: "Aprenda a identificar e eliminar pragas usando receitas caseiras.", youtubeUrl: "https://youtu.be/cliVNvyFZbI?si=XgBj4wATLvWNr8zn", topics: ["Identificacao de pragas comuns", "O poder do Oleo de Neem", "Como tratar fungos"] }
];

const REWARDS = [
    { id: 1, emoji: "🎟️", title: "Cupom de Frete Gratis", cost: 100, desc: "Isencao total do frete para qualquer pedido de planta." },
    { id: 2, emoji: "🪴", title: "Vaso de Ceramica Artesanal", cost: 250, desc: "Um vaso exclusivo feito a mao por parceiros locais." },
    { id: 3, emoji: "🧪", title: "Kit Nutricao Premium", cost: 400, desc: "Combo com adubo organico concentrado e borrifador." }
];

// ==========================================
// 2. ESTADO GLOBAL DA APLICAÇÃO (SISTEMA LOCAL)
// ==========================================
let currentUser = null;
let cart = [];
let selectedGiftPlantId = null;
let currentDifficultyFilter = "Todas";
let currentCourseFilter = "Todos";

// Inicializar banco local fictício se não existir
if (!localStorage.getItem("fl_users")) {
    localStorage.setItem("fl_users", JSON.stringify([
        { name: "Admin Florescer", email: "admin@florescer.com", password: "123", brotos: 247, history: [{ action: "Bonus de Boas-vindas", val: 247, type: "plus", date: "10/06/2026" }] }
    ]));
}

// Inicialização ao carregar o DOM
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
    const loginForm = document.getElementById("form-login");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("login-email").value.trim();
            const senha = document.getElementById("login-senha").value;
            const errDiv = document.getElementById("login-error");

            const users = JSON.parse(localStorage.getItem("fl_users"));
            const user = users.find(u => u.email === email && u.password === senha);

            if (user) {
                currentUser = user;
                localStorage.setItem("fl_current_session", email);
                if (errDiv) errDiv.style.display = "none";
                showApp();
                showToast(`Bem-vindo, ${user.name}!`);
            } else {
                if (errDiv) {
                    errDiv.innerText = "E-mail ou senha incorretos.";
                    errDiv.style.display = "block";
                }
            }
        });
    }

    const registerForm = document.getElementById("form-register");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("reg-name").value.trim();
            const email = document.getElementById("reg-email").value.trim();
            const senha = document.getElementById("reg-senha").value;
            const errDiv = document.getElementById("register-error");

            if (senha.length < 6) {
                if (errDiv) {
                    errDiv.innerText = "A senha deve ter pelo menos 6 caracteres.";
                    errDiv.style.display = "block";
                }
                return;
            }

            const users = JSON.parse(localStorage.getItem("fl_users"));
            if (users.some(u => u.email === email)) {
                if (errDiv) {
                    errDiv.innerText = "Este e-mail ja esta cadastrado.";
                    errDiv.style.display = "block";
                }
                return;
            }

            const newUser = {
                name: name,
                email: email,
                password: senha,
                brotos: 50,
                history: [{ action: "Cadastro na Plataforma", val: 50, type: "plus", date: "10/06/2026" }]
            };

            users.push(newUser);
            localStorage.setItem("fl_users", JSON.stringify(users));
            currentUser = newUser;
            localStorage.setItem("fl_current_session", email);

            if (errDiv) errDiv.style.display = "none";
            showApp();
            showToast("Conta criada com sucesso! Ganhou 50 Brotos 🌱");
        });
    }

    const searchInput = document.getElementById("search-plant");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            renderCatalog();
        });
    }
}

function toggleAuthMode(isLogin) {
    const loginCard = document.getElementById("login-card");
    const regCard = document.getElementById("register-card");
    const logErr = document.getElementById("login-error");
    const regErr = document.getElementById("register-error");

    if (loginCard) loginCard.style.display = isLogin ? "block" : "none";
    if (regCard) regCard.style.display = isLogin ? "none" : "block";
    if (logErr) logErr.style.display = "none";
    if (regErr) regErr.style.display = "none";
}

function showAuth() {
    const authScr = document.getElementById("auth-screen");
    const appScr = document.getElementById("app-screen");
    if (authScr) authScr.style.display = "grid";
    if (appScr) appScr.style.display = "none";
}

function showApp() {
    const authScr = document.getElementById("auth-screen");
    const appScr = document.getElementById("app-screen");
    if (authScr) authScr.style.display = "none";
    if (appScr) appScr.style.display = "block";
    
    const brotosVal = document.getElementById("header-brotos-val");
    const avatar = document.getElementById("user-avatar");
    
    if (brotosVal) brotosVal.innerText = currentUser.brotos;
    if (avatar) avatar.innerText = currentUser.name.charAt(0).toUpperCase();

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
    document.querySelectorAll(".tab-content").forEach(el => el.style.display = "none");
    document.querySelectorAll(".nav button").forEach(btn => btn.classList.remove("active"));

    const targetPage = document.getElementById(`page-${tabId}`);
    if (targetPage) targetPage.style.display = "block";
    
    const activeBtn = document.getElementById(`nav-${tabId}`);
    if (activeBtn) activeBtn.classList.add("active");

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 5. SEÇÃO: CATÁLOGO DE PLANTAS & DETALHES
// ==========================================
function filterDifficulty(difficulty, btnElement) {
    currentDifficultyFilter = difficulty;
    if (btnElement && btnElement.parentElement) {
        btnElement.parentElement.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        btnElement.classList.add("active");
    }
    renderCatalog();
}

function renderCatalog() {
    const grid = document.getElementById("plants-grid");
    if (!grid) return;
    
    const searchEl = document.getElementById("search-plant");
    const searchQuery = searchEl ? searchEl.value.toLowerCase() : "";
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
    if (!container) return;

    container.innerHTML = `
        <div class="detail-img">
            <img src="${plant.imageUrl}" alt="${plant.name}">
        </div>
        <div>
            <span class="eyebrow">${plant.tag} • Nivel ${plant.difficulty}</span>
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
                <strong>Curiosidade:</strong> ${plant.curiosity}
            </div>

            <div class="detail-price">
                <span class="p">R$ ${plant.price.toFixed(2)}</span>
                <span style="color: var(--green); font-weight: 500;">🌱 +${plant.brotos} Brotos</span>
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
    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("cart-drawer-overlay");
    if (drawer) drawer.style.display = open ? "flex" : "none";
    if (overlay) overlay.style.display = open ? "block" : "none";
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
    const counter = document.getElementById("cart-counter");
    if (!counter) return;
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    counter.innerText = totalItems;
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
    if (!container) return;
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = `<div class="empty">Seu carrinho esta vazio.</div>`;
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
        <span>Total:</span><span>R$ ${total.toFixed(2)}</span>
    </div>`;

    document.getElementById("checkout-summary").innerHTML = summaryHtml;
    document.getElementById("modal-checkout").style.display = "flex";
}

function processCheckout() {
    let gainedBrotos = cart.reduce((acc, item) => acc + item.plant.brotos * item.quantity, 0);
    
    currentUser.brotos += gainedBrotos;
    currentUser.history.unshift({
        action: "Compra de plantas no Catalogo",
        val: gainedBrotos,
        type: "plus",
        date: "10/06/2026"
    });

    updateUserInDatabase();
    cart = [];
    updateCartCounter();

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
    if (!grid) return;
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
        const de = document.getElementById("gift-from").value.trim() || "Alguem especial";
        const para = document.getElementById("gift-to").value.trim() || "Amigo Querido";
        const msg = document.getElementById("gift-msg").value.trim() || "Cultive conexoes!";
        const plant = PLANTS.find(p => p.id === selectedGiftPlantId);

        document.getElementById("lbl-gift-to").innerText = para;
        document.getElementById("lbl-gift-msg").innerText = msg;
        document.getElementById("lbl-gift-from").innerText = de;
        document.getElementById("lbl-gift-plant-bonus").innerHTML = `🎁 Acompanha uma <strong>${plant.name}</strong>.`;
    }
}

function finalizeGift() {
    currentUser.brotos += 50;
    currentUser.history.unshift({
        action: `Presente enviado para ${document.getElementById("gift-to").value || "Alguem"}`,
        val: 50,
        type: "plus",
        date: "10/06/2026"
    });

    updateUserInDatabase();
    showApp();

    document.getElementById("gift-from").value = "";
    document.getElementById("gift-to").value = "";
    document.getElementById("gift-msg").value = "";
    nextGiftStep(1);

    showToast("Presente gerado! +50 Brotos 🌱");
    navigateTo("brotos");
}

// ==========================================
// 8. ABA: PLATAFORMA DE CURSOS (BOTÂNICA)
// ==========================================
function filterCourses(level, btnElement) {
    currentCourseFilter = level;
    if (btnElement && btnElement.parentElement) {
        btnElement.parentElement.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        btnElement.classList.add("active");
    }
    renderCourses();
}

// Definição global da função para evitar o erro de ReferenceError no HTML
window.filterCourses = filterCourses;

function renderCourses() {
    const grid = document.getElementById("courses-grid");
    if (!grid) return;
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
                <span>📚 ${c.lessons} licoes</span>
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
        
        currentUser.brotos += 15;
        currentUser.history.unshift({
            action: `Concluiu o curso: ${course.title}`,
            val: 15,
            type: "plus",
            date: "10/06/2026"
        });
        updateUserInDatabase();
        showApp();
        showToast("+15 Brotos na sua conta! 🌱");
        closeModals();
    };

    document.getElementById("modal-course").style.display = "flex";
}

// ==========================================
// 9. ABA: MEUS BROTOS (FIDELIDADE & RECOMPENSAS)
// ==========================================
function renderBrotosPage() {
    const display = document.getElementById("brotos-saldo-display");
    if (display) display.innerText = currentUser.brotos;

    const grid = document.getElementById("rewards-grid");
    if (!grid) return;
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

    const histList = document.getElementById("history-list");
    if (!histList) return;
    histList.innerHTML = "";

    if (currentUser.history.length === 0) {
        histList.innerHTML = `<p style="color:var(--muted); font-size:14px;">Nenhuma movimentacao.</p>`;
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

    currentUser.brotos -= reward.cost;
    const uniqueCoupon = `FLOR-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${reward.cost}`;
    
    currentUser.history.unshift({
        action: `Resgate: ${reward.title}`,
        val: reward.cost,
        type: "minus",
        date: "10/06/2026"
    });

    updateUserInDatabase();
    showApp();

    document.getElementById("displayed-coupon-code").innerText = uniqueCoupon;
    document.getElementById("modal-reward-success").style.display = "flex";
}

// ==========================================
// 10. FUNÇÕES UTILITÁRIAS DO SISTEMA
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
    const m1 = document.getElementById("modal-checkout");
    const m2 = document.getElementById("modal-success");
    const m3 = document.getElementById("modal-course");
    const m4 = document.getElementById("modal-reward-success");
    
    if (m1) m1.style.display = "none";
    if (m2) m2.style.display = "none";
    if (m3) m3.style.display = "none";
    if (m4) m4.style.display = "none";
}

function showToast(text) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.innerText = text;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 3500);
}

