import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { login } from '../../actions/auth';
import { AppRouter } from '../../routers/AppRouter';
import { act } from '@testing-library/react';

import { firebase } from '../../firebase/firebase-config';

jest.mock('../../actions/auth', () => ({
    login: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null,
    },
    notes: {
        active: {
            id: 'abc',
        },
        notes: [],
    },
};
let store = mockStore(initState);

store.dispatch = jest.fn();

describe('Pruebas en el AppRouter', () => {
    test('Debe de llamar el login si estoy autenticado', async () => {
        let user;
        await act(async () => {
            const userCred = await firebase.auth().signInWithEmailAndPassword('damontest@gmail.com', 'abc123');
            user = userCred.user;
            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            );
        });

        expect(login).toHaveBeenCalled();
    });
});
