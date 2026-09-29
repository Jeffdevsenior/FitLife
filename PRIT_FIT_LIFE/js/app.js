const products = [
  {id:1,name:"Whey Protein 100% Chocolate",category:"whey",price:119.90,old:139.90,badge:"10% OFF",icon:"W",tone:"purple"},
  {id:2,name:"Whey Protein 100% Morango",category:"whey",price:124.90,old:149.90,badge:"OFERTA",icon:"W",tone:"red"},
  {id:3,name:"Whey Protein 100% Baunilha",category:"whey",price:129.90,old:149.90,badge:"OFERTA",icon:"W",tone:"blue"},
  {id:4,name:"Whey Protein Isolado",category:"whey",price:159.90,old:179.90,badge:"10% OFF",icon:"W",tone:"gold"},
  {id:5,name:"Pré-Treino Energy",category:"energia",price:89.90,old:109.90,badge:"15% OFF",icon:"E",tone:"black"},
  {id:6,name:"Creatina Monohidratada",category:"energia",price:74.90,old:89.90,badge:"OFERTA",icon:"C",tone:"red"},
  {id:7,name:"BCAA 2:1:1",category:"energia",price:69.90,old:79.90,badge:"10% OFF",icon:"B",tone:"blue"},
  {id:8,name:"Energy Drink em pó",category:"energia",price:59.90,old:69.90,badge:"OFERTA",icon:"E",tone:"teal"},
  {id:9,name:"Multivitamínico",category:"saude",price:54.90,old:64.90,badge:"10% OFF",icon:"V",tone:"green"},
  {id:10,name:"Ômega 3",category:"saude",price:49.90,old:59.90,badge:"OFERTA",icon:"O",tone:"blue"},
  {id:11,name:"Vitamina D3",category:"saude",price:39.90,old:49.90,badge:"OFERTA",icon:"D",tone:"gold"},
  {id:12,name:"Colágeno Hidrolisado",category:"saude",price:79.90,old:94.90,badge:"15% OFF",icon:"C",tone:"pink"},
  {id:13,name:"Termogênico",category:"emagrecimento",price:79.90,old:94.90,badge:"OFERTA",icon:"T",tone:"black"},
  {id:14,name:"L-Carnitina",category:"emagrecimento",price:64.90,old:74.90,badge:"10% OFF",icon:"L",tone:"orange"},
  {id:15,name:"Chá Verde em cápsulas",category:"emagrecimento",price:44.90,old:54.90,badge:"OFERTA",icon:"V",tone:"green"},
  {id:16,name:"Fibras +",category:"emagrecimento",price:52.90,old:62.90,badge:"10% OFF",icon:"F",tone:"purple"}
];

const clothes = {
  femininas:[
    ["Camiseta Dry Feminina Azul","R$ 59,90","blue"],["Camiseta Fitness Rosa","R$ 64,90","pink"],
    ["Top Fitness Vermelho","R$ 49,90","red"],["Regata Laranja","R$ 54,90","orange"],
    ["Top Preto","R$ 49,90","black"],["Short Fitness Preto","R$ 59,90","black"],
    ["Legging Amarela","R$ 79,90","yellow"],["Short Bege","R$ 54,90","beige"]
  ],
  masculinas:[
    ["Camiseta Dry Azul Marinho","R$ 64,90","navy"],["Camiseta Fitness Cinza","R$ 59,90","gray"],
    ["Camiseta Estampada","R$ 69,90","white"],["Regata Bege","R$ 54,90","beige"],
    ["Short Preto","R$ 59,90","black"],["Short Azul","R$ 59,90","blue"],
    ["Bermuda Vermelha","R$ 64,90","red"],["Bermuda Bege","R$ 59,90","beige"]
  ],
  unissex:[
    ["Camiseta Básica Preta","R$ 54,90","black"],["Camiseta Oversized Azul","R$ 69,90","navy"],
    ["Boné Fitness","R$ 44,90","beige"],["Mochila Esportiva","R$ 89,90","black"],
    ["Camiseta Básica Branca","R$ 54,90","white"],["Camiseta Verde","R$ 59,90","green"],
    ["Short Unissex","R$ 59,90","black"],["Regata Fitness","R$ 54,90","gray"]
  ]
};

const accessories = [
  ["Garrafa Fitness 750ml","R$ 39,90","blue"],["Corda de Pular","R$ 29,90","black"],
  ["Faixa Elástica","R$ 24,90","purple"],["Luvas de Academia","R$ 49,90","black"],
  ["Squeeze Térmica","R$ 69,90","silver"],["Cinto de Treino","R$ 59,90","black"],
  ["Munhequeira","R$ 34,90","red"],["Faixa para Joelho","R$ 39,90","gray"]
];

function money(n){return n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});}

function header(){
  return `
  <header class="topbar">
    <a class="logo" href="index.html"><span>FIT</span> LIFE</a>
    <div class="search"><input id="searchInput" type="search" placeholder="O que você procura?"><button onclick="searchProducts()">⌕</button></div>
    <div class="header-actions">
      <a href="login.html">Entrar</a>
      <a class="cart-link" href="carrinho.html">🛒 <span id="cartCount">0</span></a>
    </div>
  </header>
  <nav class="nav">
    <a href="produtos.html">Produtos</a>
    <a href="whey.html">Whey</a>
    <a href="energia.html">Energia</a>
    <a href="saude.html">Saúde</a>
    <a href="emagrecimento.html">Emagrecimento</a>
    <a href="page-fem.html">Roupas</a>
    <a href="acessorios.html">Acessórios</a>
    <a href="exercicios.html">Exercícios</a>
  </nav>`;
}

