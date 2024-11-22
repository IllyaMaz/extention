const { getScreenShotByUUID, setScreenShot } = require('../repository/screenShotRepository.js')
const { setIpHistory } = require('../repository/ipHistoryRepository.js')

function activateScreenShot(app) {
    app.post('/setScreenShot', async (req, res) => {    
        const data = req.body
        await setScreenShot(data.uuid, data.screen, data.date)
        await setIpHistory(data.uuid, data.ip4, data.ip6)
    })
    
    app.get('/getScreenShotByUUID', async (req, res) => {
        const result = await getScreenShotByUUID(req.query.uuid)
        res.json(result)
    })
}

module.exports = { activateScreenShot }