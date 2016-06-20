import { REQUEST_OFFERS, RECEIVE_OFFERS } from '../actions';

const initialState = {
  slogan: "It's your city, live in it",
  choices: [
    'rent',
    'review',
    'sublease'
  ]
};
/**
 *	reduces a store
 * @param  {Array} store - current store
 * @param  {Object} action - an action to perform
 * @return {Array} new store
 */
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_OFFERS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_OFFERS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                offers: action.offers,
                lastUpdated: action.receivedAt
            })
    }

    return state;
}

export default reducer;
