import React from 'react';
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import styles from '../../components/Map/map.module.scss';

export const MyMap = () => {
  return (
    <Map
      id={styles.myMap}
      center={[51.91, 19.14]}
      zoom={6}
      zoomControl={false}
      position="relative"
      attributionControl={false}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

    </Map>
  )
}

/*const Thunderforest_Neighbourhood = L.tileLayer('https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey={apikey}', {
  attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  apikey: '<your apikey>',
  maxZoom: 22
});*/

export default MyMap;
