import { createStore } from 'redux'
import { connect } from 'react-redux'
import setId from '../actions'
import Home from '../components/Home'

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

const HomeContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(Home)

export default HomeContainer;
