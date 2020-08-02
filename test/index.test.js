'use strict'

const chai = require('chai')
const app = require('../app')

describe('Debug library - Notice', () => {
    it('Load library is OK?', done => {
        chai.assert.isOk(!!app.debug.here)
        chai.assert.isOk(!!app.debug('test-it'))
        done()
    })
})
