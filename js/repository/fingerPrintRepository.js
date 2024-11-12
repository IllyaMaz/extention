const res = require('express/lib/response.js');
const FingerPrint = require('../models/fingerPrint.js')

async function setFingerPrint(uuid, cpuName, platform, displays, memory, storage, extentions, userAgent) {
    const fingerPrint = new FingerPrint({
        uuid: uuid,
        cpuName: cpuName,
        platform: platform,
        displays: displays,
        memory: memory,
        storage: storage,
        extentions: extentions,
        userAgent: userAgent
    });

    try {
        await fingerPrint.save()
        console.log('Фингерпринт успешно сохранен.');
    } catch(error) {
        console.log('Ошибка при сохранении фингерпринта: ', error);
    }
}

async function getFingerprintByUUID(uuid) {
    try {
        const result = await FingerPrint.find({uuid: uuid}).select('-_id cpuName platform  displays storage memory extentions userAgent')
        return result
    } catch(error) {
        console.log();
    }
}

module.exports = { setFingerPrint, getFingerprintByUUID }