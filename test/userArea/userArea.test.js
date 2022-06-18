import UserArea from '../../src/components/userArea/UserArea';
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
      <UserArea />
    </Router>
  )});

  test('Check render results', () =>{
    const user = shallow(<UserArea/>);
    expect(user).toMatchSnapshot();;
  })
  // your tests...

});
