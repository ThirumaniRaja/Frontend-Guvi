const getFare = function(distance) {
    let baseFare = 5; // Base fare for the first 2 kilometers
    let totalFare = baseFare * distance;
    console.log("The total fare for " + distance + " kilometers is: $" + totalFare);
}

getFare(10);                                                    