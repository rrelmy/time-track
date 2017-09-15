export const STORAGE_KEY = 'timetrack'

export const state = {
    workHours: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

export const mutations = {
    saveWorkHours (hours) {
        state.workHours = hours
    }
}
