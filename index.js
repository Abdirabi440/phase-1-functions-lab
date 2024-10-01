// Code your solution in this file!

// NO. OF BLOCKS TO HEADQUARTERS
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}
  
// DISTANCE IN FEET
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}
  
// DISTANCE TRAVELED BETWEEN 2 BLOCKS (IN FEET)
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}
  
// FARE PRICE:
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; 
    } else if (distance > 400 && distance <= 2000) {  // Corrected distance range
        return (distance - 400) * 0.02;  // Charges 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; 
    } else {
        return 'cannot travel that far';
    }
}
