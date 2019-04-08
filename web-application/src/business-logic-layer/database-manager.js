module.exports = function (container) {
   return {
      // water functions
      getWaterData: function (callback) {
         container.databaseRepository.getWaterData(callback)
      },

      postWaterData: function (waterUUID, nameSwedish, lengthKM, areaKM, coordLat, coordLng, body, callback) {
         container.databaseRepository.postWaterData(waterUUID, nameSwedish, lengthKM, areaKM, coordLat, coordLng, body, callback)
      },

      // account functions
      getAccounts: function (username, callback) {
         container.databaseRepository.getAccounts(username, callback)
      },

      postAccount: function (username, password, authorityLevel, callback) {
         container.databaseRepository.postAccount(username, password, authorityLevel, callback)
      },
      //TODO
      authenticateAccount: function () {
         container.databaseRepository.authenticateAccount(callback)
      },

      //waterDataType functions
      postWaterDataType: function (waterUUID, provider, propertyName, unit, callback) {
         container.databaseRepository.postWaterDataType(waterUUID, provider, propertyName, unit, callback)
      },

      getWaterDataType: function (waterUUID, callback) {
         container.databaseRepository.getWaterDataType(waterUUID, callback)
      },

      getWaterDataTypes: function (callback) {
         container.databaseRepository.getWaterDataTypes(callback)
      },

      //dataValue functions
      getDataValue: function (waterUUID, propertyName, callback) {
         container.databaseRepository.getDataValue(waterUUID, propertyName, callback)
      },

      postDataValue: function (waterUUID, provider, propertyName, unit, callback) {
         container.databaseRepository.postDataValue(waterUUID, provider, propertyName, unit, callback)
      }
   }
}