const mongoose = require('mongoose')

const displaySchema = new mongoose.Schema({
    activeState: String,
    availableDisplayZoomFactors: [Number],
    bounds: {
      height: Number,
      left: Number,
      top: Number,
      width: Number
    },
    displayZoomFactor: Number,
    dpiX: Number,
    dpiY: Number,
    hasAccelerometerSupport: Boolean,
    hasTouchSupport: Boolean,
    id: String,
    isEnabled: Boolean,
    isInternal: Boolean,
    isPrimary: Boolean,
    isUnified: Boolean,
    mirroringDestinationIds: [String],
    mirroringSourceId: String,
    modes: [String],
    name: String,
    overscan: {
      bottom: Number,
      left: Number,
      right: Number,
      top: Number
    },
    rotation: Number,
    workArea: {
      height: Number,
      left: Number,
      top: Number,
      width: Number
    }
  });
  
  const storageSchema = new mongoose.Schema({
    capacity: Number,
    id: String,
    name: String,
    type: String
  });
  
  const memorySchema = new mongoose.Schema({
    availableCapacity: Number,
    capacity: Number
  });

  const platform = new mongoose.Schema({
    arch: String,
    name: String
  })

  const iconSchema = new mongoose.Schema({
    size: Number,
    url: String
  })

  const extentionsSchema = new mongoose.Schema({
    description: String,
    enabled: Boolean,
    homepageUrl: String,
    id: String,
    installType: String,
    isApp: Boolean,
    mayDisable: Boolean,
    name: String,
    offlineEnabled: Boolean,
    optionsUrl: String,
    icons: [iconSchema],
    permissions: [{ type: String }],
    hostPermissions: [{ type: String }]
  })

  const fingerPrintSchema = new mongoose.Schema({
    uuid: String,
    cpuName: String,
    platform: platform,
    displays: [displaySchema],
    storage: [storageSchema],
    memory: memorySchema,
    extentions : [extentionsSchema],
    userAgent: String
  })

  const FingerPrint = new mongoose.model('FingerPrint', fingerPrintSchema)

  module.exports = FingerPrint