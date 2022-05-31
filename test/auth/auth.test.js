import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Success from '../../src/components/auth/Success';
import Welcome from '../../src/components/auth/Welcome';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom';

configure({adapter: new Adapter()});

it('Check render Success', () =>{
  render(
    <Router>
      <Success/>
    </Router>
  )
});

it('Check render Welcome', () =>{
  render(
    <Router>
      <Welcome/>
    </Router>
  )
});