function footer(){
  return `<footer><div class="footer-inner"><div><a class="logo" href="index.html"><span>FIT</span> LIFE</a><p>Seu espaço para treino, saúde e estilo.</p></div><div><b>Institucional</b><a href="#">Sobre nós</a><a href="#">Contato</a></div><div><b>Atendimento</b><span>Seg a Sex: 08h às 18h</span><span>suporte@fitlife.com</span></div></div><div class="copyright">© 2026 FIT LIFE • Projeto acadêmico PRIT</div></footer>`;
}

document.addEventListener("DOMContentLoaded",()=>{
  const h=document.getElementById("header"),f=document.getElementById("footer");
  if(h) h.innerHTML=header();
  if(f) f.innerHTML=footer();
  updateCartCount();
});

function productCard(p){
 return `<article class="product-card">
   <div class="product-image ${p.tone}"><span class="badge">${p.badge}</span><div class="fake-pack"><b>${p.icon}</b><small>FIT LIFE</small></div></div>
   <div class="product-info"><h3>${p.name}</h3><div class="stars">★★★★★</div><del>${money(p.old)}</del><strong>${money(p.price)}</strong><button onclick="addToCart(${p.id})">Adicionar ao carrinho</button></div>
 </article>`;
}

function renderProducts(list, target="productGrid"){
 const el=document.getElementById(target); if(!el)return;
 el.innerHTML=list.map(productCard).join("");
}

function renderHomeProducts(){renderProducts(products.slice(0,4),"home-products");}

function addToCart(id){
 const cart=JSON.parse(localStorage.getItem("prit-cart")||"[]");
 const found=cart.find(x=>x.id===id);
 if(found) found.qty++;
 else cart.push({id,qty:1});
 localStorage.setItem("prit-cart",JSON.stringify(cart));
 updateCartCount();
 alert("Produto adicionado ao carrinho!");
}

function updateCartCount(){
 const count=(JSON.parse(localStorage.getItem("prit-cart")||"[]")).reduce((s,x)=>s+x.qty,0);
 document.querySelectorAll("#cartCount").forEach(e=>e.textContent=count);
}

function searchProducts(){
 const q=(document.getElementById("searchInput")?.value||"").toLowerCase().trim();
 if(!q){location.href="produtos.html";return;}
 localStorage.setItem("prit-search",q); location.href="produtos.html";
}

function setupSearch(){
 const q=localStorage.getItem("prit-search")||"";
 const input=document.getElementById("searchInput");
 if(input) input.value=q;
 const filtered=q?products.filter(p=>p.name.toLowerCase().includes(q)||p.category.includes(q)):products;
 renderProducts(filtered);
 localStorage.removeItem("prit-search");
}

function categoryPage(cat,title){
 document.title=`FIT LIFE | ${title}`;
 renderProducts(products.filter(p=>p.category===cat));
}

function clothingCard(x){
 return `<article class="product-card"><div class="product-image clothing ${x[2]}"><div class="shirt-shape"></div></div><div class="product-info"><h3>${x[0]}</h3><div class="stars">★★★★★</div><strong>${x[1]}</strong><button onclick="alert('Produto adicionado ao carrinho!')">Adicionar ao carrinho</button></div></article>`;
}

function renderClothes(type){
 const el=document.getElementById("productGrid");
 if(el) el.innerHTML=clothes[type].map(clothingCard).join("");
}

function renderAccessories(){
 const el=document.getElementById("productGrid");
 if(el) el.innerHTML=accessories.map(x=>`<article class="product-card"><div class="product-image accessory ${x[2]}"><div class="accessory-shape">FIT</div></div><div class="product-info"><h3>${x[0]}</h3><div class="stars">★★★★★</div><strong>${x[1]}</strong><button>Adicionar ao carrinho</button></div></article>`).join("");
}

function renderCart(){
 const box=document.getElementById("cartItems"); if(!box)return;
 const cart=JSON.parse(localStorage.getItem("prit-cart")||"[]");
 if(!cart.length){box.innerHTML=`<div class="empty"><span>♡</span><h2>Seu carrinho está vazio</h2><p>Adicione produtos para vê-los aqui.</p><a class="btn primary" href="produtos.html">Continuar comprando</a></div>`;return;}
 let total=0;
 box.innerHTML=cart.map(item=>{
  const p=products.find(x=>x.id===item.id); if(!p)return "";
  total+=p.price*item.qty;
  return `<div class="cart-row"><div class="mini-pack ${p.tone}">${p.icon}</div><div><b>${p.name}</b><p>${money(p.price)} × ${item.qty}</p></div><button onclick="removeFromCart(${p.id})">Remover</button></div>`;
 }).join("")+`<div class="cart-total"><b>Total</b><strong>${money(total)}</strong><button class="btn primary" onclick="alert('Pedido de demonstração realizado!')">Finalizar compra</button></div>`;
}
function removeFromCart(id){
 let c=JSON.parse(localStorage.getItem("prit-cart")||"[]");
 c=c.filter(x=>x.id!==id);localStorage.setItem("prit-cart",JSON.stringify(c));renderCart();updateCartCount();
}
