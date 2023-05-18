import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', {
    state: () => {
        return { isLogin: false, user: { email: '', permissions: [] } }
    },
    getters: {
        isLoginn() {
            return this.isLogin
        }
    },
    actions: {
        logout() {
            this.isLogin = false
            this.user = { email: '', permissions: [] }
        },
        login(user) {
            this.isLogin = true
            this.user = user
        },
        hasPermissions(access) {
            return this.user.permissions.filter(p=>p==access).length > 0 ? true: false
        }
    },
})