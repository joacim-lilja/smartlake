const database = require('./db')

module.exports = function (container) {
   return {

      getWaterData: function (waterUUID, callback) {
         const values = [waterUUID]
         const query = "SELECT * FROM waters WHERE waterUUID = ?"
         database.query(query, values, function (error) {
            callback(error)
         })
      },

      postWaterData: function (waterUUID, nameSwedish, lengthKM, areaKM, coordLat, coordLng, body, callback) {
         const values = [waterUUID, nameSwedish, lengthKM, areaKM, coordLat, coordLng, body]
         const query = "INSERT INTO waters(waterUUID, nameSwedish, lengthKM, areaKM, coordLat, coordLng, body) VALUES (?,?,?,?,?,?,?)"
         database.query(query, values, function (error) {
            callback(error)
         })
      },


   
   }
}