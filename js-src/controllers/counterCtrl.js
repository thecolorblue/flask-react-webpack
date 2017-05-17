import {
  statusIndex,
  statusEnum
} from '../shared/statusEnum.js'

const mapStateToProps = (tests)=> ({ tests })
const mapDispatchToProps = (dispatch) => ({
  startTests: (tests) => {
    // update state
    dispatch({
      type: 'START_TESTS'
    });

    // run tests
    tests.forEach(function(test) {
      test.run((response)=>dispatch({
        type: 'UPDATE_TEST',
        description: test.description,
        status: response ? statusEnum['Passed']: statusEnum['Failed']
      }));
    });
  }
});

export {
  mapStateToProps,
  mapDispatchToProps
}
