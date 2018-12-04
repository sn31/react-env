import ticketListReducer from './../../src/reducers/ticket-list-reducer';

describe('ticketListReducer',() =>{
    test('Should return default state if no action is regconized',()=>{
        expect(ticketListReducer({},{type:null})).toBe({});
    })
})