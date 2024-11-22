function activateInfo(app) {
    app.post('/info', async (req, res) => {
        console.log(req.body)
    })

}

module.exports = { activateInfo }