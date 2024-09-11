import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
function Map({latAndLong, location}) {
  return <>
  <MapContainer center={latAndLong} zoom={13}> {/*the map! */}
    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />
    <Marker position={latAndLong} > {/*za marker */}
        <Popup>{location}</Popup>
    </Marker>
  </MapContainer>
  </>
}

export default Map