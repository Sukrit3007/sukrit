import React from 'react'

const LocationMap = () => {
    
  return (
    <div className="relative w-full" style={{ paddingBottom: '75%' }}>
    <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.google.com/maps/embed/v1/streetview?key=AIzaSyD1VnYC6EugmolDY9RjsZ77TeXstyj0288&location=12.9715987,77.5945627&heading=148.12"
        allowFullScreen
        style={{ border: '0' }}>
    </iframe>
  </div>
  )
}

export default LocationMap

