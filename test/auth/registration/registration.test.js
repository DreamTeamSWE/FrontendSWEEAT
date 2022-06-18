import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Registration from '../../../src/components/auth/Registration/Registration';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import '@testing-library/jest-dom';

configure({adapter: new Adapter()});

describe('Check render controllo link mobile', () => {
  beforeEach(() =>{
  render(
    <Router>
      <Registration />
    </Router>
  )});

  test('Check render results', () =>{
    const reg = shallow(<Registration/>);
    expect(reg).toMatchSnapshot();
  })

});
