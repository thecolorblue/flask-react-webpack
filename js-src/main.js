import { createStore } from 'redux'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'

import CounterUI from './views/counterUI.jsx'
import counter from './models/tests.js'
import {
  statusIndex,
  statusEnum
} from './shared/statusEnum.js'
import {
  mapStateToProps as counterStateMap,
  mapDispatchToProps as counterDispatchMap
} from './controllers/counterCtrl.js'

function generateDummyTest() {
  var delay = 7000 + Math.random() * 7000;
  var testPassed = Math.random() > 0.5;
  return function(callback) {
    setTimeout(function() {
      callback(testPassed);
    }, delay);
  };
}
var tests = [
  { description: "commas are rotated properly",          run: generateDummyTest() },
  { description: "exclamation points stand up straight", run: generateDummyTest() },
  { description: "run-on sentences don't run forever",   run: generateDummyTest() },
  { description: "question marks curl down, not up",     run: generateDummyTest() },
  { description: "semicolons are adequately waterproof", run: generateDummyTest() },
  { description: "capital letters can do yoga",          run: generateDummyTest() }
];

// modify tests in place
tests.forEach((test)=>{
  test.status = statusEnum['Not Started Yet'];
});

const store = createStore(counter);

const CounterContainer = connect(
  counterStateMap,
  counterDispatchMap
)(CounterUI);

store.dispatch({ type: 'SET_TESTS', tests })

ReactDOM.render(
  <CounterContainer store={store} />,
  document.getElementById('app')
  );
