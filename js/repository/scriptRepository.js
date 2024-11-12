const Script = require('../models/script.js')
const Machine = require('../models/machine.js')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


async function setScript(name, script, url) {
    const scriptObj = new Script({
        name: name,
        script: script,
        url:url
    })

    try {
        await scriptObj.save()
        console.log('Скрипт усрешно сохранен');
    } catch (error) {
        console.log('Ошибка сохранения скрипта', error);
        
    }
}

async function getScript(uuid) {
    try {
        const scripts = await Script.find();
        const machineData = await Machine.findOne({ uuid: uuid }).select('scripts -_id');

        if (!machineData) {
            console.log(`Машина с uuid ${uuid} не найдена`);
            return scripts.map((element) => ({
                ...element.toObject(),
                active: false
            }));
        }

        const updatedScripts = scripts.map((element) => {
            const isActive = machineData.scripts.some((el) => element._id.equals(new ObjectId(el)));
            return { ...element.toObject(), active: isActive };
        });

        return updatedScripts;
    } catch (error) {
        console.error('Ошибка при получении скриптов:', error);
    }
}


async function getAllScript() {
    try {
        const scripts = await Script.find();
        return scripts;
    } catch (error) {
        console.log('');
    }
}

module.exports = { setScript, getScript, getAllScript }