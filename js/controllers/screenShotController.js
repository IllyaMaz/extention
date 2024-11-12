const { getScreenShotByUUID, setScreenShot } = require('../repository/screenShotRepository.js')

function activateScreenShot(app) {
    app.post('/setScreenShot', async (req, res) => {    
        const data = req.body
        const result = await setScreenShot(data.uuid, data.screen, data.date)
        res.json(result)
    })
    
    app.get('/getScreenShotByUUID', async (req, res) => {
        const result = await getScreenShotByUUID(req.query.uuid)
        res.json(result)
    })
}

module.exports = { activateScreenShot }