/*
==========================================================================
MyMindFlow Finanças V2 - config.js (Base)
==========================================================================
*/

const CONFIG = {

APP: { NAME: “MyMindFlow Finanças V2”, VERSION: “2.0.0”, ENVIRONMENT:
“development” },

API: { BASE_URL: “https://SEU_N8N/webhook/financas”, TIMEOUT: 15000,
AUTO_REFRESH: true, REFRESH_INTERVAL: 60000 },

DASHBOARD: { CURRENCY: “BRL”, LOCALE: “pt-BR”, THEME: “dark”,
DEFAULT_PERIOD: “month” },

GOALS: { EMERGENCY_RESERVE_MONTHS: 6, INVESTMENT_RATE: 20,
MAX_EXPENSE_RATE: 80 },

CHARTS: { ANIMATION: true, LEGEND: true, GRID: true },

COLORS: { PRIMARY: “#3b82f6”, SUCCESS: “#22c55e”, WARNING: “#f59e0b”,
DANGER: “#ef4444”, BACKGROUND: “#0b1220”, SURFACE: “#131c2f” }

};

window.CONFIG = CONFIG;
