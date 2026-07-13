/*
==========================================================================
MyMindFlow Finanças V2 - api.js (Base)
==========================================================================
*/

const API = {

CONFIG: { BASE_URL: “https://SEU_N8N/webhook/financas”, TIMEOUT: 15000
},

async request(endpoint = ““, options = {}) { const controller = new
AbortController(); const timer = setTimeout(() => controller.abort(),
this.CONFIG.TIMEOUT);

    try {
      const response = await fetch(this.CONFIG.BASE_URL + endpoint, {
        ...options,
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
          ...(options.headers || {})
        }
      });

      clearTimeout(timer);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return await response.json();

    } catch (err) {
      clearTimeout(timer);
      console.error("API:", err);
      throw err;
    }

},

async getDashboard() { return this.request(“/dashboard”); },

async getTransactions() { return this.request(“/transactions”); },

async getInvestments() { return this.request(“/investments”); },

async getCategories() { return this.request(“/categories”); },

async refreshAll() { const [ dashboard, transactions, investments,
categories ] = await Promise.all([ this.getDashboard().catch(() =>
null), this.getTransactions().catch(() => []),
this.getInvestments().catch(() => []), this.getCategories().catch(() =>
[]) ]);

    return {
      dashboard,
      transactions,
      investments,
      categories
    };

}

};

window.API = API;
