
import './App.css';
import Trail from './pages/trails';
import { increaseCounter, decreaseCounter } from './redux/Counter/counter.actions'
import { connect } from 'react-redux';
import "antd/dist/antd.css";
function App(props) {
  return (
    <div style={{ padding: 30}}>
      <Trail/>
      {/* <div>
        <button onClick={() => props.increaseCounter()}>Increase Count</button>
            <span style={{margin:'0px 8px'}}>Count: {props.count}</span>
        <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      </div> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);