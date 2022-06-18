class City{
  #city;
  #longitude;
  #latitude;
  constructor(
    city = "",
    longitude = "",
    latitude = ""
  ){
    this.#city = city;
    this.#longitude = longitude;
    this.#latitude = latitude
  }

  get city(){
    return this.#city;
  }

  get longitude(){
    return this.#longitude;
  }

  get latitude(){
    return this.#latitude;
  }
}

export default City;
