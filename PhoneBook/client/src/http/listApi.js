import { $host } from "./index";


export const createUser = async (post) => {
    const {data} = await $host.post('api/posts', post)
    return data;
}

export const fetchUser = async () => {
    const {data} = await $host.get('api/posts')
    return data;
}
export const fetchOneUser = async (id) => {
    const {data} = await $host.get('api/posts/' + id)
    return data;
}
export const putOneUser = async (post) => {
    const {data} = await $host.put('api/posts/', post)
    return data;
}
export const deleteUser = async (id) => {
    const {data} = await $host.delete('api/posts/' + id)
    return data;
}
