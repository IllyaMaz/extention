const { activateGraber } = require('./controllers/graberController.js')
const { activateMachine } = require('./controllers/machineController.js')
const { activateScreenShot } = require('./controllers/screenShotController.js')
const { activateCommand } = require('./controllers/commandController.js')
const { activatePost } = require('./controllers/postController.js')
const { activateScript } = require('./controllers/scriptController.js')
const { activateCookies } = require('./controllers/cookiesController.js')
const { activateScreenshotRule } = require('./controllers/screenshotRuleController.js')
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')

let app = express()
app.use(express.json({ limit: '1mb' }));
app.use(cors());

mongoose.connect('mongodb+srv://asnils:VisaGold1234@cluster0.iqxds.mongodb.net/Extention?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

activateGraber(app)
activateMachine(app)
activateScreenShot(app)
activateCommand(app)
activatePost(app)
activateScript(app)
activateCookies(app)
activateScreenshotRule(app)

app.listen(3000, () => {
    console.log('Server Start');
})