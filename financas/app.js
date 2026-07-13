/*
==========================================================================
MyMindFlow Finanças V2 - app.js (Base)
==========================================================================
*/

const App = { state: { data: { patrimonio: 0, receitas: 0, despesas: 0,
saldo: 0, movimentacoes: [] } },

async init() { console.log(“MyMindFlow Finanças V2 iniciado”);
this.bindEvents(); await this.loadData(); this.render(); },

bindEvents() { const btn = document.querySelector(“button”); if (btn) {
btn.addEventListener(“click”, () => this.refresh()); } },

async loadData() { // Futuramente substituir pela URL do n8n // const
res = await fetch(CONFIG.API_URL); // this.state.data = await
res.json();

    this.state.data = {
      patrimonio: 125000,
      receitas: 15800,
      despesas: 9350,
      saldo: 6450,
      movimentacoes: [
        {
          data: "13/07/2026",
          categoria: "Salário",
          descricao: "Recebimento",
          valor: 15000
        },
        {
          data: "12/07/2026",
          categoria: "Mercado",
          descricao: "Compras",
          valor: -420
        }
      ]
    };

},

refresh() { this.loadData().then(() => this.render()); },

formatCurrency(value) { return value.toLocaleString(“pt-BR”, { style:
“currency”, currency: “BRL” }); },

renderCards() { const values = document.querySelectorAll(“.kpi”); if
(values.length < 4) return;

    values[0].textContent = this.formatCurrency(this.state.data.patrimonio);
    values[1].textContent = this.formatCurrency(this.state.data.receitas);
    values[2].textContent = this.formatCurrency(this.state.data.despesas);
    values[3].textContent = this.formatCurrency(this.state.data.saldo);

},

renderTable() { const tbody = document.querySelector(“tbody”); if
(!tbody) return;

    tbody.innerHTML = "";

    this.state.data.movimentacoes.forEach(item => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${item.data}</td>
        <td>${item.categoria}</td>
        <td>${item.descricao}</td>
        <td>${this.formatCurrency(item.valor)}</td>
      `;
      tbody.appendChild(tr);
    });

},

renderCharts() { console.log(“Renderizar gráficos (Chart.js/ApexCharts
futuramente)”); },

renderInsights() { console.log(“Renderizar insights financeiros”); },

render() { this.renderCards(); this.renderTable(); this.renderCharts();
this.renderInsights(); } };

document.addEventListener(“DOMContentLoaded”, () => { App.init(); });
