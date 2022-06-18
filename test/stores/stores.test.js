import Place from '../../src/stores/data/Place';
import Post from '../../src/stores/data/Post';
import User from '../../src/stores/data/User';
import 'jest';

{/* Creazione di Place */}
let locale = new Place(
  '404',
  'Panzerotti Luini',
  'Via Santa Radegonda 16, 20121 Milano',
  '+39 349 343 2198',
  'http://www.luini.it/',
  '45.4657828',
  '9.1916618',
  'Italian Street Food',
  '75',
  '75',
  '75',
  'http://www.luini.it/img/panzerotti.jpg'
);

test('constructor', () => {
  expect(locale.id).toEqual('404');
  expect(locale.name).toBe('Panzerotti Luini');
  expect(locale.address).toBe('Via Santa Radegonda 16, 20121 Milano');
  expect(locale.phone).toBe('+39 349 343 2198');
  expect(locale.site).toBe('http://www.luini.it/');
  expect(locale.latitude).toEqual('45.4657828');
  expect(locale.longitude).toEqual('9.1916618');
  expect(locale.category).toBe('Italian Street Food');
  expect(locale.emoji_score).toEqual(3.75);
  expect(locale.photo_score).toEqual(3.75);
  expect(locale.text_score).toEqual(3.75);
  expect(locale.url_image).toBe('http://www.luini.it/img/panzerotti.jpg');
  //expect(locale.totalValue).toBe(3.75); // da controllare!
});

{/* Creazione di User */}
let utente = new User(
  'ariana@grande.com',
  'Ariana',
  'Grande',
  'ariana@grande.com',
  true
);

test('constructor', () => {
  expect(utente.username).toBe('ariana@grande.com');
  expect(utente.name).toBe('Ariana');
  expect(utente.surname).toBe('Grande');
  expect(utente.email).toBe('ariana@grande.com');
  expect(utente.authenticated).toBe(true);
  //expect(utente.authenticated(true)).toBe(true);


})



{/* Creazione di Post */}

let post = new Post(
  '123456789',
  'arianagrande',
  '2022-05-25',
  '404',
  'Beautiful place!',
  '75',
  '75',
  '75',
  'http://www.damichele.net/wp-content/uploads/2018/04/cod-53.jpg',
  'pizza, food, italian food'
);

test('constructor', () =>{
  expect(post.id).toEqual('123456789');
  expect(post.username).toBe('arianagrande');
  expect(post.date_post).toBe('2022-05-25');
  expect(post.id_place).toEqual('404');
  expect(post.text).toBe('Beautiful place!');
  expect(post.emoji_score).toEqual('75');
  expect(post.text_score).toEqual('75');
  expect(post.photo_score).toEqual('75');
  expect(post.url_image).toBe('http://www.damichele.net/wp-content/uploads/2018/04/cod-53.jpg');
  expect(post.labels).toBe('pizza, food, italian food');
});
