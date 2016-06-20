const REQUEST_OFFERS = 'REQUEST_OFFERS';
const RECEIVE_OFFERS = 'RECEIVE_OFFERS';

function requestOffers () {
    return {
        type: REQUEST_OFFERS
    };
}

function receiveOffers (json) {
    return {
        type: RECEIVE_OFFERS,
        offers: json,
        receivedAt: Date.now()
    }
}

function fetchOffers () {

    return function (dispatch) {

        dispatch(requestOffers())

        return fetch('data/offers.json')
        .then(response => response.json())
        .then(json =>

          // We can dispatch many times!
          // Here, we update the app state with the results of the API call.

          dispatch(receiveOffers(json))
        )

    }
}

export { REQUEST_OFFERS, RECEIVE_OFFERS, fetchOffers };
