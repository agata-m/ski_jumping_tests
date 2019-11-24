const calculateDistancePoints = (distance, hillSize, kPoint) => {
    
    let distancePointsNormal = 60 + (2 * (distance - kPoint));
    let distancePointsBig = 60 + (1.8 * (distance - kPoint));
    let distancePointsMammoth = 120 + (1.2 * (distance - kPoint));


    if(hillSize <= 109) {
        return distancePointsNormal;

    } else if (hillSize > 109 && hillSize <= 184) {
        return distancePointsBig;
    
    } else {
        return distancePointsMammoth;
    }
    
};

module.exports = calculateDistancePoints;