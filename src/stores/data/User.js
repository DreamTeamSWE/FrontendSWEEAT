class User {
  #username;
  #name;
  #surname;
  #email;
  #authenticated;

  constructor(
    username = "",
    name = "",
    surname = "",
    email = "",
    authenticated = false
  ) {
    this.#username = username;
    this.#name = name;
    this.#surname = surname;
    this.#email = email;
    this.#authenticated = authenticated;
  }

  get username() {
    return this.#username;
  }

  get name() {
    return this.#name;
  }

  get surname() {
    return this.#surname;
  }

  get email() {
    return this.#email;
  }

  get authenticated() {
    return this.#authenticated;
  }

  set authenticated(status) {
    this.#authenticated = status;
  }
}

export default User;
