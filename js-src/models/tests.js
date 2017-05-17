import {
  statusIndex,
  statusEnum
} from '../shared/statusEnum.js'

function sortTests(a, b) {
  if (statusIndex.indexOf(a.status) < statusIndex.indexOf(b.status)) {
    return -1;
  } else if (statusIndex.indexOf(a.status) > statusIndex.indexOf(b.status)) {
    return 1;
  } else {
    return 0;
  }
}
// Model
const counter = (state = [], action) => {
switch (action.type) {
  case 'SET_TESTS':
    return [].concat(action.tests);
  case 'START_TESTS':
    return state.map((test)=>{
      test.status = statusEnum['Running'];
      return test;
    });
  case 'UPDATE_TEST':
    return state.map((test)=>{
      if (test.description === action.description) {
        test.status = action.status;
      }

      return test;
    }).sort(sortTests);
  default:
    return state;
}
}

export default counter
