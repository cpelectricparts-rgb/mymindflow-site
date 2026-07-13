/*
==========================================================================
MyMindFlow Finanças V2 - components.js (Base)
==========================================================================
*/

const Components = {

card(title, value, icon = “📊”) { return
<div class="card">         <div class="card-header">           <span class="card-icon">${icon}</span>           <span class="card-title">${title}</span>         </div>         <div class="kpi">${value}</div>       </div>;
},

insight(title, message, level = “success”) { return
<div class="card insight">         <div class="badge ${level}">${title}</div>         <p>${message}</p>       </div>;
},

badge(text, level = “success”) { return
<span class="badge ${level}">${text}</span>; },

progress(label, value) { return
<div class="progress-group">         <div class="progress-label">           <span>${label}</span>           <span>${value}%</span>         </div>         <div class="progress">           <div class="progress-fill" style="width:${value}%"></div>         </div>       </div>;
},

tableRow(item) { return
<tr>         <td>${item.data}</td>         <td>${item.categoria}</td>         <td>${item.descricao}</td>         <td>${item.valor}</td>       </tr>;
},

empty(message = “Nenhum dado encontrado.”) { return
<div class="card empty-state">         <h3>Sem informações</h3>         <p>${message}</p>       </div>;
},

loading() { return
<div class="loading">         <div class="spinner"></div>         <span>Carregando dados...</span>       </div>;
},

error(message = “Erro ao carregar os dados.”) { return
<div class="card error">         <h3>⚠ Erro</h3>         <p>${message}</p>       </div>;
}

};

window.Components = Components;
