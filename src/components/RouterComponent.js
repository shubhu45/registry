import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import WithAuth from '../Helpers/WithAuth';
const Home = React.lazy(() => import('./HomeComponent/HomeComponent'))
const Login = React.lazy(() => import('./LoginComponent/LoginComponent'))

export default function RouterComponent(){
    return <React.Suspense fallback={<CircularProgress/>}>
        <Router basename={"/"}>
            <Switch>
                <Route exact path='/' render={routeProps => <Login {...routeProps} />} />
                <Route exact path='/home' render={routeProps => <WithAuth><Home {...routeProps} /></WithAuth>} />
            </Switch>
        </Router>
    </React.Suspense>
}