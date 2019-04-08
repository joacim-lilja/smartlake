module.exports = function (container) {
   return {

      getWaterData: function (waterUUID, callback) {
         container.databaseRepository.getWaterData(waterUUID, callback)
      },

      postWaterData: function (waterUUID, nameSwedish, lengthKM, areaKM, coordLat, coordLng, body, callback) {
         container.databaseRepository.postWaterData(waterUUID, nameSwedish, lengthKM, areaKM, coordLat, coordLng, body, callback)
      }
   }
}