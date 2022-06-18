import Dato from '../../../src/components/userArea/UserData/Dato';
import UserData from '../../../src/components/userArea/UserData/UserData';
import '@testing-library/jest-dom';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

configure({adapter: new Adapter()});

test('Check Dato', () =>{
  const dato = shallow(<Dato/>);
  expect(dato).toMatchSnapshot();;
});

test('Check User Data', () =>{
  const ud = shallow(<UserData/>);
  expect(ud).toMatchSnapshot();;
});
