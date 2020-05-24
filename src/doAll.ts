import {pc} from './pre-commit'

export const doAll = (fns: string[], done: Function, fail: Function, errors = false) => {
    const fn = fns.shift()
    pc.exec(fn as string, (err: Error, out: string) => {
        if(err){
            errors = true
            console.log(err.message)
            if(fns.length)
                doAll(fns,done,fail,errors)
            else{
                if(errors){
                    fail()
                } else {
                    done()
                }
            }
        }
    })
}