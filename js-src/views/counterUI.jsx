import React from 'react'
import {
  statusIndex,
  statusEnum
} from '../shared/statusEnum.js'

const CounterUI = ({
  tests,
  startTests
}) => (
  <div>
    <table id="tests">
      <thead>
        <tr>
          <th>Test</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tests.map((t, i)=>(<tr key={i}>
           <td>{t.description}</td>
           <td>{t.status}</td>
         </tr>))}
      </tbody>
    </table>
    <table id="summary">
      <thead>
        <tr>
          <th>Status</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Passed</td>
          <td>{tests.map((t)=>{ return t.status === statusEnum['Passed'] ? 1: 0 }).reduce((sum, t)=>sum + t, 0)}</td>
        </tr>
        <tr>
          <td>Failed</td>
          <td>{tests.map((t)=>{ return t.status === statusEnum['Failed'] ? 1: 0 }).reduce((sum, t)=>sum + t, 0)}</td>
        </tr>
        <tr>
          <td>Running</td>
          <td>{tests.map((t)=>{ return t.status === statusEnum['Running'] ? 1: 0 }).reduce((sum, t)=>sum + t, 0)}</td>
        </tr>
      </tbody>
    </table>
    <button onClick={()=>startTests(tests)}>start!</button>
    {tests.reduce((finished, test)=>{
      return [statusEnum['Passed'], statusEnum['Failed']].indexOf(test.status) > -1 && finished;
    }, true) ? <p>FINISHED!</p>: ''}
  </div>
);

export default CounterUI
