import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
function Map({latAndLong, location}) {
    const customIcon = new Icon({
        iconUrl:'/images/icon-location.svg',
        iconSize:[30, 40]
    })
  return <>
  <MapContainer center={latAndLong} zoom={13}> {/*the map! */}
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />
    <Marker position={latAndLong} icon={customIcon}> {/*za marker */}
        <Popup>{location}</Popup>
    </Marker>
  </MapContainer>
  </>
}

export default Map