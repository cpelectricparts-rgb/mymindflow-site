/*
==========================================================================
MyMindFlow Finanças V2 - charts.js (Base)
==========================================================================
*/

const Charts = {

instances: {},

destroy(id) { if (this.instances[id] && typeof
this.instances[id].destroy === “function”) {
this.instances[id].destroy(); } },

createLine(id, labels = [], values = []) { this.destroy(id);

    const canvas = document.getElementById(id);
    if (!canvas) return;

    console.log("Criando gráfico de linha:", id, labels, values);

    // Exemplo futuro:
    // this.instances[id] = new Chart(canvas,{
    //   type:'line',
    //   data:{ labels, datasets:[{ data: values }] }
    // });

},

createBar(id, labels = [], values = []) { this.destroy(id);

    const canvas = document.getElementById(id);
    if (!canvas) return;

    console.log("Criando gráfico de barras:", id, labels, values);

},

createDonut(id, labels = [], values = []) { this.destroy(id);

    const canvas = document.getElementById(id);
    if (!canvas) return;

    console.log("Criando gráfico donut:", id, labels, values);

},

renderCashFlow(data = []) { const labels = data.map(i => i.mes); const
values = data.map(i => i.saldo);

    this.createLine("cashFlowChart", labels, values);

},

renderIncomeVsExpense(data = []) { const labels = data.map(i => i.mes);
const values = data.map(i => i.receitas - i.despesas);

    this.createBar("incomeExpenseChart", labels, values);

},

renderCategories(data = []) { const labels = data.map(i => i.nome);
const values = data.map(i => i.valor);

    this.createDonut("categoryChart", labels, values);

},

refresh(dataset = {}) { this.renderCashFlow(dataset.cashflow || []);
this.renderIncomeVsExpense(dataset.monthly || []);
this.renderCategories(dataset.categories || []); }

};

window.Charts = Charts;
