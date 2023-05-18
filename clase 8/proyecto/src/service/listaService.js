import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://645aeb4e65bd868e9326bfdd.mockapi.io/api/v1',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async cargarLista() {
        try {
            const response = await apiClient.get("/lista")
            return response.data
        } catch( error ) {
            throw "Error de conexion"
        }
    },
    async agregarElemento(elemento) {
        try {
            await apiClient.post("/lista",elemento)
        } catch( error ) {
            throw "Error de conexion"
        }
    },
    async eliminarElemento(id) {
        try {
            await apiClient.delete("/lista/" + id)
        } catch( error ) {
            throw "Error de conexion"
        }
    },
    async modificarElemento(id,elemento) {
        try {
            await apiClient.put(`/lista/${id}`, elemento)
        } catch( error ) {
            throw "Error de conexion"
        }
    }

}