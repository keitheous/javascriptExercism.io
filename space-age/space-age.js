const EARTH_TO_PLANETS_YEARS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}

export class SpaceAge {

  constructor(seconds) {
    this.seconds = seconds
    this.earthYear = seconds / 31557600 // 365.25 days (a year) in seconds
  }

  yearsOnPlanet(planet) {
    const years = this.earthYear / EARTH_TO_PLANETS_YEARS[planet]
    return parseFloat(years.toFixed(2));
  }

  onEarth() {
    return this.yearsOnPlanet('earth')
  }

  onMercury() {
    return this.yearsOnPlanet('mercury')
  }

  onVenus() {
    return this.yearsOnPlanet('venus')
  }

  onMars() {
    return this.yearsOnPlanet('mars')
  }

  onJupiter() {
    return this.yearsOnPlanet('jupiter')
  }

  onSaturn() {
    return this.yearsOnPlanet('saturn')
  }

  onUranus() {
    return this.yearsOnPlanet('uranus')
  }

  onNeptune() {
    return this.yearsOnPlanet('neptune')
  }
}
