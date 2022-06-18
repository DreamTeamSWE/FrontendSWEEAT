import UserStore from "./UserStore";
import RankingStore from "./RankingStore";
import CityStore from "./CityStore";
import CategoryStore from "./CategoryStore";

class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.rankingStore = new RankingStore(this);
    this.cityStore = new CityStore(this);
    this.categoryStore = new CategoryStore(this);
  }
}

export default RootStore;
