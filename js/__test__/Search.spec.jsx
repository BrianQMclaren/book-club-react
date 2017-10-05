import React from 'react';
import { shallow } from 'enzyme';

import Search from '../Search';
import preload from '../../data.json';

test('Search renders correctly', () => {
  const component = shallow(<Search books={preload.books} />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of books', () => {
  const component = shallow(<Search books={preload.books} />);
  expect(preload.books.length).toEqual(component.find(BookCard).length);
});
