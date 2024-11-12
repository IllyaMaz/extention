const { setCommand, getCommandByUUID } = require('../repository/commandRepository.js')

function activateCommand(app) {
    
    app.post('/setCommand', async (req, res) => {
        const data = req.body
        await setCommand(data.uuid, data.name, true)
    })

    app.get('/getCommand', async (req, res) => {
        const commands = await getCommandByUUID(req.query.uuid) 
        res.json(commands)
    })


}

module.exports = { activateCommand }