import axios from "axios";
import { getDistance } from "geolib";

export const getRouteDistance = async (from, to) => {
  console.log("What is being calculated", from, to);
  try {
    let distance = getDistance({ latitude: from.lat, longitude: from.lng }, { latitude: to.lat, longitude: to.lng },0.01);
    // distance = distance * 100
      return distance
  } catch (error) {
    console.error('Error fetching route distance:', error);
  }
};

export const calculateMovingCost = (distance) => {
  // Assume a fixed time of 4 hours
  const fixedTime = 4;
  const hourlyRate = 80

  // Calculate the total cost based on distance, fixed time, and hourly rate
  const totalCost = distance * 0.025 + fixedTime * hourlyRate;

  return totalCost;
};
