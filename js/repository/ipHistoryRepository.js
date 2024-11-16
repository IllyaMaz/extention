const IpHistory = require('../models/ipHistory.js')

async function setIpHistory(uuid, ip4, ip6) {
    const existingHistory = await IpHistory.find({ uuid: uuid })
    
    const isExisting = existingHistory.some(
        (element) => element.ip4 === ip4 && element.ip6 === ip6
    );

    if (isExisting) {
        console.log('Запись уже существует');
        return;
    }

    const ipHistory = new IpHistory({
        uuid: uuid,
        ip4: ip4,
        ip6: ip6,
    });

    try {
        if (ipHistory) {
            await ipHistory.save()
            console.log('История успешно сохранена');
        }
        
    } catch (error) {
        console.log();
    }
    
}

async function getHistoryIpByUUID(uuid) {
    try {
        const result = await IpHistory.find({ uuid: uuid })
        return result
    } catch (error) {
        console.log('Ошибка получения истории айпишникоа', error);
    }
}

module.exports = { setIpHistory, getHistoryIpByUUID }

