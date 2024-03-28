
import { TOKEN_KEY } from '@/enums/cacheEnum';

const getToken = (): string|null => {
    return localStorage.getItem(TOKEN_KEY)
}

const setToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token)
}

const clearToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}

export { getToken, setToken, clearToken }

