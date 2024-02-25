'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"  
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Location = () => {
  const containerStyle = {
    width: 'full',
    height: '200px'
  };
  
  const center = {
    lat: 12.9716,
    lng: 77.5946
  };
  const mapOptions = {
    zoomControl: false, // Disable zoom control
    scrollwheel: false, // Disable scroll wheel zoom
    disableDoubleClickZoom: true, // Disable double click zoom
    draggable: false, // Disable map dragging
    disableDefaultUI: true // Disable default UI controls (including zoom)
  };
  
  
  return (
    <Card className="w-full mb-4 bg-inherit border-0">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-small text-default-500">location</p>
        </div>
      </CardHeader>
      <CardContent>
        <LoadScript googleMapsApiKey="AIzaSyCnIT342iea9yoObPzyGk0LSVGxUaE-UQs" >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={mapOptions}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      </CardContent>
    </Card>
  )
}

export default Location

