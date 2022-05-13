class Post {
  #id;
  #username;
  #date_post;
  #id_place;
  #text;
  #emoji_score;
  #text_score;
  #photo_score;
  #url_image;
  #labels;

  constructor(
    id,
    username = "",
    date_post = "",
    id_place = "",
    text = "",
    emoji_score = 0,
    text_score = 0,
    photo_score = 0,
    url_image = "",
    labels = ""
  ){
    this.#id = id;
    this.#username = username;
    this.#date_post = date_post;
    this.#id_place = id_place;
    this.#text = text;
    this.#emoji_score = emoji_score;
    this.#text_score = text_score;
    this.#photo_score = photo_score;
    this.#url_image = url_image;
    this.#labels = labels;
  }


  get id(){
    return this.#id;
  }

  get username(){
    return this.#username;
  }

  get date_post(){
    return this.#date_post;
  }

  get id_place(){
    return this.#id_place;
  }

  get text(){
    return this.#text;
  }

  get emoji_score(){
    return this.#emoji_score;
  }

  get text_score(){
    return this.#text_score;
  }

  get photo_score(){
    return this.#photo_score;
  }

  get url_image(){
    return this.#url_image;
  }

  get labels(){
    return this.#labels;
  }

}

export default Post;
