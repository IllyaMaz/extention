const Cookies = require('../models/cookies.js')

async function getCookiesByUUID(uuid) {
    try {
        const result = await Cookies.find({uuid: uuid})
        return result
    } catch (error) {
        console.log('Ошибка получения куков', error);
    }
}

async function setCookies(uuid, cookies) {
    const newCookies = new Cookies({
        uuid: uuid,
        cookies: cookies
    });

    try {
        const existingCookies = await Cookies.findOne({ uuid: uuid });
        console.log(existingCookies);

        if (existingCookies) {
            await Cookies.deleteOne({ uuid: uuid });
            console.log('Удаляем старые куки');
        }

        await newCookies.save();
        console.log('Куки успешно сохранены');
        
    } catch (error) {
        console.log('Ошибка сохранения куков', error);
    }
}


module.exports = { getCookiesByUUID, setCookies }