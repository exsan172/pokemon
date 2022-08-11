export const setStorage = (name, value) => {
    return localStorage.setItem(name, value)
}

export const getStorage = (name) => {
    return localStorage.getItem(name)
}

export const deleteStorage = (name) => {
    return localStorage.removeItem(name)
}

export const clearStorage = () => {
    return localStorage.clear()
}