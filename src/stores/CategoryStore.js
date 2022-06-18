import Category from "./data/Category";
import { makeObservable, observable, action, runInAction } from "mobx";
import config from "../config/config.json";

class CategoryStore {
  constructor(rootStore) {
    this.categories = [];
    this.rootStore = rootStore;
    makeObservable(this, {
      categories: observable,
      fetchCategories: action,
    });
  }

  get categoryList() {
    return this.categories;
  }

  async fetchCategories() {
    this.categories = [];
    try {
      const response = await fetch(config.apiCategories.getCategories);
      const json = await response.json();
      console.log(json);
      runInAction(() => {
        json.forEach((item) => {
          this.categories.push(new Category(item.categorie));
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default CategoryStore;
