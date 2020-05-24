import {doAll} from './doAll'
const scripts = [
    "npm run format:check",
    "npm run lint:check"
]
doAll(scripts, () => {
    console.log('good to go')
}, () => {
    console.log('Refusing to commit')
    console.log('Fix the above errors and try again!')
})