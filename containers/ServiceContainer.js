import { connect } from 'react-redux'
import Service from '../components/Service'
import { fetchOffers } from '../actions'

const mapStateToProps = (state) => {
    return {
      offers: state.offers || []
    };
}

const mapDispatchToProps = (dispatch) => {
    dispatch(fetchOffers())
  return {
    onMount: (dispatch) => {
        dispatch(fetchOffers());
    }
  }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Service)
