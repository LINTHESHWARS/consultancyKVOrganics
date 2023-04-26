import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "../index.css"
import "leaflet/dist/leaflet.css"
import { divIcon, Icon, point } from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'


const GoogleMap = () => {
  const markers =[
    {
      geocode:[11.4695052, 78.1633915],
      popUp:"popup 1"
    },
  ];

  const customIcon = new Icon({
    iconUrl:require("../images/mapMarker.png"),
    iconSize:[38,38] //size of the icon
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html:`<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className:"custom-marker-cluster",
      iconSize:point(33,33,true)
    });
  } ;

  return (
    <div>
      <MapContainer center={[11.4695052, 78.1633915]} zoom={13}>
        <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

      <MarkerClusterGroup
      chunkedLoading
      iconCreateFunction={createCustomClusterIcon}
      >
      {markers.map(marker => (
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup>
            {marker.popUp}
          </Popup>
        </Marker>
      ))}
      </MarkerClusterGroup>
      </MapContainer>
    </div>
  )
}

export default GoogleMap


