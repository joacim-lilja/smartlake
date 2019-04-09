module.exports = function (container) {
   return {
      initMap: function () {
         container.functionsManager.initMap()
      },
      initMarkers: function() {
         container.functionsManager.initMap()
      },
      getInfo: function() {
         container.functionsManager.getInfo()
      },
      getDate: function() {
         container.functionsManager.getDate()
      },
      getData: function() {
         container.functionsManager.getData()
      },
      initGraph: function() {
         container.functionsManager.initGraph()
      }
   }
}