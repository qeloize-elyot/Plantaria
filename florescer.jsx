import { useState, useEffect, useRef } from "react";
 
// ─── DATA ────────────────────────────────────────────────────────────────────
const PLANTS = [
  { id:1, name:"Monstera deliciosa", nick:"Costela-de-adão", origin:"Florestas tropicais do México", price:89.90, difficulty:"Fácil", light:"Indireta", water:"Semanal", brotos:90, emoji:"🌿", tag:"Popular", desc:"Uma das plantas mais amadas do mundo. Suas folhas fenestradas são uma obra de arte da natureza, desenvolvidas para capturar luz filtrada entre as copas das árvores.", curiosity:"Na selva, ela pode atingir 20 metros de altura! Em casa, cresce de forma generosa mas controlada." },
  { id:2, name:"Ficus lyrata", nick:"Figueira-lira", origin:"África Ocidental tropical", price:149.90, difficulty:"Moderado", light:"Indireta brilhante", water:"Quinzenal", brotos:150, emoji:"🌳", tag:"Destaque", desc:"Majestosa e dramática, a Ficus lyrata se tornou ícone do design de interiores. Suas folhas em formato de violino são únicas no reino vegetal.", curiosity:"O nome 'lyrata' vem do latim para 'lira' — o instrumento musical que suas folhas evocam." },
  { id:3, name:"Cactus San Pedro", nick:"São Pedro", origin:"Andes do Peru e Bolívia", price:64.90, difficulty:"Muito fácil", light:"Pleno sol", water:"Mensal", brotos:65, emoji:"🌵", tag:"Iniciante", desc:"Um cacto colunar de crescimento rápido que impressiona com sua geometria perfeita. Ideal para quem ainda está desenvolvendo a habilidade de cuidar de plantas.", curiosity:"É uma das plantas mais antigas cultivadas pelos povos andinos, com mais de 3.000 anos de história." },
  { id:4, name:"Orquídea Phalaenopsis", nick:"Orquídea-mariposa", origin:"Sudeste Asiático", price:119.90, difficulty:"Moderado", light:"Indireta brilhante", water:"Semanal", brotos:120, emoji:"🌸", tag:"Presente", desc:"A rainha dos presentes floridos. Suas flores duram meses e surgem em arcos elegantes que enchem qualquer ambiente de delicadeza.", curiosity:"Na natureza, as orquídeas crescem em galhos de árvores — são epífitas, não parasitas. Vivem do ar e da chuva." },
  { id:5, name:"Zamioculcas zamiifolia", nick:"ZZ Plant", origin:"África Oriental", price:79.90, difficulty:"Muito fácil", light:"Baixa a indireta", water:"Mensal", brotos:80, emoji:"🍃", tag:"Escritório", desc:"Sobrevivente extraordinária. A ZZ plant armazena água em seus rizomas e tolera semanas de esquecimento. Perfeita para ambientes de baixa luminosidade.", curiosity:"Suas folhas têm uma cera natural que as torna brilhantes sem nenhum produto — é um lustre puramente orgânico." },
  { id:6, name:"Strelitzia reginae", nick:"Ave-do-paraíso", origin:"África do Sul", price:189.90, difficulty:"Moderado", light:"Pleno sol a indireta brilhante", water:"Quinzenal", brotos:190, emoji:"🦜", tag:"Rara", desc:"Uma flor que imita um pássaro exótico em pleno voo. A Ave-do-paraíso é o símbolo de Los Angeles e uma das flores mais fotografadas do mundo.", curiosity:"A flor é polinizada exclusivamente por pássaros na África do Sul — seus pétals são tão resistentes que suportam o peso das aves." },
  { id:7, name:"Anthurium andraeanum", nick:"Antúrio", origin:"Colômbia e Equador", price:99.90, difficulty:"Fácil", light:"Indireta", water:"Semanal", brotos:100, emoji:"❤️", tag:"Presente", desc:"Flores lacadas em vermelho intenso que parecem esculpidas em plástico. O Antúrio é a escolha perfeita para quem quer impacto visual com pouco esforço.", curiosity:"Aquela parte brilhante que parece a flor é na verdade uma folha modificada chamada espata. A flor real é minúscula, no espádice central." },
  { id:8, name:"Calathea orbifolia", nick:"Calathea-orbifólia", origin:"Bolívia", price:134.90, difficulty:"Exigente", light:"Indireta baixa", water:"2x semana", brotos:135, emoji:"🪴", tag:"Colecionador", desc:"Folhas listradas em prata e verde que parecem pintadas à mão. A Calathea fecha suas folhas à noite — um fenômeno chamado 'oração das plantas' que nunca cansa de fascinar.", curiosity:"Ela é sensível ao flúor da água da torneira. Use água filtrada ou deixe a água descansar por 24h antes de regar." },
  { id:9, name:"Hoya kerrii", nick:"Coração-de-hoya", origin:"Sudeste Asiático", price:44.90, difficulty:"Fácil", light:"Indireta brilhante", water:"Quinzenal", brotos:45, emoji:"💚", tag:"Presente", desc:"Uma folha em formato de coração perfeito. A Hoya kerrii é o presente mais simbólico do mundo vegetal — pequena, durável e cheia de significado.", curiosity:"A folha-coração que se vende sozinha raramente cresce porque não tem gema. Para ter uma planta completa, precisa de uma folha com um pedacinho de haste." },
];
 
const COURSES = [
  { id:1, emoji:"🌱", title:"Plantas para iniciantes: do vaso à confiança", level:"Iniciante", duration:"4h 20min", lessons:12, desc:"Do básico ao essencial. Aprenda a escolher, comprar, posicionar e regar sua primeira planta sem medo.", topics:["Escolhendo o vaso certo","Solo e drenagem","Ritmos de rega","Sinais de socorro das plantas","Luz natural x artificial"] },
  { id:2, emoji:"🌿", title:"Verdejando em apartamento: cultivo em espaços pequenos", level:"Iniciante", duration:"3h 45min", lessons:10, desc:"Transforme qualquer cantinho num jardim vivo. Técnicas para quem tem pouco espaço mas muito amor.", topics:["Plantas para varandas","Suportes e prateleiras","Iluminação artificial","Mini jardins verticais","Estética + funcionalidade"] },
  { id:3, emoji:"🪴", title:"Calatheas, Marantas e Plantas que rezam", level:"Intermediário", duration:"5h 10min", lessons:14, desc:"O guia definitivo das plantas mais dramáticas e amadas do Instagram. Entenda seus rituais e exigências.", topics:["pH e dureza da água","Umidade e nebulização","Repotagem sem trauma","Pragas específicas","Propagação por divisão"] },
  { id:4, emoji:"🌸", title:"Orquídeas: mística e cuidado", level:"Intermediário", duration:"6h 30min", lessons:18, desc:"Desmistifique as orquídeas. Aprenda a reflorescer, replantar e multiplicar as rainhas das flores.", topics:["Ciclo de floração","Substratos ideais","Fertirrigação","Poda da haste floral","Hidroponia de orquídeas"] },
  { id:5, emoji:"🌵", title:"Suculentas e cactos: design e coleção", level:"Iniciante", duration:"3h 00min", lessons:9, desc:"O mundo compacto e resistente das suculentas. Do arranjo estético à coleção especializada.", topics:["Composições e arranjos","Terra e drenagem","Propagação por folhas","Floração e dormência","Identificação de espécies"] },
  { id:6, emoji:"🌳", title:"Árvores de interior: ficus, oliveiras e bonsais", level:"Avançado", duration:"8h 15min", lessons:22, desc:"O charme das árvores dentro de casa. Aprenda poda de formação, manejo de raízes e técnicas de bonsai.", topics:["Poda de formação","Raízes e repotagem","Bonsai do zero","Oliveiras em vaso","Gestão de pragas em árvores"] },
  { id:7, emoji:"🌺", title:"Jardim sensorial: plantas aromáticas e medicinais", level:"Intermediário", duration:"4h 45min", lessons:13, desc:"Cultive um jardim que fala aos cinco sentidos. Ervas, flores aromáticas e plantas medicinais em casa.", topics:["Lavanda e alecrim","Menta e hortelã","Colheita e secagem","Chás e óleos essenciais","Combinação de aromas"] },
  { id:8, emoji:"🔬", title:"Propagação avançada: multiplique sua coleção", level:"Avançado", duration:"7h 00min", lessons:20, desc:"O segredo dos colecionadores sérios. Técnicas de propagação vegetativa, por semente e por enxertia.", topics:["Estaquia no ar","Mergulhia","Enxertia de ficus","Germinação controlada","Meristema e cultura in vitro"] },
];
 
