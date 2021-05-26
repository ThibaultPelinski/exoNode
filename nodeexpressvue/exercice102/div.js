//Déclaration 
const chai = require('chai')
const assert = chai.assert
const should = chai.should()

//Fonction d'erreur personnalisé dans ce cas Division par 0
class DivisionByZeroError extends Error {
    constructor(...args) {
        super(...args)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, DivisionByZeroError)
        }
        this.name = "Division by zero error"
    }
}

//Fonction division
const div = (a, b) => {
    if (b == 0) {
        throw new DivisionByZeroError("Cant divide by 0")
    }
    return a / b
}

//Passage à la moulinette...
describe('Unit tests of function div()', () => {
    describe('Main unit tests', () => {
        //Dans le cas d'une division classique
        it('should return 1 when computing: 5/5 ', function () {
            assert.ok(div(4, 4), 1)
        })
        
        //Dans le cas de division par 0
        it('divide by 0', () => {
            (() => {
                div(4, 0)
            }).should.throw(DivisionByZeroError, /Cant divide by 0/);
        })
    })
})