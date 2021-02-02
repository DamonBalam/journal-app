import { types } from '../types/types';

const initialState = {
    loading: false,
    msgError: null,
};

// uiStartLoading: debe de colocar la propiedad loading en true
// uiFinishLoading: debe de colocar la propiedad loading en false
// Esas acciones tendrán el nombre de startLoading y finishLoading respectivamente

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload,
            };

        case types.uiRemoveError:
            return {
                ...state,
                msgError: null,
            };

        case types.uiStartLoading:
            return {
                ...state,
                loading: true,
            };

        case types.uiFinishLoading:
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
};
