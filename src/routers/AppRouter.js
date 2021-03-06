import React from 'react';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import HelpPage from './../components/HelpPage';
import EditExpensePage from './../components/EditExpensePage';
import AddExpensePage from './../components/AddExpensePage';
import Header from './../components/Header';
import NotFoundPage from './../components/NotFoundPage';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;