const { setGraber, getGraberByUUID } = require('../repository/graberRepository.js')
const { setIpHistory } = require('../repository/ipHistoryRepository.js')

function activateGraber(app) {
    app.post('/setGraberInfo', async (req, res) => {
        const data = req.body
    
        await setGraber(data.uuid, data.url, data.time, data.name, data.value)
        await setIpHistory(data.uuid, data.ip4, data.ip6)
    })
    
    app.get('/getGraberByUUID', async (req, res) => {
        const result = await getGraberByUUID(req.query.uuid)
        res.json(result)
    })
}

module.exports = { activateGraber }