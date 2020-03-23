<template>
  <div id="map" class="map"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import L from 'leaflet'
import WiFi from '@/assets/img/markers/wifi.png'

export default Vue.extend({
  name: 'LeafMap' as string,

  data () {
    return {
      map: null as any,
      coords: null as any
    }
  },

  methods: {
    onSuccess (position) {
      this.coords = position.coords

      this.map = L.map('map').setView(
        [this.coords.latitude, this.coords.longitude], 18
      )

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map)

      const wifiMarker = L.icon({
        popupAnchor: [15, -10],
        iconSize: [30, 23.66],
        iconAnchor: [0, 0],
        iconUrl: WiFi
      })

      L.marker([
        this.coords.latitude, this.coords.longitude
      ], { icon: wifiMarker })
        .addTo(this.map)
        .bindPopup('You are here!')
    },

    onError (error) {
      console.error(`${error.code}): ${error.message}`)
    }
  },

  mounted () {
    navigator.geolocation.getCurrentPosition(
      this.onSuccess, this.onError, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 500
      }
    )
  }
})
</script>

<style lang="scss" scoped>
@import '~leaflet/dist/leaflet.css';

.map {
  position: relative;
  display: block;

  height: 500px;
  width: 100%;

  padding: 0;
  margin: 0;

  left: 0;
  top: 0;
}
</style>
