import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ForgotPassword from '../../../src/components/auth/ForgotPassword/ForgotPassword';
import ForgotPasswordVerification from '../../../src/components/auth/ForgotPassword/ForgotPasswordVerification';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom';

configure({adapter: new Adapter()});

describe('Check render ForgotPassword', () => {
  beforeEach(() =>{
  render(
    <Router>
      <ForgotPassword />
    </Router>
  )});

  test('Check render results', () =>{
    const fp = shallow(<ForgotPassword/>);
    expect(fp).toMatchSnapshot();
  })

});

describe('Check render ForgotPasswordVerification', () => {
  beforeEach(() =>{
  render(
    <Router>
      <ForgotPasswordVerification />
    </Router>
  )});

  test('Check render results', () =>{
    const fpv = shallow(<ForgotPasswordVerification/>);
    expect(fpv).toMatchSnapshot();
  })

});
