import Details from '../../src/components/details/Details';
import '@testing-library/jest-dom';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import RootStore from '../../src/stores/RootStore';
import Place from '../../src/stores/data/Place';

configure({adapter: new Adapter()});

let rootStore, place;



describe('Check render Details', () => {

  beforeEach( () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ id: 69 }),
    })
  )});

  rootStore = new RootStore();
  place = new Place();
  place = [{
    id: 404,
    name: "Casa Pepe",
    address: "Via del Coroneo, 19",
    phone: "040 631234",
    site: "pepepizza.it",
    latitude: "45.6545205",
    longitude: "13.780023",
    category: "pizza",
    emoji_score: "5",
    photo_score: "5",
    text_score: "5",
    url_image: "https://www.gluto.it/immagini/locali/1104.jpg"
  }];


  /*beforeEach(() =>{
  render(
    <Router>
      <Details/>
    </Router>
  )});

  test('Check render view', () =>{
    const details = shallow(<Details/>);
    expect(details).toMatchSnapshot();
  })*/

  test('Render Details', async () => {
  const {component} = render(
    <Router>
      <Details/>
    </Router>
  ); //render is from @testing-library/react

  const navbar = getElementByClassName("nav");
  const dettagli = getElementByClassName("dettagliLocale");

  expect(navbar).toBeInTheDocument();
  expect(dettagli).toBeInTheDocument();

  const linkElement = getByText(/Apri su GMaps/i);
  expect(linkElement).toBeInTheDocument(); //expect assertion is from Jest

  const post = getElementByClassName("post");
  expect(post).toBeInTheDocument()

  const postcard = getElementByClassName("postcard");
  expect(postcard).toBeInTheDocument();

  expect(screen.getByText(/Apri su GMaps/i));
  expect(screen.getByText(/Vai al sito/i));

  const nome_label = await screen.findByTestId('nome label');
  expect(id.textContent).toBe(69);
  expect(nome_label.textContent).toBe('Pasta');
  });

});