const REWARDS = [
  { brotos:150, emoji:"🌿", title:"1 kg de adubo orgânico premium", desc:"Húmus de minhoca selecionado" },
  { brotos:300, emoji:"🌸", title:"Kit de sementes raras (5 variedades)", desc:"Curadoria dos nossos botanistas" },
  { brotos:500, emoji:"📚", title:"Curso avançado de cultivo", desc:"Acesso completo por 1 ano" },
  { brotos:750, emoji:"🪴", title:"Vaso artesanal de cerâmica", desc:"Feito à mão por artesãos locais" },
  { brotos:1000, emoji:"🌳", title:"Consultoria de jardinagem 1h", desc:"Com especialista da Florescer" },
];
 
const DIFFICULTY_COLOR = { "Muito fácil":"#52b788", "Fácil":"#74c69d", "Moderado":"#c4783a", "Exigente":"#e63946", "Muito exigente":"#9b2226" };
 
// ─── ICONS ───────────────────────────────────────────────────────────────────
const Icon = ({ name, size=18, style={} }) => {
  const icons = {
    home: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10",
    catalog: "M4 6h16M4 12h16M4 18h16",
    gift: "M20 12v10H4V12 M22 7H2v5h20V7z M12 22V7 M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z",
    learn: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
    leaf: "M17 8C8 10 5.9 16.17 3.82 22.28L5.71 23l1-2.3A4.49 4.49 0 0 0 8 21c11 0 11-10 3-13",
    cart: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0",
    star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    check: "M20 6L9 17l-5-5",
    x: "M18 6L6 18 M6 6l12 12",
    arrow: "M5 12h14 M12 5l7 7-7 7",
    play: "M5 3l14 9-14 9V3z",
    clock: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 6v6l4 2",
    award: "M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z M8.21 13.89L7 23l5-3 5 3-1.21-9.12",
    filter: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
    search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0",
    heart: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    back: "M19 12H5 M12 19l-7-7 7-7",
    info: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M12 16v-4 M12 8h.01",
    sparkle: "M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z M5 18l.5 1.5L7 20l-1.5.5L5 22l-.5-1.5L3 20l1.5-.5L5 18z",
  };
  const d = icons[name] || icons.leaf;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={style}>
      {d.split(" M").map((part, i) => <path key={i} d={i === 0 ? part : "M" + part} />)}
    </svg>
  );
};
 
