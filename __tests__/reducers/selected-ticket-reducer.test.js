import c from './../../src/constants';
import selectedticketReducer from "./../../src/reducers/selected-ticket-reducer";

describe("selectedTicketReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(selectedticketReducer({}, { type: null })).toEqual({});
  });

  test("Should record which ticket has been selected by user", () => {
      expect(selectedticketReducer({},{type:c.SELECT_TICKET,ticketId:1})).toEqual(1);
  });
});
