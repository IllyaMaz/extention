const Command = require('../models/command.js')
const Machine = require('../models/machine.js');
const ScreenshotRule = require('../models/screenshotRule.js');

async function setCommand(uuid, name, active) {

    const command = new Command({
        uuid: uuid,
        name: name,
        active: active
    })

    try {
        command.save()
        console.log('Команда успешно сохранена');
    } catch(error) {
        console.log('Ошибка сохранения команды');
    }
    
}

async function setScriptCommand(uuid, name, active, scriptId) {
    const command = new Command({
        uuid: uuid,
        name: name,
        active: active,
        script: scriptId
    })

    try {
        await command.save()
        await Machine.findOneAndUpdate(
            { uuid: uuid },
            { $addToSet: { scripts: scriptId } },
            { new: true }
        );
        console.log('Команда успешно сохранена');
    } catch(error) {
        console.log('Ошибка сохранения команды', error);
    }
}

async function setScreenshotRuleCommand(uuid, name, active, ruleId) {
    const command = new Command({
        uuid: uuid,
        name: name,
        active: active,
        screenshotRule : ruleId
    })

    try {
        await command.save()
        await Machine.findOneAndUpdate(
            { uuid: uuid },
            { $addToSet: { screenshotRule: ruleId } },
            { new: true }
        )       
    } catch (error) {
        console.log('Ошибка сохранения команды', error);
    }
    
}

async function getCommandByUUID(uuid) {
    try {
        const commands = await Command.find({uuid: uuid, active: true})        
        await Command.updateMany({uuid: uuid, active: true}, {$set: { active: false}})
        return commands
    } catch(error) {
        console.log('Ошибка получения команд');
    }
    
}

module.exports = { 
    setCommand,  
    getCommandByUUID, 
    setScriptCommand, 
    setScreenshotRuleCommand
}