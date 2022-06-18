class Category{
  #category;

  constructor(
    category = ""
  ){
    this.#category = category;
  }

  get category(){
    return this.#category;
  }
}

export default Category;
