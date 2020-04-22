import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import MainPage from './pages/MainPage';
import Bin2Dec from './pages/Bin2Dec';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/bin2dec" component={Bin2Dec} />
            </Switch>
        </BrowserRouter>
    );
}