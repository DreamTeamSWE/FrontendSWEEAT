import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Cards from '../../src/components/results/Cards.js';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Results from '../../src/components/results/Results';
import '@testing-library/jest-dom';

configure({adapter: new Adapter()});

/*describe('render cards', () => {
  render(
  <Router>
  <Cards/>
  const card = shallow(<Cards/>);
  expect(card.find(Link)).toBe('');
  expect(card).toMatchSnapshot();
  </Router>
  )
});*/


describe('Check render View', () => {
  beforeEach(() =>{
  render(
    <Router>
      <Results />
    </Router>
  )});

  test('Check render results', () =>{
    const results = shallow(<Results/>);
    expect(results).toMatchSnapshot();;
  })

});

describe('Check render View', () => {
  beforeEach(() =>{
  render(
    <Router>
      <Cards />
    </Router>
  )});

  test('Check render results', () =>{
    const cards = shallow(<Cards/>);
    expect(cards).toMatchSnapshot();;
  })

});
