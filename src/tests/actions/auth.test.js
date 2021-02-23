/**
 * @jest-environment node
 */
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

import { login, logout, startLoginEmailPassword, startLogout } from '../../actions/auth';
import { types } from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Pruebas con las acciones de Auth', () => {
    beforeEach(() => {
        store = mockStore(initState);
    });

    test('login y logout de crear la accion respectiva', () => {
        const uid = 'ABC123';
        const displayName = 'Arturo';

        const loginAction = login(uid, displayName);
        const logoutAction = logout();

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName,
            },
        });

        expect(logoutAction).toEqual({
            type: types.logout,
        });
    });

    test('Se debe realizar el startLogout ', async () => {
        await store.dispatch(startLogout());

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.logout,
        });

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning,
        });
    });

    test('Se debe realizar el startLoginWithEmailPassword', async () => {
        await store.dispatch(startLoginEmailPassword('damontest@gmail.com', 'abc123'));

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.uiStartLoading,
        });

        expect(actions[1]).toEqual({
            type: types.uiFinishLoading,
        });

        expect(actions[2]).toEqual({
            type: types.login,
            payload: {
                uid: '8R4fOZXdPcNqmj8CtT5yuFLzUNo1',
                displayName: null,
            },
        });
    });
});
