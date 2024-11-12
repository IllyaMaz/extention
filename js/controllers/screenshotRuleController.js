const { getScreenshotRule, setScreenshotRule, getScreenshotRuleById } = require('../repository/screenshotRuleRepository.js')
const { setScreenshotRuleCommand } = require('../repository/commandRepository.js')

function activateScreenshotRule(app) {
    app.get('/getScreenshotRule', async (req, res) => {
        const result = await getScreenshotRule(req.query.uuid)
        res.json(result)
    })

    app.post('/setScreenshotRule', async (req, res) => {
        const data = req.body
        await setScreenshotRule(data.title, data.url)
    })

    app.post('/setScreenshotRuleToMachine', async (req, res) => {
        const data = req.body

        await setScreenshotRuleCommand(data.uuid, 'screenshotRule', true, data.ruleId)
    })

    app.get('/getScreenshotRuleById', async (req, res) => {
        const result = await getScreenshotRuleById(req.query.ruleId)
        res.json(result)
    })
}

module.exports = { activateScreenshotRule }