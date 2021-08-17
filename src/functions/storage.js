const getFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const saveToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const clearStorage = (key) => {
    localStorage.clear(key);
}

export {
    getFromStorage,
    saveToStorage,
    clearStorage
};
