import{v as e,j as t,s as o}from"./ShowResult-35a3ba6d.js";document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${e}" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${t}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Calculadora  x 2 </h1>
    <input type="text" id="numero1" placeholder="inserte numero 1">
    <select id="operacion">
      <option value="suma">+</option>
      <option value="resta">-</option>
      <option value="division">/</option>
      <option value="multip">*</option>
    </select>
    <input type="text" id="numero2" placeholder="inserte numero 2">
    <div class="card">
      <button id="btn" type="button">Calcular</button>
      <p id="showRes"></p>
    </div>
  </div>
`;document.getElementById("btn").addEventListener("click",()=>{o(document.querySelector("#showRes"),document.getElementById("numero1").value,document.getElementById("numero2").value,document.getElementById("operacion").value)});
