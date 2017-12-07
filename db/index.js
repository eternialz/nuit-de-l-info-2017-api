const { Pool } = require('pg')
var config = require('../config')

const pool = new Pool(config.db)

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, (err, res) => {
            callback(err, res)
        })
    },
    getClient: (callback) => {
        pool.connect((err, client, done) => {
            callback(err, client, done)
        })
    }
}
