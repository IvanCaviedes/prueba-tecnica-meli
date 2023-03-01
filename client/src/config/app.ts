export default {
    searchEndPoint: import.meta.env.DEV ? 'http://localhost:4000/api/items?search=' : '/api/items?search=',
    deteailItemEnpoint: import.meta.env.DEV ? 'http://localhost:4000/api/items/' : '/api/items/',
}