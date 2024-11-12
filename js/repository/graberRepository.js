const Graber = require('../models/graber.js')

async function setGraber(uuid, url, time, name, value) {
    const graber = new Graber({
        uuid: uuid,
        url: url,
        time: time,
        name: name,
        value: value
    })

    try {
        await graber.save()
        console.log('Грабер успешно сохранен')
    } catch(error) {
        console.log('Ошибка при сохранении грабера')
    } 
}

async function getGraberByUUID(uuid) {
    try {
        const result = await Graber.find({uuid: uuid}).select('-_id name url time value')
        return result
    } catch(error) {
        console.log('Ошибка получения грабера')
    }
}

module.exports = { setGraber, getGraberByUUID }