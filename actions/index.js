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
        offrs: json
    }
}

function fetchOffers () {

    dispatch(requestOffers())

    return function (dispatch) {
        return fetch('offers.json')
        .then(response => response.json())
        .then(json =>

          // We can dispatch many times!
          // Here, we update the app state with the results of the API call.

          dispatch(receiveOffers(json))
        )

    }
}

export { fetchOffers };
