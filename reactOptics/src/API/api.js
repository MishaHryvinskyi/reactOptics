const baseUrl = import.meta.env.VITE_BASE_URL;
const limitItem = 20;

export const getApi = (page = 1) => fetch(`${baseUrl}?page=${page}&limit=${limitItem}`);