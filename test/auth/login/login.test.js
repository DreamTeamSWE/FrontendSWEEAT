import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Login from '../../../src/components/auth/Login/Login';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom';

configure({adapter: new Adapter()});

describe('Check render controllo link mobile', () => {
  beforeEach(() =>{
  render(
    <Router>
      <Login />
    </Router>
  )});

  test('Check render results', () =>{
    const login = shallow(<Login/>);
    expect(login).toMatchSnapshot();
  })

});
