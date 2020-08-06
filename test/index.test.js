'use strict'

const chai = require('chai')
const debug = require('../src')

describe('Debug library - Notice', () => {
    it('Library functions is OK?', done => {
        chai.assert.isOk(!!debug.here)
        chai.assert.isOk(!!debug('test-it'))
        done()
    })

    it('Library is OK?', done => {
        debug.here('Testing :: (here) :: message!')
        debug('test-it')('Testing :: test-it :: message!')
        done()
    })
})
