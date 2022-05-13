import UserStore from "./UserStore";
import RankingStore from "./RankingStore";

class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.rankingStore = new RankingStore(this);
  }
}

export default RootStore;
