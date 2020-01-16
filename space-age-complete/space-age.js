//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const orbitalPeriodToEarthYears = {
    "mercury": 0.2408467,
    "venus": 0.61519726,
    "earth": 1.0,
    "mars": 1.8808158,
    "jupiter": 11.862615,
    "saturn": 29.447498,
    "uranus": 84.016846,
    "neptune": 164.79132
};

function secondsToEarthYears(seconds) { 
    return seconds / 31557600 
};

export const age = (planet, seconds) => {
    const result = secondsToEarthYears(seconds) / orbitalPeriodToEarthYears[planet];
    return Number(result.toFixed(2));
};
