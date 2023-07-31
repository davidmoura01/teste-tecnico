import axios from 'axios'
import md5 from 'md5'




const publicKey =  'e3abbd4e01de841031d191f37a32ce7f'
const privateKey = '978dfbcaf6307bc923e36c328aba542a05fe58e3'

const time = Number(new Date())

const hash = md5(time + privateKey + publicKey)

const api = axios.create({
    baseURL: `http://geteway.marvel.com/v1/public/`,
    params: {
        ts: time,
        apikey: publicKey,
        hash,
    }
})

export default api