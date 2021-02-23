import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { JournalEntry } from '../../../components/journal/JournalEntry';
import { activeNote } from '../../../actions/notes';

jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

store.dispatch = jest.fn();

const note = {
    id: 10,
    date: 0,
    title: 'Hola',
    body: 'Mundo',
    url: 'https://algunlugar.com/foto.jpg',
};

const wrapper = mount(
    <Provider store={store}>
        <JournalEntry {...note} />
    </Provider>
);

describe('Prueba en JournalEntry', () => {
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de disparar activeNote', () => {
        wrapper.find('.journal__entry').prop('onClick')();

        expect(store.dispatch).toHaveBeenCalled();
        expect(store.dispatch).toHaveBeenCalledWith(activeNote(note.id, { ...note }));
    });
});
