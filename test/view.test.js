import View from '../src/View';
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
    <View/>
  )});

  test('Check render view', () =>{
    const view = shallow(<View/>);
    expect(screen.getByRole("button", {name: "Cerca"})).toBeInTheDocument();
    expect(view).toMatchSnapshot();;
  })

});
