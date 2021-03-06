import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectChange: () => {
    }
  }
}

const HomeContainer = connect(
   mapStateToProps,
   mapDispatchToProps
)(Home)

export default HomeContainer;
