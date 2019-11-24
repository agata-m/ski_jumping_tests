const calculateDistancePoints = require('../calculateDistancePoints/calculateDistancePoints');
const calculateStylePoints = require('../calculateStylePoints/calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);

    const finalPoints = distancePoints + stylePoints + gateFactor + windFactor;
    return finalPoints.toFixed(2);
}

module.exports = calculateTotalPoints;