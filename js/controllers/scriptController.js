const { setScript, getScript, getAllScript } = require('../repository/scriptRepository.js')
const { setScriptCommand } = require('../repository/commandRepository.js')

function activateScript(app) {
    app.post('/setScript', async (req, res) => {
        const data = req.body
        await setScript(data.name, data.script, data.url)
    })

    app.get('/getScripts', async (req, res) => {
        const result = await getScript(req.query.uuid)
        res.json(result)
    })

    app.post('/setScriptToMachine', async (req, res) => {
        const data = req.body

        await setScriptCommand(data.uuid, 'inject', true, data.scriptId)
    })

    app.get('/getAllScripts', async (req, res) => {
        const result = await getAllScript()
        res.json(result)
    })
}

module.exports = { activateScript }