export const STORAGE_KEY = 'timetrack'

// JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
export const state = {
    workHours: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [
        {from: null, to: null, duration: null},
        {from: null, to: null, duration: null}
    ]
}

export const mutations = {
    saveWorkHours (state, hours) {
        state.workHours = hours
    }
}
