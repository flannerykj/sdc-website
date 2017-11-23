import { connect } from 'react-redux'
import PartnerList from '../components/PartnerList';


const mapStateToProps = (state) => {
  return {
    partners: state.partners
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    }
  }



export default connect(mapStateToProps, mapDispatchToProps)(PartnerList);
