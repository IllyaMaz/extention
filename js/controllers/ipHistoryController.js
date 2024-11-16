const { setIpHistory, getHistoryIpByUUID } = require('../repository/ipHistoryRepository.js')

function activateIpHistory(app) {
    app.post('/setIpHistory', async (req, res) => {
        const body = req.body
        setIpHistory(body.uuid, body.ip4, body.ip6)
    })

    app.get('/getIpHistory', async (req, res) => {
        const result = await getHistoryIpByUUID(req.query.uuid)
        res.json(result)
    })
}

module.exports = { activateIpHistory }