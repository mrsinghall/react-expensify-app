import expenses from '../fixtures/expenses';
import expensesReducer from '../../reducers/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expenses by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expenses if id not found' , () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense={
        id:'109',
        description: 'laptop',
        note: '',
        createdAt:20000,
        amount: 34950
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense for valid id', () => {
    const amount = 12200;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state= expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should edit an expense for invalid id', () => {
    const amount = 12200;
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            amount
        }
    };
    const state= expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should setExpenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});