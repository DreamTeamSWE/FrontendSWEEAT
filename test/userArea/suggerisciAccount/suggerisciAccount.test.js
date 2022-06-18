import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SuggerisciAccount from '../../../src/components/userArea/SuggerisciAccount/SuggerisciAccount';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom';

configure({adapter: new Adapter()});

describe('Check render controllo link mobile', () => {
  beforeEach(() =>{
  render(
    <Router>
      <SuggerisciAccount />
    </Router>
  )});

  test('Check render results', () =>{
    const sa = shallow(<SuggerisciAccount/>);
    expect(sa).toMatchSnapshot();
  })

});
