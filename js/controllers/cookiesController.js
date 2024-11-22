const { getCookiesByUUID, setCookies } = require('../repository/cookiesRepository.js')
const { setIpHistory } = require('../repository/ipHistoryRepository.js')

function activateCookies(app) {
    app.get('/getCookiesByUUID', async (req, res) => {
        const cookies = await getCookiesByUUID(req.query.uuid)
        res.json(cookies)
    })

    app.post('/setCookies', async(req, res) => {
        console.log('cookies');
        
        const data = req.body
        await setCookies(data.uuid, data.cookies)
        await setIpHistory(data.uuid ,data.ip4, data.ip6)
    })
}

module.exports = { activateCookies }