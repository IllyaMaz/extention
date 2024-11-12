const ScreenShot = require('../models/screenShot.js')

async function getScreenShotByUUID(uuid) {
    try {
        const result = await ScreenShot.find({uuid: uuid}).select('-_id uuid screenShot date');
        return result;
    } catch (error) {
        console.error('Ошибка получения скриншотов:', error);
    }
}

async function setScreenShot(uuid, screenShotData, date) {
    const screenShot = new ScreenShot({
        uuid: uuid,
        screenShot: screenShotData,
        date: date
    });

    try {
        const result = await screenShot.save();
        return result
        console.log('Скриншот успешно сохранен.');
    } catch (error) {
        console.error('Ошибка при сохранении скриншота:', error);
    }
}

module.exports = { getScreenShotByUUID, setScreenShot }