/* eslint-disable camelcase */
import React, {Component} from 'react';
import AList from './AList';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    };
  }

  render() {
    const {question} = this.props;
    const {question_body, question_helpfulness, answers} = question;
    // (Issue) switches the answer ids around but not the answer objects
    // Object.keys(answers).sort((a, b) => { console.log(a); answers[a].helpfulness - answers[b].helpfulness; });

    return (
      <div className='Question'>
        <span className='Q'>Q: </span>

        {question_body}

        <span className='Q_Helpful'>
          helpful?
          <button>yes</button>
          {` (${question_helpfulness})`}
        </span>

        <span className='Add_A'>
          <button>
            Add Answer +
          </button>
        </span>

        <AList answers={answers}/>
      </div>
    );
  }
}

export default Question;