import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ControlloLinkMobile from '../../../src/components/results/Check/ControlloLinkMobile';
import ControlloLinkMobileH from '../../../src/components/results/Check/ControlloLinkMobileH';
import ControlloTelefono from '../../../src/components/results/Check/ControlloTelefono';
import ControlloTelefonoH from '../../../src/components/results/Check/ControlloTelefonoH';
import Valutazione from '../../../src/components/results/Check/Valutazione';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
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


describe('Check render controllo link mobile', () => {
  beforeEach(() =>{
  render(
      <ControlloLinkMobile />
  )});

  test('Check render results', () =>{
    const clm = shallow(<ControlloLinkMobile/>);
    expect(clm).toMatchSnapshot();;
  })

});

describe('Check render controllo link mobile', () => {
  beforeEach(() =>{
  render(
      <ControlloLinkMobileH />
  )});

  test('Check render results', () =>{
    const clmh = shallow(<ControlloLinkMobileH/>);
    expect(clmh).toMatchSnapshot();;
  })

});

describe('Check render controllo link mobile', () => {
  beforeEach(() =>{
  render(
      <ControlloTelefono />
  )});

  test('Check render results', () =>{
    const ct = shallow(<ControlloTelefono/>);
    expect(ct).toMatchSnapshot();;
  })

});

describe('Check render controllo link mobile', () => {
  beforeEach(() =>{
  render(
      <ControlloTelefonoH />
  )});

  test('Check render results', () =>{
    const cth = shallow(<ControlloTelefonoH/>);
    expect(cth).toMatchSnapshot();;
  })

});

describe('Check render controllo link mobile', () => {
  beforeEach(() =>{
  render(
      <Valutazione />
  )});

  test('Check render results', () =>{
    const val = shallow(<Valutazione/>);
    expect(val).toMatchSnapshot();;
  })

});
