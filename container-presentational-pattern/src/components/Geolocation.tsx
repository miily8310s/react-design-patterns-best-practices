const Geolocation = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  return (
    <div>
      <h1>Geolocation</h1>
      <div>Latitude: {latitude}</div>
      <div>Longitude: {longitude}</div>
    </div>
  );
};

export default Geolocation;
