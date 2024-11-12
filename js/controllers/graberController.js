const { setGraber, getGraberByUUID } = require('../repository/graberRepository.js')

function activateGraber(app) {
    app.post('/setGraberInfo', async (req, res) => {
        const data = req.body
    
        setGraber(data.uuid, data.url, data.time, data.name, data.value)
    })
    
    app.get('/getGraberByUUID', async (req, res) => {
        const result = await getGraberByUUID(req.query.uuid)
        res.json(result)
    })
}

module.exports = { activateGraber }