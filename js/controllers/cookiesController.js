const { getCookiesByUUID, setCookies } = require('../repository/cookiesRepository.js')

function activateCookies(app) {
    app.get('/getCookiesByUUID', async (req, res) => {
        const cookies = await getCookiesByUUID(req.query.uuid)
        res.json(cookies)
    })

    app.post('/setCookies', async(req, res) => {
        const data = req.body
        await setCookies(data.uuid, data.cookies)
    })
}

module.exports = { activateCookies }