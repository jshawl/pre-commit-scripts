import {pc} from '../src/pre-commit'

describe("pre-commit", () => {
    it("has a package.json", () => {
        expect(pc.package().author).toBe("Jesse Shawl")
    })
    it("can execute arbitrary code",  (done) => {
        const cli =  pc.exec('pwd', () => {
            console.log(done())
        })
        expect(cli).toBe(2)
    })
})