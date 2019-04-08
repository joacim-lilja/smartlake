const database = require('./db')

module.exports = function (container) {
   return {
      // water functions
      getWaterData: function (callback) {
         const values = []
         const query = "SELECT * FROM waters"
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

      // account functions
      getAccounts: function (username, callback) {
         const values = [username]
         const query = "SELECT * FROM accounts WHERE username = ?"
         database.query(query, values, function (error) {
         })
      },

      postAccount: function (username, password, authorityLevel, callback) {
         const values = [username, password, authorityLevel]
         const query = "INSERT INTO accounts(username, password, authorityLevel) VALUES(?,?,?)"
         database.query(query, values, function (error) {
         })
      },
      //TODO
      authenticateAccount: function () {
         const values = []
         const query = ""
         database.query(query, values, function (error) {
         })
      },

      //waterDataType functions
      postWaterDataType: function (waterUUID, provider, propertyName, unit, callback) {
         const values = [waterUUID, provider, propertyName, unit]
         const query = "INSERT INTO waterDataType(waterUUID, provider, propertyName, unit) VALUES(?,?,?,?)"
         database.query(query, values, function (error) {
         })
      },

      getWaterDataType: function (waterUUID, callback) {
         const values = [waterUUID]
         const query = "SELECT * FROM waterDataType WHERE waterUUID = ?"
         database.query(query, values, function (error) {
         })
      },

      getWaterDataTypes: function (callback) {
         const values = []
         const query = "SELECT * FROM waterDataType"
         database.query(query, values, function (error) {
         })
      },

      //dataValue functions
      getDataValue: function (waterUUID, propertyName, callback) {
         const values = [waterUUID, propertyName]
         const query = "SELECT * FROM dataValue WHERE waterUUID = ? AND propertyName = ?"
         database.query(query, values, function (error) {
         })
      },

      postDataValue: function (waterUUID, provider, propertyName, unit, callback) {
         const values = [waterUUID, provider, propertyName, unit]
         const query = "INSERT INTO dataValue(waterUUID, provider, propertyName, unit) VALUES (?,?,?,?)"
         database.query(query, values, function (error) {
         })
      }
   }
}