const express = require('express')
const functions = require('../functions')

module.exports = function (container) {
  const router = express.Router()

  router.get("/", function (req, res) {
    container.databaseManager.getWaterData(function (error, water) {
      if (error) {
        res.render("error.hbs")
      } else {
        const model = {
          
        }
        res.render('graph.hbs', model)
      }
    })   
  })

  router.get('/insert', function (req, res) {
    res.render('insert.hbs')

  })

  router.post('/insert', function (req, res) {
    const waterUUID = req.body.waterUUID
    const coordLat = req.body.coordLat
    const coordLng = req.body.coordLng
    const nameSwedish = req.body.nameSwedish
    const lengthKM = req.body.lengthKM
    const areaKM = req.body.areaKM
    const body = req.body.body
    container.databaseManager.postWaterData(waterUUID, nameSwedish, lengthKM, areaKM, coordLat, coordLng, body, function (error, water) {
      if (error) {
        res.render('error.hbs')
      } else {
        res.redirect('/')
      }
    })
  })

  return router
}