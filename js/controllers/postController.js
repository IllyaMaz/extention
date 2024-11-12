const { setPost, getPostByUUID } = require('../repository/postRepository.js')

function activatePost(app) {
    
    app.post('/setPost', async (req, res) => { 
             
        const data = req.body
        setPost(data.uuid, data.body, data.headers, data.time, data.url)
    })

    app.get('/getPosts', async (req, res) => {
        const result = await getPostByUUID(req.query.uuid)
        
        
        res.json(result)
    })

}

module.exports = { activatePost }