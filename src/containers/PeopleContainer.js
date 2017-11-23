import { connect } from 'react-redux'
import PersonList from '../components/PersonList';


const mapStateToProps = (state) => {
  return {
    people: state.people
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    }
  }



export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
