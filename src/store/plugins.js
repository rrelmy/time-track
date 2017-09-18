import {STORAGE_KEY} from './mutations'
import createLogger from './plugins/logger'

const localStoragePlugin = store => {
    store.subscribe((mutation, { workHours }) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(workHours))
    })
}

export default process.env.NODE_ENV !== 'production'
    ? [createLogger(), localStoragePlugin]
    : [localStoragePlugin]
