import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import { Actions } from '../../states/CustomTaskListState';
import CustomTaskList from './LbTodoListTaskComponent';

// const mapStateToProps = (state) => ({
//     isOpen: state['lb-ui-1'].customTaskList.isOpen,
// });

// const mapDispatchToProps = (dispatch) => ({
//   dismissBar: bindActionCreators(Actions.dismissBar, dispatch),
// });

export default connect(mapStateToProps, mapDispatchToProps)(CustomTaskList);
