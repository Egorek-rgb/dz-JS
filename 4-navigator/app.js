const addressLat = 0;
const addressLong = 1;
const positionLat = 2;
const positionLong = -2;

const distance = Math.sqrt(
  Math.pow(addressLat - positionLat, 2) +
    Math.pow(addressLong - positionLong, 2)
);
