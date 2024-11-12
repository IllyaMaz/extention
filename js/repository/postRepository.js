const Post = require('../models/post.js')

async function setPost(uuid, body, headers, time, url) {
    // const post = new Post({
    //     uuid: uuid,
    //     body: body,
    //     headers: headers,
    //     time: time,
    //     url: url
    // })

    // try {
    //     // await post.save()
    //     console.log('Пост запрос успешно сохранен');
    // } catch(error) {
    //     console.log('Ошибка сохранения пост запроса');
    // }
}

async function getPostByUUID(uuid) {
    try {
        const result = await Post.find({uuid: uuid}).select('-_id uuid body headers time url')
        return result
    } catch (error) {
        console.log('Ошибка получения пост запросов', error);
    }
}

module.exports = { setPost, getPostByUUID }