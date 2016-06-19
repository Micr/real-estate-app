import { connect } from 'react-redux'
import setId from '../actions'
import Reviews from '../components/Reviews'

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectChange: (id) => {
      dispatch(setId(id))
    }
  }
}

const Container = connect(
   mapStateToProps,
   mapDispatchToProps
)(Reviews)

export default Container;
