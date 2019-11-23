const calculateDistancePoints = require('../calculateDistancePoints/calculateDistancePoints');
const calculateStylePoints = require('../calculateStylePoints/calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styelNotes);

    return distancePoints + stylePoints + windFactor + gateFactor;
}

module.exports = calculateTotalPoints;