const Machine = require('../models/machine.js')

async function getAllMachine(currentPage, itemsPerPage) {
    try {
        const result = await Machine.find().select('-_id uuid ip geo');
        return result;
    } catch (error) {
        console.error('Ошибка получения машин:', error);
    }
}

async function setMachine(uuid, ip, geo, cookies) {
    const machine = new Machine({
        uuid: uuid,
        ip: ip,
        geo: geo,
        cookies: cookies
    });

    try {
        await machine.save();
        console.log('Машина успешно сохранена.');
    } catch (error) {
        console.error('Ошибка при сохранении машины:', error);
    }
}

async function getMachineByUUID(uuid) {
    try {
        const machine = await Machine.find({ uuid: uuid });
        return machine;
    } catch (error) {
        console.error('Ошибка при получении машины:', error.message || error);
    }
}

module.exports = { getAllMachine, setMachine, getMachineByUUID };
