class Place {
  #id;
  #name;
  #address;
  #phone;
  #site;
  #latitude;
  #longitude;
  #category;
  #emoji_score;
  #photo_score;
  #text_score;
  #url_image;

  constructor(
    id,
    name,
    add = "",
    phone = "",
    site = "",
    lat = "",
    long = "",
    cat = "",
    e_s = 0,
    p_s = 0,
    t_s = 0,
    url_img = ""
  ) {
    this.#id = id;
    this.#name = name;
    this.#address = add;
    this.#phone = phone;
    this.#site = site;
    this.#latitude = lat;
    this.#longitude = long;
    this.#category = cat;
    this.#emoji_score = e_s;
    this.#photo_score = p_s;
    this.#text_score = t_s;
    this.#url_image = url_img;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get address() {
    return this.#address;
  }

  get phone() {
    return this.#phone;
  }

  get site() {
    return this.#site;
  }

  get latitude() {
    return this.#latitude;
  }

  get longitude() {
    return this.#longitude;
  }

  get category() {
    return this.#category;
  }

  get emoji_score() {
    return this.#emoji_score * 5 / 100;
  }

  get photo_score() {
    return this.#photo_score * 5 / 100;
  }

  get text_score() {
    return this.#text_score * 5 / 100;
  }

  get url_image() {
    return this.#url_image;
  }

  get totalValue() {
    var tot = 0;
    tot =
      (this.#text_score > 0 ? this.#text_score : 0) +
      (this.#emoji_score > 0 ? this.#emoji_score : 0) +
      (this.#photo_score > 0 ? this.#photo_score : 0);
    var num =
      (this.#text_score > 0 ? 1 : 0) +
      (this.#emoji_score > 0 ? 1 : 0) +
      (this.#photo_score > 0 ? 1 : 0);
    return ((tot / num) * 5) / 100;
  }
}

export default Place;
