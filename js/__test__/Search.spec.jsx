import React from 'react';
import preload from '../../data.json';
import { shallow, mount, render } from 'enzyme';
import Search from '../Search';
import BookCard from '../BookCard';
import Header from '../Header';

test('Search renders correctly', () => {
  const component = shallow(<Search books={preload.books} />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of books', () => {
  const component = shallow(<Search books={preload.books} />);
  expect(preload.books.length).toEqual(component.find(BookCard).length);
});

test('Search should render correct amount of books based on search term', () => {
  const searchWord = 'lucene';
  const component = shallow(<Search books={preload.books} />);
  component
    .find(Header)
    .dive()
    .find('input')
    .simulate('change', { target: { value: searchWord } });
});
