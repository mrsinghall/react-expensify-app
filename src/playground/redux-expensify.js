import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//Add_Expense
const addExpense = (
    {
        description = '',
        note= '', 
        amount = 0, 
        createdAt = 0
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//Remove_Expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Edit_Expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//Set_Text_Filter
const setTextFilter = (text = '') => ({
type: 'SET_TEXT_FILTER',
text
});

//Sort_BY_Date
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

//Sort_BY_Amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

//Set_Start_date
const setStartDate =(startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//Set_End_date
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});
// Expenses Reducers
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE' : 
        return[
            ...state,
            action.expense
        ];
        case 'REMOVE_EXPENSE' :
            return state.filter(({ id }) =>id !==action.id ); 
    
        case 'EDIT_EXPENSE' :
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }
                else {
                    return expense;
                };
            });     
         
        default:
            return state;
    }
};

//Filter Reducers
const filterReducerDefaultState = {
    text: '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER' :
            return{
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return textMatch && startDateMatch && endDateMatch;
    }).sort((a,b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};



const store = createStore(
    combineReducers({
        expenses : expensesReducer,
        filters : filterReducer
    })
    );

    store.subscribe(()=>{
        const state = store.getState();
        const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
        console.log(visibleExpenses);
    });

    const one = store.dispatch(addExpense({description: 'RENT', amount: 500, createdAt:-10000}));
    const two = store.dispatch(addExpense({description: 'coffee', amount: 2500, createdAt:-1000}));

    //store.dispatch(removeExpense({id: one.expense.id}));
    //store.dispatch(editExpense(two.expense.id, {amount : 800}));

   //store.dispatch(setTextFilter('rent'));
   // store.dispatch(setTextFilter());

  store.dispatch(sortByAmount());
   // store.dispatch(sortByDate());

  //store.dispatch(setStartDate(0));
   // store.dispatch(setStartDate());
   //store.dispatch(setEndDate(999));


const demoState = {
    expenses: [{
        id : 'dfgbhnhbv',
        description : 'January Rent',
        note: 'This was the final payment for that address',
        amount : '52354',
        createdAt : 0
    }],
    filters : {
        text : 'rent',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    }
};

