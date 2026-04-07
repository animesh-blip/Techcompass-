// Simple in-memory token store for admin sessions
// Tokens reset on server restart, which is acceptable for this use case
const globalTokenStore = new Set<string>();
export default globalTokenStore;
