export const STORAGE_KEY = 'timetrack'

// JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
export const state = {
    workHours: [
        {from: null, to: null, duration: null},
        {from: null, to: null, duration: null}
    ],
    count: 1
}

console.log("STATE: ", state)

export const mutations = {
    increment (state) {
        ++state.count;
    },
    saveWorkHours (state, hours) {
        console.log("SET HOURS TO: ", hours)
        state.workHours = hours
    }
}
