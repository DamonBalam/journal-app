import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';

describe('Pruebas en el authReducer', () => {

    test('Debe retornar el valor por defecto', () => {
        const state = authReducer({}, {});
        expect(state).toEqual({});
    });

    test('Debe de realizar el login', () => {

        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: '123abc',
                displayName: 'Arturo'
            }
        };

        const state = authReducer(initState, action);
        expect(state).toEqual({
            uid:'123abc',
            name:'Arturo'
        });
        
    });

    
    test('Debe de realizar el logout', () => {

        const initState = {
            uid:'123abc',
            name:'Arturo'
        };

        const action = {
            type: types.logout,
        };

        const state = authReducer(initState, action);
        expect(state).toEqual({});
        
    });
    

});
