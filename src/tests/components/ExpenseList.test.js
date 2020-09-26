import React from 'react';
import {ExpenseList} from '../../components/ExpenseList';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';

test('should render expenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses = {expenses} />);
    expect(wrapper).toMatchSnapshot();
});


test('should render expenseList with empty array', () => {
    const wrapper = shallow(<ExpenseList expenses = {[]} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});