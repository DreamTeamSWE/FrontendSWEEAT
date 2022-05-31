import ControlloImmagine from '../../src/components/details/Check/ControlloImmagine';
import ControlloTags from '../../src/components/details/Check/ControlloTags';
import '@testing-library/jest-dom';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

configure({adapter: new Adapter()});

describe('Check render controllo immagine', () => {
  beforeEach(() =>{
  render(
      <ControlloImmagine />
  )});

  test('Check render results', () =>{
    const lp = shallow(<ControlloImmagine/>);
    expect(lp).toMatchSnapshot();
  })

});

describe('Check render controllo tags', () => {
  beforeEach(() =>{
  render(
      <ControlloTags />
  )});

  test('Check render results', () =>{
    const lp = shallow(<ControlloTags/>);
    expect(lp).toMatchSnapshot();
  })

});
