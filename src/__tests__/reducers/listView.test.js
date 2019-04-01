import reducer from '../../containers/ListView/reducer';

describe('List view reducer', () => {
    it('should have initial reducer', () => {
        expect(reducer({}, {})).toEqual({});
        expect(reducer({}, { type: 'LOADING' })).toEqual({ items: [], loading: true });
        expect(reducer({}, { type: 'LOADED_DATA', items: [] })).toEqual({ items: [], loading: false });
    });
});