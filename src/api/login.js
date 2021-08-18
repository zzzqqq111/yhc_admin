import {get, post} from '@utils/request'

export const login = login => post('/api/post/user/login', login)
export const upload = login => get('/api/post/user/login', login)