// ─── STYLES ──────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
  *{box-sizing:border-box;margin:0;padding:0;}
  :root{
    --g-deep:#1a3d2b;--g-mid:#2d6a4f;--g-soft:#52b788;--g-light:#b7e4c7;
    --cream:#f8f4ed;--cream-d:#ede8df;--cream-dd:#e2ddd4;
    --terra:#c4783a;--terra-l:#e8a870;
    --txt:#1a1a18;--txt-m:#4a4a45;--txt-l:#8a8a83;
    --white:#ffffff;
    --shadow:0 4px 24px rgba(26,61,43,0.08);
    --shadow-lg:0 12px 40px rgba(26,61,43,0.12);
  }
  body{font-family:'DM Sans',sans-serif;background:var(--cream);color:var(--txt);}
 
  /* NAV */
  .nav{display:flex;align-items:center;justify-content:space-between;padding:0 2rem;height:60px;background:var(--cream);border-bottom:0.5px solid rgba(42,78,54,0.15);position:sticky;top:0;z-index:200;}
  .nav-logo{font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:300;color:var(--g-deep);cursor:pointer;letter-spacing:0.06em;}
  .nav-logo em{font-style:italic;color:var(--g-soft);}
  .nav-tabs{display:flex;gap:0.2rem;}
  .nav-tab{display:flex;align-items:center;gap:0.4rem;padding:0.5rem 1rem;border:none;background:transparent;color:var(--txt-m);font-family:'DM Sans',sans-serif;font-size:0.78rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;border-radius:2px;transition:all 0.18s;}
  .nav-tab:hover{background:var(--cream-d);color:var(--g-deep);}
  .nav-tab.active{background:var(--g-deep);color:var(--cream);}
  .nav-right{display:flex;align-items:center;gap:1rem;}
  .brotos-pill{display:flex;align-items:center;gap:0.4rem;background:var(--cream-d);padding:0.4rem 0.8rem;border-radius:20px;font-size:0.78rem;color:var(--g-deep);font-weight:500;cursor:pointer;border:0.5px solid rgba(42,78,54,0.2);transition:all 0.2s;}
  .brotos-pill:hover{background:var(--g-light);border-color:var(--g-soft);}
  .cart-btn{position:relative;background:var(--g-deep);color:var(--cream);border:none;width:38px;height:38px;border-radius:2px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background 0.2s;}
  .cart-btn:hover{background:var(--g-mid);}
  .cart-count{position:absolute;top:-6px;right:-6px;background:var(--terra);color:#fff;font-size:0.6rem;width:17px;height:17px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:500;}
 
  /* PAGE WRAPPER */
  .page{min-height:calc(100vh - 60px);animation:fadeIn 0.3s ease;}
  @keyframes fadeIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}
 
  /* CATALOG PAGE */
  .catalog-header{background:var(--g-deep);padding:3rem 2rem 2rem;color:var(--cream);}
  .catalog-header h1{font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:300;font-style:italic;margin-bottom:0.5rem;}
  .catalog-header p{color:rgba(248,244,237,0.65);font-size:0.9rem;font-weight:300;}
  .catalog-controls{display:flex;gap:1rem;align-items:center;padding:1.5rem 2rem;background:var(--cream-d);border-bottom:0.5px solid rgba(42,78,54,0.1);flex-wrap:wrap;}
  .search-box{display:flex;align-items:center;gap:0.6rem;background:var(--cream);border:0.5px solid rgba(42,78,54,0.2);border-radius:2px;padding:0.5rem 0.8rem;flex:1;min-width:200px;}
  .search-box input{border:none;background:transparent;font-family:'DM Sans',sans-serif;font-size:0.85rem;color:var(--txt);outline:none;width:100%;}
  .search-box input::placeholder{color:var(--txt-l);}
  .filter-btn{padding:0.5rem 1rem;border:0.5px solid rgba(42,78,54,0.2);background:var(--cream);border-radius:2px;font-family:'DM Sans',sans-serif;font-size:0.78rem;color:var(--txt-m);cursor:pointer;transition:all 0.18s;letter-spacing:0.06em;}
  .filter-btn:hover,.filter-btn.active{background:var(--g-deep);color:var(--cream);border-color:var(--g-deep);}
  .plants-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1.5rem;padding:2rem;}
  .plant-card{background:var(--white);border:0.5px solid rgba(42,78,54,0.1);border-radius:4px;overflow:hidden;cursor:pointer;transition:all 0.22s;}
  .plant-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg);border-color:rgba(42,78,54,0.25);}
  .plant-card-img{height:180px;background:var(--cream-d);display:flex;align-items:center;justify-content:center;font-size:5rem;position:relative;}
  .plant-tag{position:absolute;top:0.8rem;left:0.8rem;background:var(--g-deep);color:var(--cream);font-size:0.62rem;letter-spacing:0.12em;text-transform:uppercase;padding:0.25rem 0.6rem;border-radius:2px;}
  .plant-tag.popular{background:var(--terra);}
  .plant-tag.rara{background:#6b3fa0;}
  .plant-card-body{padding:1.2rem;}
  .plant-card-body h3{font-family:'Cormorant Garamond',serif;font-size:1.15rem;font-weight:400;color:var(--g-deep);margin-bottom:0.2rem;}
  .plant-card-body .nick{font-size:0.75rem;color:var(--txt-l);margin-bottom:0.8rem;font-style:italic;}
  .plant-meta{display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1rem;}
  .meta-chip{font-size:0.67rem;padding:0.2rem 0.5rem;border-radius:2px;letter-spacing:0.08em;font-weight:500;}
  .plant-card-footer{display:flex;align-items:center;justify-content:space-between;padding:0.8rem 1.2rem;border-top:0.5px solid rgba(42,78,54,0.08);background:var(--cream);}
  .plant-price{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:300;color:var(--g-deep);}
  .brotos-earn{font-size:0.68rem;color:var(--txt-l);margin-top:0.1rem;}
  .add-btn{background:var(--g-deep);color:var(--cream);border:none;padding:0.5rem 0.9rem;border-radius:2px;font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background 0.2s;white-space:nowrap;}
  .add-btn:hover{background:var(--g-mid);}
 
  /* PLANT DETAIL */
  .plant-detail{max-width:900px;margin:0 auto;padding:2rem;}
  .back-btn{display:flex;align-items:center;gap:0.5rem;background:transparent;border:none;color:var(--txt-m);font-family:'DM Sans',sans-serif;font-size:0.82rem;cursor:pointer;padding:0;margin-bottom:2rem;letter-spacing:0.06em;}
  .back-btn:hover{color:var(--g-deep);}
  .detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:start;}
  .detail-img{background:var(--cream-d);border-radius:4px;height:360px;display:flex;align-items:center;justify-content:center;font-size:8rem;border:0.5px solid rgba(42,78,54,0.1);}
  .detail-tag{display:inline-block;background:var(--g-deep);color:var(--cream);font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;padding:0.3rem 0.7rem;border-radius:2px;margin-bottom:1rem;}
  .detail-name{font-family:'Cormorant Garamond',serif;font-size:2.5rem;font-weight:300;color:var(--g-deep);line-height:1.15;margin-bottom:0.3rem;}
  .detail-nick{font-size:0.85rem;color:var(--txt-l);font-style:italic;margin-bottom:1rem;}
  .detail-origin{font-size:0.78rem;color:var(--g-soft);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:1.2rem;}
  .detail-desc{font-size:0.9rem;line-height:1.75;color:var(--txt-m);font-weight:300;margin-bottom:1.2rem;}
  .curiosity-box{background:var(--cream-d);border-left:2px solid var(--g-soft);padding:1rem;border-radius:0 4px 4px 0;margin-bottom:1.5rem;}
  .curiosity-box p{font-size:0.82rem;line-height:1.65;color:var(--txt-m);font-style:italic;}
  .care-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0.8rem;margin-bottom:1.5rem;}
  .care-item{background:var(--cream);border:0.5px solid rgba(42,78,54,0.12);border-radius:4px;padding:0.8rem;text-align:center;}
  .care-item .ci-label{font-size:0.62rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--txt-l);margin-bottom:0.3rem;}
  .care-item .ci-val{font-size:0.82rem;color:var(--g-deep);font-weight:500;}
  .detail-price-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;}
  .detail-price{font-family:'Cormorant Garamond',serif;font-size:2.2rem;font-weight:300;color:var(--g-deep);}
  .detail-brotos{font-size:0.75rem;color:var(--g-soft);background:rgba(82,183,136,0.12);padding:0.3rem 0.7rem;border-radius:20px;}
  .detail-add-btn{width:100%;background:var(--g-deep);color:var(--cream);border:none;padding:1rem;border-radius:2px;font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-weight:300;cursor:pointer;transition:background 0.2s;letter-spacing:0.06em;}
  .detail-add-btn:hover{background:var(--g-mid);}
  .detail-gift-btn{width:100%;margin-top:0.6rem;background:transparent;color:var(--terra);border:0.5px solid var(--terra);padding:0.8rem;border-radius:2px;font-family:'DM Sans',sans-serif;font-size:0.82rem;cursor:pointer;letter-spacing:0.08em;text-transform:uppercase;transition:all 0.2s;}
  .detail-gift-btn:hover{background:var(--terra);color:#fff;}
 
  /* GIFT PAGE */
  .gift-header{background:linear-gradient(135deg,var(--terra) 0%,#a85a25 100%);padding:3rem 2rem 2rem;color:#fff;}
  .gift-header h1{font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:300;font-style:italic;margin-bottom:0.5rem;}
  .gift-header p{color:rgba(255,255,255,0.75);font-size:0.9rem;font-weight:300;}
  .gift-flow{max-width:780px;margin:0 auto;padding:2rem;}
  .gift-step{background:var(--white);border:0.5px solid rgba(42,78,54,0.1);border-radius:4px;margin-bottom:1.5rem;overflow:hidden;}
  .gift-step-header{display:flex;align-items:center;gap:1rem;padding:1.2rem 1.5rem;border-bottom:0.5px solid rgba(42,78,54,0.08);}
  .step-num{width:28px;height:28px;border-radius:50%;background:var(--g-deep);color:var(--cream);font-size:0.75rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-weight:500;}
  .step-num.done{background:var(--g-soft);}
  .gift-step-header h3{font-family:'Cormorant Garamond',serif;font-size:1.15rem;font-weight:400;color:var(--g-deep);}
  .gift-step-body{padding:1.5rem;}
  .gift-plant-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;}
  .gift-plant-opt{border:0.5px solid rgba(42,78,54,0.15);border-radius:4px;padding:1rem;cursor:pointer;text-align:center;transition:all 0.18s;background:var(--cream);}
  .gift-plant-opt:hover{border-color:var(--g-soft);background:rgba(82,183,136,0.05);}
  .gift-plant-opt.selected{border-color:var(--g-deep);background:rgba(26,61,43,0.04);border-width:1.5px;}
  .gift-plant-opt .gpo-emoji{font-size:2.2rem;margin-bottom:0.5rem;display:block;}
  .gift-plant-opt h4{font-family:'Cormorant Garamond',serif;font-size:0.95rem;font-weight:400;color:var(--g-deep);margin-bottom:0.2rem;}
  .gift-plant-opt p{font-size:0.7rem;color:var(--txt-l);}
  .form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;}
  .form-group{display:flex;flex-direction:column;gap:0.4rem;}
  .form-group label{font-size:0.72rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--txt-m);}
  .form-input{border:0.5px solid rgba(42,78,54,0.25);background:var(--cream);border-radius:2px;padding:0.7rem 0.8rem;font-family:'DM Sans',sans-serif;font-size:0.85rem;color:var(--txt);outline:none;transition:border-color 0.18s;}
  .form-input:focus{border-color:var(--g-soft);}
  .form-textarea{border:0.5px solid rgba(42,78,54,0.25);background:var(--cream);border-radius:2px;padding:0.7rem 0.8rem;font-family:'Cormorant Garamond',serif;font-size:0.95rem;font-style:italic;color:var(--txt);outline:none;resize:vertical;min-height:90px;width:100%;transition:border-color 0.18s;}
  .form-textarea:focus{border-color:var(--g-soft);}
  .letter-preview{background:var(--cream-d);border-radius:4px;padding:1.5rem;border:0.5px solid rgba(42,78,54,0.12);}
  .letter-preview .lp-to{font-size:0.65rem;text-transform:uppercase;letter-spacing:0.2em;color:var(--g-soft);margin-bottom:0.5rem;}
  .letter-preview h4{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:300;color:var(--g-deep);margin-bottom:0.8rem;}
  .letter-preview p{font-family:'Cormorant Garamond',serif;font-size:0.95rem;font-style:italic;color:var(--txt-m);line-height:1.7;}
  .letter-preview .lp-from{font-size:0.8rem;color:var(--txt-l);margin-top:1rem;}
  .gift-total-row{display:flex;align-items:center;justify-content:space-between;padding:1rem 1.5rem;background:var(--cream-d);border-top:0.5px solid rgba(42,78,54,0.1);}
  .gift-price{font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:300;color:var(--g-deep);}
  .proceed-btn{background:var(--terra);color:#fff;border:none;padding:0.8rem 1.8rem;border-radius:2px;font-family:'DM Sans',sans-serif;font-size:0.82rem;letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;transition:background 0.2s;}
  .proceed-btn:hover{background:#a85a25;}
  .proceed-btn:disabled{opacity:0.4;cursor:not-allowed;}
 
  /* LEARN PAGE */
  .learn-header{background:var(--cream-dd);padding:3rem 2rem 2rem;border-bottom:0.5px solid rgba(42,78,54,0.12);}
  .learn-header h1{font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:300;font-style:italic;color:var(--g-deep);margin-bottom:0.5rem;}
  .learn-header p{color:var(--txt-m);font-size:0.9rem;font-weight:300;}
  .learn-tabs{display:flex;gap:0.5rem;padding:1.5rem 2rem;border-bottom:0.5px solid rgba(42,78,54,0.1);}
  .learn-tab{padding:0.45rem 1rem;border:0.5px solid rgba(42,78,54,0.2);border-radius:2px;background:transparent;font-family:'DM Sans',sans-serif;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;cursor:pointer;color:var(--txt-m);transition:all 0.18s;}
  .learn-tab.active{background:var(--g-deep);color:var(--cream);border-color:var(--g-deep);}
  .courses-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:1.5rem;padding:2rem;}
  .course-card{background:var(--white);border:0.5px solid rgba(42,78,54,0.1);border-radius:4px;overflow:hidden;cursor:pointer;transition:all 0.22s;}
  .course-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg);}
  .course-card-top{padding:1.5rem 1.5rem 1rem;border-bottom:0.5px solid rgba(42,78,54,0.08);}
  .course-emoji{font-size:2.5rem;margin-bottom:0.8rem;display:block;}
  .course-level{font-size:0.65rem;text-transform:uppercase;letter-spacing:0.15em;margin-bottom:0.5rem;}
  .course-card h3{font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:400;color:var(--g-deep);line-height:1.3;margin-bottom:0.6rem;}
  .course-card p{font-size:0.8rem;color:var(--txt-m);line-height:1.6;font-weight:300;}
  .course-card-bottom{display:flex;align-items:center;justify-content:space-between;padding:0.9rem 1.5rem;background:var(--cream);}
  .course-meta{display:flex;gap:1rem;}
  .course-meta span{font-size:0.72rem;color:var(--txt-l);display:flex;align-items:center;gap:0.3rem;}
  .enroll-btn{background:var(--g-deep);color:var(--cream);border:none;padding:0.45rem 0.9rem;border-radius:2px;font-size:0.7rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background 0.2s;}
  .enroll-btn:hover{background:var(--g-mid);}
  .course-detail-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:300;display:flex;align-items:center;justify-content:center;padding:2rem;}
  .course-modal{background:var(--cream);border-radius:4px;max-width:560px;width:100%;max-height:80vh;overflow-y:auto;}
  .cm-header{background:var(--g-deep);padding:2rem;color:var(--cream);}
  .cm-header .cm-emoji{font-size:3rem;margin-bottom:0.8rem;display:block;}
  .cm-header h2{font-family:'Cormorant Garamond',serif;font-size:1.8rem;font-weight:300;}
  .cm-header p{color:rgba(248,244,237,0.7);font-size:0.82rem;margin-top:0.3rem;}
  .cm-body{padding:1.5rem;}
  .cm-body h4{font-size:0.72rem;text-transform:uppercase;letter-spacing:0.15em;color:var(--txt-l);margin-bottom:0.8rem;}
  .topic-list{list-style:none;margin-bottom:1.5rem;}
  .topic-list li{display:flex;align-items:center;gap:0.6rem;padding:0.5rem 0;border-bottom:0.5px solid rgba(42,78,54,0.08);font-size:0.85rem;color:var(--txt-m);}
  .topic-list li::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--g-soft);flex-shrink:0;}
  .cm-actions{display:flex;gap:0.8rem;padding:1.5rem;border-top:0.5px solid rgba(42,78,54,0.1);}
  .cm-enroll-btn{flex:1;background:var(--g-deep);color:var(--cream);border:none;padding:0.9rem;border-radius:2px;font-family:'Cormorant Garamond',serif;font-size:1.1rem;cursor:pointer;transition:background 0.2s;}
  .cm-enroll-btn:hover{background:var(--g-mid);}
  .cm-close-btn{background:transparent;border:0.5px solid rgba(42,78,54,0.25);color:var(--txt-m);padding:0.9rem 1.2rem;border-radius:2px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:0.82rem;transition:all 0.18s;}
  .cm-close-btn:hover{background:var(--cream-d);}
 
  /* BROTOS PAGE */
  .brotos-header{background:var(--g-deep);padding:3rem 2rem;color:var(--cream);text-align:center;}
  .brotos-header h1{font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:300;font-style:italic;margin-bottom:0.5rem;}
  .brotos-hero-num{font-family:'Cormorant Garamond',serif;font-size:5rem;font-weight:300;color:var(--g-light);margin:1rem 0 0.3rem;}
  .brotos-header p{color:rgba(248,244,237,0.6);font-size:0.85rem;}
  .brotos-content{max-width:800px;margin:0 auto;padding:2rem;}
  .progress-card{background:var(--white);border:0.5px solid rgba(42,78,54,0.1);border-radius:4px;padding:1.5rem;margin-bottom:2rem;}
  .progress-card h3{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:400;color:var(--g-deep);margin-bottom:1.2rem;}
  .prog-bar-wrap{margin-bottom:0.8rem;}
  .prog-label{display:flex;justify-content:space-between;font-size:0.72rem;color:var(--txt-m);margin-bottom:0.5rem;}
  .prog-bar{height:8px;background:var(--cream-dd);border-radius:4px;overflow:hidden;}
  .prog-fill{height:100%;border-radius:4px;transition:width 1s ease;}
  .prog-hint{font-size:0.72rem;color:var(--txt-l);font-style:italic;}
  .rewards-list{display:flex;flex-direction:column;gap:1rem;margin-bottom:2rem;}
  .reward-row{display:flex;align-items:center;gap:1.2rem;background:var(--white);border:0.5px solid rgba(42,78,54,0.1);border-radius:4px;padding:1.2rem;transition:all 0.2s;}
  .reward-row.unlocked{border-color:var(--g-soft);background:rgba(82,183,136,0.04);}
  .reward-emoji-big{font-size:2rem;flex-shrink:0;}
  .reward-info{flex:1;}
  .reward-info h4{font-family:'Cormorant Garamond',serif;font-size:1.05rem;font-weight:400;color:var(--g-deep);}
  .reward-info p{font-size:0.75rem;color:var(--txt-l);}
  .reward-pts-badge{font-family:'Cormorant Garamond',serif;font-size:1.2rem;color:var(--terra);flex-shrink:0;text-align:right;}
  .reward-pts-badge span{font-size:0.65rem;color:var(--txt-l);display:block;text-align:right;}
  .redeem-btn{background:var(--g-deep);color:var(--cream);border:none;padding:0.45rem 0.9rem;border-radius:2px;font-size:0.7rem;letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;font-family:'DM Sans',sans-serif;}
  .locked-badge{font-size:0.7rem;color:var(--txt-l);letter-spacing:0.08em;}
  .history-section h3{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:400;color:var(--g-deep);margin-bottom:1rem;}
  .history-item{display:flex;align-items:center;gap:1rem;padding:0.8rem 0;border-bottom:0.5px solid rgba(42,78,54,0.08);}
  .history-item:last-child{border-bottom:none;}
  .history-icon{width:32px;height:32px;border-radius:50%;background:var(--cream-d);display:flex;align-items:center;justify-content:center;font-size:0.85rem;flex-shrink:0;}
  .history-info{flex:1;}
  .history-info p{font-size:0.82rem;color:var(--txt);}
  .history-info span{font-size:0.72rem;color:var(--txt-l);}
  .history-pts{font-size:0.85rem;font-weight:500;color:var(--g-soft);}
 
  /* CART SIDEBAR */
  .cart-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.35);z-index:250;}
  .cart-drawer{position:fixed;right:0;top:0;bottom:0;width:380px;background:var(--cream);z-index:260;display:flex;flex-direction:column;animation:slideIn 0.25s ease;}
  @keyframes slideIn{from{transform:translateX(100%);}to{transform:translateX(0);}}
  .cart-header{display:flex;align-items:center;justify-content:space-between;padding:1.2rem 1.5rem;border-bottom:0.5px solid rgba(42,78,54,0.12);}
  .cart-header h3{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:400;color:var(--g-deep);}
  .cart-close{background:transparent;border:none;cursor:pointer;color:var(--txt-m);display:flex;align-items:center;justify-content:center;padding:0.3rem;}
  .cart-items{flex:1;overflow-y:auto;padding:1rem 1.5rem;}
  .cart-item{display:flex;gap:1rem;padding:1rem 0;border-bottom:0.5px solid rgba(42,78,54,0.08);}
  .cart-item-emoji{width:50px;height:50px;background:var(--cream-d);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:1.8rem;flex-shrink:0;}
  .cart-item-info{flex:1;}
  .cart-item-info h4{font-family:'Cormorant Garamond',serif;font-size:0.95rem;font-weight:400;color:var(--g-deep);margin-bottom:0.2rem;}
  .cart-item-info p{font-size:0.72rem;color:var(--txt-l);}
  .cart-item-price{font-family:'Cormorant Garamond',serif;font-size:1.1rem;color:var(--g-deep);flex-shrink:0;}
  .remove-item-btn{background:transparent;border:none;color:var(--txt-l);cursor:pointer;padding:0.2rem;transition:color 0.18s;display:flex;align-items:center;justify-content:center;}
  .remove-item-btn:hover{color:#e63946;}
  .cart-footer{padding:1.2rem 1.5rem;border-top:0.5px solid rgba(42,78,54,0.12);}
  .cart-total-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;}
  .cart-total-row span:first-child{font-size:0.78rem;color:var(--txt-m);text-transform:uppercase;letter-spacing:0.08em;}
  .cart-total-row .total{font-family:'Cormorant Garamond',serif;font-size:1.8rem;font-weight:300;color:var(--g-deep);}
  .cart-brotos-earn{font-size:0.72rem;color:var(--g-soft);margin-bottom:1rem;}
  .checkout-btn{width:100%;background:var(--g-deep);color:var(--cream);border:none;padding:1rem;border-radius:2px;font-family:'Cormorant Garamond',serif;font-size:1.1rem;cursor:pointer;transition:background 0.2s;}
  .checkout-btn:hover{background:var(--g-mid);}
  .empty-cart{text-align:center;padding:3rem 1rem;color:var(--txt-l);}
  .empty-cart p{font-style:italic;font-size:0.9rem;margin-top:0.5rem;}
 
  /* CHECKOUT MODAL */
  .checkout-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:350;display:flex;align-items:center;justify-content:center;padding:2rem;}
  .checkout-modal{background:var(--cream);border-radius:4px;max-width:480px;width:100%;overflow:hidden;}
  .checkout-modal-header{background:var(--g-deep);padding:2rem;color:var(--cream);}
  .checkout-modal-header h2{font-family:'Cormorant Garamond',serif;font-size:1.8rem;font-weight:300;}
  .checkout-modal-header p{color:rgba(248,244,237,0.65);font-size:0.82rem;margin-top:0.3rem;}
  .checkout-modal-body{padding:1.5rem;}
  .checkout-item-list{margin-bottom:1.2rem;}
  .checkout-item{display:flex;justify-content:space-between;padding:0.5rem 0;border-bottom:0.5px solid rgba(42,78,54,0.08);font-size:0.85rem;color:var(--txt-m);}
  .checkout-divider{display:flex;justify-content:space-between;padding:0.8rem 0;font-weight:500;color:var(--g-deep);}
  .checkout-divider span:last-child{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:300;}
  .pay-method-section{margin:1.2rem 0;}
  .pay-method-section h4{font-size:0.7rem;text-transform:uppercase;letter-spacing:0.15em;color:var(--txt-l);margin-bottom:0.8rem;}
  .pay-method{display:flex;gap:0.8rem;}
  .pay-opt{flex:1;border:0.5px solid rgba(42,78,54,0.2);border-radius:2px;padding:0.8rem;text-align:center;cursor:pointer;transition:all 0.18s;font-size:0.8rem;color:var(--txt-m);}
  .pay-opt.active{border-color:var(--g-deep);background:rgba(26,61,43,0.04);color:var(--g-deep);}
  .fake-notice{background:rgba(196,120,58,0.1);border-left:2px solid var(--terra);padding:0.8rem;font-size:0.75rem;color:var(--terra);border-radius:0 2px 2px 0;margin:1rem 0;line-height:1.5;}
  .confirm-pay-btn{width:100%;background:var(--terra);color:#fff;border:none;padding:1rem;border-radius:2px;font-family:'Cormorant Garamond',serif;font-size:1.1rem;cursor:pointer;transition:background 0.2s;margin-top:0.5rem;}
  .confirm-pay-btn:hover{background:#a85a25;}
  .cancel-pay-btn{width:100%;margin-top:0.5rem;background:transparent;border:0.5px solid rgba(42,78,54,0.2);color:var(--txt-m);padding:0.7rem;border-radius:2px;font-family:'DM Sans',sans-serif;font-size:0.78rem;cursor:pointer;}
 
  /* SUCCESS MODAL */
  .success-modal{background:var(--cream);border-radius:4px;max-width:420px;width:100%;text-align:center;padding:3rem 2rem;position:relative;}
  .success-emoji{font-size:4rem;margin-bottom:1rem;display:block;animation:popIn 0.5s cubic-bezier(0.36,0.07,0.19,0.97);}
  @keyframes popIn{0%{transform:scale(0);}60%{transform:scale(1.2);}100%{transform:scale(1);}}
  .success-modal h2{font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:300;color:var(--g-deep);margin-bottom:0.5rem;}
  .success-modal p{font-size:0.85rem;color:var(--txt-m);line-height:1.65;margin-bottom:1.5rem;}
  .brotos-earned{background:var(--g-deep);color:var(--g-light);border-radius:4px;padding:1rem;margin-bottom:1.5rem;}
  .brotos-earned .be-num{font-family:'Cormorant Garamond',serif;font-size:2.5rem;font-weight:300;}
  .brotos-earned p{font-size:0.75rem;color:rgba(183,228,199,0.7);margin-bottom:0;}
  .ok-btn{background:var(--g-deep);color:var(--cream);border:none;padding:0.9rem 2.5rem;border-radius:2px;font-family:'Cormorant Garamond',serif;font-size:1.1rem;cursor:pointer;}
 
  /* TOAST */
  .toast{position:fixed;bottom:1.5rem;right:1.5rem;background:var(--g-deep);color:var(--cream);padding:0.8rem 1.2rem;border-radius:4px;font-size:0.82rem;z-index:500;animation:toastIn 0.3s ease;box-shadow:var(--shadow-lg);}
  @keyframes toastIn{from{transform:translateY(20px);opacity:0;}to{transform:translateY(0);opacity:1;}}
 
  /* UTIL */
  .difficulty-chip{padding:0.2rem 0.5rem;border-radius:2px;font-size:0.67rem;letter-spacing:0.06em;font-weight:500;color:#fff;}
  .level-init{color:var(--g-soft);} .level-int{color:var(--terra);} .level-adv{color:#6b3fa0;}
  .section-empty{text-align:center;padding:3rem;color:var(--txt-l);font-style:italic;}
`;
 
// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function Florescer() {
  const [page, setPage] = useState("catalog");
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [brotos, setBrotos] = useState(247);
  const [history, setHistory] = useState([
    { emoji:"🌿", text:"Monstera deliciosa comprada", pts:90, date:"há 3 dias" },
    { emoji:"🌵", text:"Cacto San Pedro comprado", pts:65, date:"há 1 semana" },
    { emoji:"🎁", text:"Presente enviado para Ana Clara", pts:50, date:"há 2 semanas" },
    { emoji:"📚", text:"Curso de iniciante inscrito", pts:42, date:"há 3 semanas" },
  ]);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [lastEarned, setLastEarned] = useState(0);
  const [payMethod, setPayMethod] = useState("pix");
  const [toast, setToast] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [learnFilter, setLearnFilter] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [diffFilter, setDiffFilter] = useState("Todos");
 
  // GIFT STATE
  const [giftPlant, setGiftPlant] = useState(null);
  const [giftTo, setGiftTo] = useState("");
  const [giftFrom, setGiftFrom] = useState("");
  const [giftMsg, setGiftMsg] = useState("");
  const [giftStep, setGiftStep] = useState(1);
 
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  };
 
  const addToCart = (plant, isGift=false) => {
    setCart(c => [...c, { ...plant, cartId: Date.now(), isGift }]);
    showToast(`${plant.emoji} ${plant.name} adicionada ao carrinho!`);
    setCartOpen(true);
  };
 
  const removeFromCart = (cartId) => setCart(c => c.filter(i => i.cartId !== cartId));
 
  const cartTotal = cart.reduce((s, i) => s + i.price, 0);
  const cartBrotos = cart.reduce((s, i) => s + i.brotos, 0);
 
  const handleCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };
 
  const confirmPay = () => {
    const earned = cartBrotos + (cart.length * 10);
    setLastEarned(earned);
    setBrotos(b => b + earned);
    const newItems = cart.map(i => ({
      emoji: i.emoji, text: `${i.name} comprada`, pts: i.brotos, date: "agora"
    }));
    setHistory(h => [...newItems, ...h]);
    setCart([]);
    setCheckoutOpen(false);
    setSuccessOpen(true);
  };
 
  const handleGiftCheckout = () => {
    const plant = giftPlant;
    const earned = plant.brotos + 50;
    setLastEarned(earned);
    setBrotos(b => b + earned);
    setHistory(h => [
      { emoji:"🎁", text:`Presente para ${giftTo} enviado`, pts:earned, date:"agora" },
      ...h
    ]);
    setGiftPlant(null); setGiftTo(""); setGiftFrom(""); setGiftMsg(""); setGiftStep(1);
    setSuccessOpen(true);
  };
 
  const filteredPlants = PLANTS.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.nick.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDiff = diffFilter === "Todos" || p.difficulty === diffFilter;
    return matchSearch && matchDiff;
  });
 
  const filteredCourses = learnFilter === "Todos" ? COURSES : COURSES.filter(c => c.level === learnFilter);
 
  const DIFFS = ["Todos", "Muito fácil", "Fácil", "Moderado", "Exigente"];
 
  // Next reward
  const nextReward = REWARDS.find(r => r.brotos > brotos);
 
  return (
    <>
      <style>{css}</style>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo" onClick={() => { setPage("catalog"); setSelectedPlant(null); }}>
          Flore<em>scer</em>
        </div>
        <div className="nav-tabs">
          {[["catalog","leaf","Catálogo"],["gift","gift","Presentes"],["learn","learn","Aprender"],["brotos","award","Brotos"]].map(([id, icon, label]) => (
            <button key={id} className={`nav-tab ${page===id?"active":""}`} onClick={() => { setPage(id); setSelectedPlant(null); }}>
              <Icon name={icon} size={14} />{label}
            </button>
          ))}
        </div>
        <div className="nav-right">
          <div className="brotos-pill" onClick={() => setPage("brotos")}>
            🌿 {brotos} brotos
          </div>
          <button className="cart-btn" onClick={() => setCartOpen(true)}>
            <Icon name="cart" size={17} />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </button>
        </div>
      </nav>
 
      {/* PAGES */}
      {page === "catalog" && !selectedPlant && (
        <div className="page">
          <div className="catalog-header">
            <h1>Nosso catálogo</h1>
            <p>Cada planta conta uma história. Encontre a sua.</p>
          </div>
          <div className="catalog-controls">
            <div className="search-box">
              <Icon name="search" size={15} style={{color:"var(--txt-l)",flexShrink:0}} />
              <input placeholder="Buscar plantas..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            {DIFFS.map(d => (
              <button key={d} className={`filter-btn ${diffFilter===d?"active":""}`} onClick={() => setDiffFilter(d)}>{d}</button>
            ))}
          </div>
          {filteredPlants.length === 0 ? (
            <div className="section-empty">Nenhuma planta encontrada 🌵</div>
          ) : (
            <div className="plants-grid">
              {filteredPlants.map(p => (
                <div key={p.id} className="plant-card" onClick={() => setSelectedPlant(p)}>
                  <div className="plant-card-img">
                    <span className={`plant-tag ${p.tag==="Popular"?"popular":p.tag==="Rara"?"rara":""}`}>{p.tag}</span>
                    <span style={{fontSize:"5rem"}}>{p.emoji}</span>
                  </div>
                  <div className="plant-card-body">
                    <h3>{p.name}</h3>
                    <div className="nick">{p.nick}</div>
                    <div className="plant-meta">
                      <span className="meta-chip difficulty-chip" style={{background:DIFFICULTY_COLOR[p.difficulty]||"#ccc"}}>{p.difficulty}</span>
                      <span className="meta-chip" style={{background:"var(--cream-d)",color:"var(--txt-m)"}}>☀️ {p.light}</span>
                      <span className="meta-chip" style={{background:"var(--cream-d)",color:"var(--txt-m)"}}>💧 {p.water}</span>
                    </div>
                  </div>
                  <div className="plant-card-footer">
                    <div>
                      <div className="plant-price">R$ {p.price.toFixed(2)}</div>
                      <div className="brotos-earn">+{p.brotos} brotos</div>
                    </div>
                    <button className="add-btn" onClick={e => { e.stopPropagation(); addToCart(p); }}>
                      + Carrinho
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
 
      {page === "catalog" && selectedPlant && (
        <div className="page">
          <div className="plant-detail">
            <button className="back-btn" onClick={() => setSelectedPlant(null)}>
              <Icon name="back" size={16} /> Voltar ao catálogo
            </button>
            <div className="detail-grid">
              <div>
                <div className="detail-img">{selectedPlant.emoji}</div>
              </div>
              <div>
                <span className="detail-tag">{selectedPlant.tag}</span>
                <h1 className="detail-name">{selectedPlant.name}</h1>
                <div className="detail-nick">{selectedPlant.nick}</div>
                <div className="detail-origin">🌍 {selectedPlant.origin}</div>
                <p className="detail-desc">{selectedPlant.desc}</p>
                <div className="curiosity-box">
                  <p>✨ {selectedPlant.curiosity}</p>
                </div>
                <div className="care-grid">
                  <div className="care-item">
                    <div className="ci-label">Dificuldade</div>
                    <div className="ci-val" style={{color:DIFFICULTY_COLOR[selectedPlant.difficulty]}}>{selectedPlant.difficulty}</div>
                  </div>
                  <div className="care-item">
                    <div className="ci-label">Luz</div>
                    <div className="ci-val">☀️ {selectedPlant.light}</div>
                  </div>
                  <div className="care-item">
                    <div className="ci-label">Rega</div>
                    <div className="ci-val">💧 {selectedPlant.water}</div>
                  </div>
                </div>
                <div className="detail-price-row">
                  <div className="detail-price">R$ {selectedPlant.price.toFixed(2)}</div>
                  <div className="detail-brotos">🌿 +{selectedPlant.brotos} brotos</div>
                </div>
                <button className="detail-add-btn" onClick={() => addToCart(selectedPlant)}>
                  Adicionar ao carrinho
                </button>
                <button className="detail-gift-btn" onClick={() => { setGiftPlant(selectedPlant); setPage("gift"); setSelectedPlant(null); }}>
                  🎁 Dar de presente
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
 
      {/* GIFT PAGE */}
      {page === "gift" && (
        <div className="page">
          <div className="gift-header">
            <h1>Linha de presentes</h1>
            <p>Uma planta com uma história escrita só para quem você ama.</p>
          </div>
          <div className="gift-flow">
            {/* Step 1: Select plant */}
            <div className="gift-step">
              <div className="gift-step-header">
                <div className={`step-num ${giftStep>1?"done":""}`}>{giftStep>1?"✓":"1"}</div>
                <h3>Escolha a planta do presente</h3>
              </div>
              {(giftStep === 1 || giftPlant) && (
                <div className="gift-step-body">
                  <div className="gift-plant-grid">
                    {PLANTS.filter(p => ["Presente","Popular","Destaque"].includes(p.tag) || true).slice(0,6).map(p => (
                      <div key={p.id} className={`gift-plant-opt ${giftPlant?.id===p.id?"selected":""}`}
                        onClick={() => { setGiftPlant(p); if(giftStep<2) setGiftStep(2); }}>
                        <span className="gpo-emoji">{p.emoji}</span>
                        <h4>{p.name}</h4>
                        <p>R$ {p.price.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
 
            {/* Step 2: Recipient info */}
            {giftStep >= 2 && (
              <div className="gift-step">
                <div className="gift-step-header">
                  <div className={`step-num ${giftStep>2?"done":""}`}>{giftStep>2?"✓":"2"}</div>
                  <h3>Quem vai receber?</h3>
                </div>
                <div className="gift-step-body">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nome de quem recebe *</label>
                      <input className="form-input" placeholder="Ex: Ana Clara" value={giftTo} onChange={e => setGiftTo(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label>De quem é o presente</label>
                      <input className="form-input" placeholder="Ex: Sua amiga Mari" value={giftFrom} onChange={e => setGiftFrom(e.target.value)} />
                    </div>
                  </div>
                  <div className="form-group" style={{marginBottom:"1rem"}}>
                    <label>Mensagem personalizada (opcional)</label>
                    <textarea className="form-textarea" placeholder="Escreva uma mensagem especial... ela vai aparecer na carta impressa." value={giftMsg} onChange={e => setGiftMsg(e.target.value)} />
                  </div>
                  {giftTo && (
                    <button className="proceed-btn" style={{marginBottom:"0.5rem"}} onClick={() => setGiftStep(3)}>
                      Pré-visualizar carta →
                    </button>
                  )}
                </div>
              </div>
            )}
 
            {/* Step 3: Preview letter */}
            {giftStep >= 3 && giftPlant && giftTo && (
              <div className="gift-step">
                <div className="gift-step-header">
                  <div className={`step-num ${giftStep>3?"done":""}`}>{giftStep>3?"✓":"3"}</div>
                  <h3>Sua carta personalizada</h3>
                </div>
                <div className="gift-step-body">
                  <div className="letter-preview">
                    <div className="lp-to">Para · {giftTo}</div>
                    <h4>Sua {giftPlant.name} foi cultivada com carinho especialmente para você.</h4>
                    <p>
                      {giftMsg || `Esta planta tem uma história linda que começa agora, no dia em que você a recebeu. A ${giftPlant.name} veio das ${giftPlant.origin} e carrega em cada folha séculos de natureza pura.`}
                      <br/><br/>
                      Para cuidar dela com amor:<br/>
                      ☀️ Luz: {giftPlant.light}<br/>
                      💧 Rega: {giftPlant.water}<br/>
                      🌱 Dificuldade: {giftPlant.difficulty}
                    </p>
                    <div className="lp-from">{giftFrom ? `Com carinho, ${giftFrom}` : "Com amor, de alguém especial"} — Florescer 🌿</div>
                  </div>
                </div>
                <div className="gift-total-row">
                  <div>
                    <div className="gift-price">R$ {giftPlant.price.toFixed(2)}</div>
                    <div style={{fontSize:"0.72rem",color:"var(--txt-l)"}}>+{giftPlant.brotos+50} brotos pelo presente</div>
                  </div>
                  <button className="proceed-btn" onClick={handleGiftCheckout}>
                    Confirmar presente 🎁
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
 
      {/* LEARN PAGE */}
      {page === "learn" && (
        <div className="page">
          <div className="learn-header">
            <h1>Aprenda a cultivar</h1>
            <p>Cursos práticos criados por botanistas e jardineiros apaixonados.</p>
          </div>
          <div className="learn-tabs">
            {["Todos","Iniciante","Intermediário","Avançado"].map(f => (
              <button key={f} className={`learn-tab ${learnFilter===f?"active":""}`} onClick={() => setLearnFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="courses-grid">
            {filteredCourses.map(c => (
              <div key={c.id} className="course-card" onClick={() => setSelectedCourse(c)}>
                <div className="course-card-top">
                  <span className="course-emoji">{c.emoji}</span>
                  <div className={`course-level ${c.level==="Iniciante"?"level-init":c.level==="Intermediário"?"level-int":"level-adv"}`} style={{fontSize:"0.65rem",textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:"0.5rem"}}>
                    {c.level}
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
                <div className="course-card-bottom">
                  <div className="course-meta">
                    <span><Icon name="clock" size={13} /> {c.duration}</span>
                    <span><Icon name="learn" size={13} /> {c.lessons} aulas</span>
                  </div>
                  <button className="enroll-btn" onClick={e => { e.stopPropagation(); setSelectedCourse(c); }}>
                    Ver curso
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
 
      {/* COURSE MODAL */}
      {selectedCourse && (
        <div className="course-detail-overlay" onClick={() => setSelectedCourse(null)}>
          <div className="course-modal" onClick={e => e.stopPropagation()}>
            <div className="cm-header">
              <span className="cm-emoji">{selectedCourse.emoji}</span>
              <h2>{selectedCourse.title}</h2>
              <p>{selectedCourse.level} · {selectedCourse.duration} · {selectedCourse.lessons} aulas</p>
            </div>
            <div className="cm-body">
              <p style={{fontSize:"0.88rem",color:"var(--txt-m)",lineHeight:"1.7",marginBottom:"1.2rem"}}>{selectedCourse.desc}</p>
              <h4>O que você vai aprender</h4>
              <ul className="topic-list">
                {selectedCourse.topics.map((t,i) => <li key={i}>{t}</li>)}
              </ul>
              <div style={{background:"rgba(82,183,136,0.08)",border:"0.5px solid rgba(82,183,136,0.3)",borderRadius:"4px",padding:"0.8rem",fontSize:"0.78rem",color:"var(--g-mid)",lineHeight:"1.5"}}>
                ✨ Este curso é liberado gratuitamente ao comprar plantas compatíveis, ou pode ser resgatado com <strong>500 brotos</strong>.
              </div>
            </div>
            <div className="cm-actions">
              <button className="cm-enroll-btn" onClick={() => { showToast(`📚 Inscrição em "${selectedCourse.title}" confirmada!`); setSelectedCourse(null); }}>
                Inscrever-me
              </button>
              <button className="cm-close-btn" onClick={() => setSelectedCourse(null)}>Fechar</button>
            </div>
          </div>
        </div>
      )}
 
      {/* BROTOS PAGE */}
      {page === "brotos" && (
        <div className="page">
          <div className="brotos-header">
            <div style={{fontSize:"0.7rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(248,244,237,0.5)",marginBottom:"0.5rem"}}>Seu saldo</div>
            <h1>Seus brotos 🌿</h1>
            <div className="brotos-hero-num">{brotos}</div>
            <p>brotos acumulados — cada compra planta mais</p>
          </div>
          <div className="brotos-content">
            {/* Progress to next reward */}
            {nextReward && (
              <div className="progress-card">
                <h3>Próxima recompensa</h3>
                <div className="prog-bar-wrap">
                  <div className="prog-label">
                    <span>{brotos} brotos</span>
                    <span>{nextReward.emoji} {nextReward.brotos} brotos</span>
                  </div>
                  <div className="prog-bar">
                    <div className="prog-fill" style={{width:`${Math.min(100,(brotos/nextReward.brotos)*100).toFixed(1)}%`,background:"var(--g-soft)"}} />
                  </div>
                  <p className="prog-hint">Faltam {nextReward.brotos - brotos} brotos para: {nextReward.title}</p>
                </div>
              </div>
            )}
 
            {/* Rewards list */}
            <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"1.4rem",fontWeight:300,color:"var(--g-deep)",marginBottom:"1rem"}}>Recompensas disponíveis</h3>
            <div className="rewards-list">
              {REWARDS.map((r,i) => {
                const unlocked = brotos >= r.brotos;
                return (
                  <div key={i} className={`reward-row ${unlocked?"unlocked":""}`}>
                    <div className="reward-emoji-big">{r.emoji}</div>
                    <div className="reward-info">
                      <h4>{r.title}</h4>
                      <p>{r.desc}</p>
                    </div>
                    <div style={{textAlign:"right",flexShrink:0}}>
                      <div className="reward-pts-badge">{r.brotos}<span>brotos</span></div>
                      {unlocked ? (
                        <button className="redeem-btn" onClick={() => { setBrotos(b => b-r.brotos); setHistory(h=>[{emoji:r.emoji,text:`Resgate: ${r.title}`,pts:-r.brotos,date:"agora"},...h]); showToast(`${r.emoji} Recompensa resgatada!`); }}>
                          Resgatar
                        </button>
                      ) : (
                        <div className="locked-badge">🔒 bloqueado</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
 
            {/* History */}
            <div className="history-section">
              <h3>Histórico de brotos</h3>
              <div>
                {history.map((h,i) => (
                  <div key={i} className="history-item">
                    <div className="history-icon">{h.emoji}</div>
                    <div className="history-info">
                      <p>{h.text}</p>
                      <span>{h.date}</span>
                    </div>
                    <div className="history-pts" style={{color: h.pts < 0 ? "var(--terra)" : "var(--g-soft)"}}>
                      {h.pts > 0 ? "+" : ""}{h.pts} 🌿
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
 
      {/* CART DRAWER */}
      {cartOpen && (
        <>
          <div className="cart-overlay" onClick={() => setCartOpen(false)} />
          <div className="cart-drawer">
            <div className="cart-header">
              <h3>Seu carrinho</h3>
              <button className="cart-close" onClick={() => setCartOpen(false)}>
                <Icon name="x" size={20} />
              </button>
            </div>
            <div className="cart-items">
              {cart.length === 0 ? (
                <div className="empty-cart">
                  <span style={{fontSize:"3rem"}}>🌱</span>
                  <p>Seu carrinho está vazio.<br/>Adicione plantas para começar!</p>
                </div>
              ) : cart.map(item => (
                <div key={item.cartId} className="cart-item">
                  <div className="cart-item-emoji">{item.emoji}</div>
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>{item.isGift?"🎁 Presente personalizado":"Planta individual"}</p>
                    <p style={{color:"var(--g-soft)",fontSize:"0.7rem"}}>+{item.brotos} brotos</p>
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"0.4rem"}}>
                    <div className="cart-item-price">R$ {item.price.toFixed(2)}</div>
                    <button className="remove-item-btn" onClick={() => removeFromCart(item.cartId)}>
                      <Icon name="x" size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total-row">
                  <span>Total</span>
                  <span className="total">R$ {cartTotal.toFixed(2)}</span>
                </div>
                <div className="cart-brotos-earn">🌿 Você vai ganhar +{cartBrotos} brotos nesta compra</div>
                <button className="checkout-btn" onClick={handleCheckout}>
                  Finalizar compra
                </button>
              </div>
            )}
          </div>
        </>
      )}
 
      {/* CHECKOUT MODAL */}
      {checkoutOpen && (
        <div className="checkout-modal-overlay">
          <div className="checkout-modal">
            <div className="checkout-modal-header">
              <h2>Finalizar pedido</h2>
              <p>Revise e confirme sua compra</p>
            </div>
            <div className="checkout-modal-body">
              <div className="checkout-item-list">
                {cart.map(i => (
                  <div key={i.cartId} className="checkout-item">
                    <span>{i.emoji} {i.name}</span>
                    <span>R$ {i.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="checkout-divider">
                <span>Total</span>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>
              <div className="pay-method-section">
                <h4>Forma de pagamento</h4>
                <div className="pay-method">
                  {["pix","cartão","boleto"].map(m => (
                    <div key={m} className={`pay-opt ${payMethod===m?"active":""}`} onClick={() => setPayMethod(m)}>
                      {m==="pix"?"⚡ PIX":m==="cartão"?"💳 Cartão":"📄 Boleto"}
                    </div>
                  ))}
                </div>
              </div>
              <div className="fake-notice">
                🧪 <strong>Modo experimental</strong> — Esta é uma simulação. Nenhum valor real será cobrado. A confirmação apenas acumula seus brotos e registra o pedido.
              </div>
              <button className="confirm-pay-btn" onClick={confirmPay}>
                Confirmar pagamento (simulado)
              </button>
              <button className="cancel-pay-btn" onClick={() => { setCheckoutOpen(false); setCartOpen(true); }}>
                Voltar ao carrinho
              </button>
            </div>
          </div>
        </div>
      )}
 
      {/* SUCCESS MODAL */}
      {successOpen && (
        <div className="checkout-modal-overlay">
          <div className="success-modal">
            <span className="success-emoji">🌿</span>
            <h2>Pedido confirmado!</h2>
            <p>Sua planta já está sendo preparada com carinho. Em breve ela chegará até você pronta para começar uma nova história.</p>
            <div className="brotos-earned">
              <div className="be-num">+{lastEarned}</div>
              <p>brotos adicionados ao seu saldo</p>
            </div>
            <p style={{fontSize:"0.78rem",color:"var(--txt-l)",marginBottom:"1.2rem"}}>
              Saldo atual: <strong>{brotos} brotos</strong> {nextReward && `— só faltam ${Math.max(0,nextReward.brotos-brotos)} para a próxima recompensa!`}
            </p>
            <button className="ok-btn" onClick={() => { setSuccessOpen(false); setPage("brotos"); }}>
              Ver meus brotos 🌱
            </button>
          </div>
        </div>
      )}
 
      {/* TOAST */}
      {toast && <div className="toast">{toast}</div>}
    </>
  );
}
 