// import axiosInstance from '@/lib/axios'
import { isBrowser } from '.'

export const storage = {
    getAccessToken: () => {
        if (!isBrowser) return
        if (localStorage.getItem('user_session') !== null)
            return localStorage.getItem('user_session')
    },
    setAccessToken: (token: string) => {
        localStorage.setItem('user_session', token)
        // importing the module lazily
        import('@/lib/axios')
        .then(res => {
            res.default.defaults.headers.common.Authorization = `Bearer ${token}`
        });
    },
    getRefreshToken: () => {
        if (!isBrowser) return
        if (localStorage.getItem('app_refreshToken') !== null)
            return localStorage.getItem('app_refreshToken')
    },
    setRefreshToken: (token: string) => {
        localStorage.setItem('app_refreshToken', token)
    },
    clear: () => {
        if (!isBrowser) return
        localStorage.removeItem('user_session')
        localStorage.removeItem('app_refreshToken')
    }
}