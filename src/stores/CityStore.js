import City from './data/City';
import { makeObservable, observable, action, runInAction } from "mobx";
import config from "../config/config.json";

class CityStore{
  constructor(rootStore){
    this.cities = [];
    this.rootStore = rootStore;
    makeObservable(this, {
      cities : observable,
      fetchCities : action
    });
  }

  get citiesList(){
    if(this.cities.length > 0){
      return this.cities;
    }
    return null;
  }

  get longitudeList(){
    if(this.longitude){
      return this.longitude;
    }
    return null;
  }

  get latitudeList(){
    if(this.latitude){
      return this.latitude;
    }
    return null;
  }

  async fetchCities(){
    this.cities = [];
    try{
      const response = await fetch(
        config.apiCities.getCities
      );
      const json = await response.json();
      runInAction(() => {
        json.forEach((item) => {
          this.cities.push(
            new City(
              item.nome,
              item.latitudine,
              item.longitudine
            )
          );
        });
      });
      console.log(this.cities);
    }
    catch(error){
      console.log(error);
    }
  }
}

export default CityStore;
