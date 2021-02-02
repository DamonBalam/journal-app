import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';
import { Loading } from '../components/journal/Loading';

export const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            
            // verificando si hay usuario
            if (user?.uid) {

                // activando dispatch´s
                dispatch(login(user.uid, user.displayName));
                dispatch( startLoadingNotes( user.uid ) );

                // seteando true el login
                setIsLoggedIn(true);
                
            } else {
                // si no se encuentra usuario se setea false
                setIsLoggedIn(false);
            }

            // se cierra la espera
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        // return <h1>Wait please...</h1>;
        return (
            <Loading />
        );
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/auth" component={AuthRouter} isAuthenticated={isLoggedIn} />
                    <PrivateRoute exact path="/" component={JournalScreen} isAuthenticated={isLoggedIn} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
};
