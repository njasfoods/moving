'use client'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { useFormContext } from '@/context/FormContext'
import { useEffect, useState } from 'react'

export default function Maps(){
  const {state} = useFormContext()  

  const [fromLat, setfromLat] = useState(0.0)
  const [fromLng, setfromLng] = useState(0.0)

  useEffect(()=>{
    setfromLat(state.from.lat)
    setfromLng(state.from.lng)
  },[state.from])

console.log("the state", state)
  const customIcon = new Icon({
    iconUrl:"/icon/location-pin.png",
    iconSize:[38,38]
  })
  
  return(
    <MapContainer className='map' center={fromLat && fromLng == 0 ?  [44.6488, -63.5752]: [fromLat, fromLng]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup 
      chunkedLoading 
      
      > 
        <Marker position={[44.657711, -63.588298]} icon={customIcon}>
      <Popup>
       Hello popap
      </Popup>
    </Marker>
    <Marker position={[44.655738, -63.586071]} icon={customIcon}>
    <Popup>
     Hello popap
    </Popup>
  </Marker>
      </MarkerClusterGroup>
   
</MapContainer>
  )
}