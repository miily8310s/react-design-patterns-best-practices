import { useState, useEffect } from "react";
import Geolocation from "./Geolocation";

const GeolocationContainer = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess);
    }
  }, []);
  const handleSuccess = ({
    coords: { latitude, longitude },
  }: {
    coords: { latitude: number; longitude: number };
  }) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };
  return <Geolocation latitude={latitude} longitude={longitude} />;
};

export default GeolocationContainer;
