const ScreenshotRule = require('../models/screenshotRule.js')
const Machine = require('../models/machine.js')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

async function getScreenshotRule(uuid) {
    try {
        const rules = await ScreenshotRule.find()
        const machineData = await Machine.findOne({ uuid: uuid }).select('screenshotRule -_id');

        if (!machineData) {
            console.log(`Машина с uuid ${uuid} не найдена`);
            return scripts.map((element) => ({
                ...element.toObject(),
                active: false
            }));
        }

        const updatedScripts = rules.map((element) => {
            const isActive = machineData.screenshotRule.some((el) => element._id.equals(new ObjectId(el)));
            return { ...element.toObject(), active: isActive };
        });

        return updatedScripts
    } catch(error) {
        console.log('Ошибка получения скриншот рулов', error);
    }
}

async function setScreenshotRule(title, url) {
    const screenshotRule = new ScreenshotRule({
        title: title,
        url: url
    })

    try {
        await screenshotRule.save()
        console.log('Скриншот рул успешно сохранен');
    } catch (error) {
        console.log('Ошибка сохранения скриншот рула', error);
    }
}

async function getScreenshotRuleById(id) {
    
    try {
        const result = await ScreenshotRule.find({ _id: id })
        return result
    } catch (error) {
        console.log();
    }

}

module.exports = { getScreenshotRule, setScreenshotRule, getScreenshotRuleById }