const Machine = require('../models/machine.js')

async function getAllMachine(currentPage, itemsPerPage) {
    try {
        const result = await Machine.find().select('-_id uuid ip geo');

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const items = result.slice(startIndex, endIndex);

        const totalItems = result ? result.length : 0;
        const pages = totalItems > 0 ? Math.ceil(totalItems / itemsPerPage) : 1

        console.log(pages);
        console.log(result.length / itemsPerPage);
        console.log(itemsPerPage)
        
        

        const response = {
            pages: pages,
            items: items
        }
        return response;
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
