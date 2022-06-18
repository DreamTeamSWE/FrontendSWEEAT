import HomeCards from '../src/components/home/HomeCards';
import '@testing-library/jest-dom';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

configure({adapter: new Adapter()});

describe('Check render View', () => {
  beforeEach(() =>{
  render(
    <Router>
      <HomeCards/>
    </Router>
  )});

  test('Check render home cards', () =>{
    const hc = shallow(<HomeCards/>);
    expect(hc).toMatchSnapshot();;
  })

});
