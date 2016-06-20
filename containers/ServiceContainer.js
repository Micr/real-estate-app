import { connect } from 'react-redux'
import Service from '../components/Service'

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectChange: () => {
    }
  }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Service)
