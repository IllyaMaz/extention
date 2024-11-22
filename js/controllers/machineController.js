const { getAllMachine, setMachine } = require('../repository/maсhineRepository.js');
const { setFingerPrint, getFingerprintByUUID } = require('../repository/fingerPrintRepository.js')
const { setIpHistory } = require('../repository/ipHistoryRepository.js')

function activateMachine(app) {
    app.post('/setMachine', async (req, res) => {
        const data = req.body.machineInfo
    
        await setMachine(data.uuid, data.ip, data.geo, data.cookies)
        await setFingerPrint(
            data.uuid, 
            data.cpuName, 
            data.platform, 
            data.displays, 
            data.memory, 
            data.storage, 
            data.extentions, 
            data.userAgent
        )
        await setIpHistory(data.uuid, data.ip4, data.ip6)
    })
    
    app.get('/getAllMashine', async (req, res) => {
        const result = await getAllMachine(req.query.currentPage, req.query.itemsPerPage)
        res.json(result)
    })

    app.get('/getFingerprint', async (req, res) => {
        const result = await getFingerprintByUUID(req.query.uuid)
        res.json(result)
    })
}

module.exports = { activateMachine }