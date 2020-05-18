import {createStore, combineReducers} from 'redux';


// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
    );

    store.subscribe(()=>{
        const state = store.getState();
        const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
        console.log(visibleExpenses);
    });

    const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createAt:1000}));
    const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300,createdAt:-1000}));

    // store.dispatch(removeExpense({id: expenseOne.expense.id}));
    // store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

    // store.dispatch(setTextFilter('rent'));
    // store.dispatch(setTextFilter());

    // store.dispatch(sortByAmount('amount'));
    // store.dispatch(sortByDate('date'));

    // store.dispatch(setStartDate(0));
    // store.dispatch(setStartDate());
    // store.dispatch(setEndDate(999));

const demoState = {
    expenses: [{
        id: 'poijadasdf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};