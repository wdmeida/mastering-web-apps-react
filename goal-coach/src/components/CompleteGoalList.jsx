import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {
  componentDidMount() {
    completeGoalRef.on('value', snapshot => {
      let completeGoals = [];
      snapshot.forEach(complateGoal => {
        const { email, title } = complateGoal.val();
        completeGoals.push({email, title})
      })
      this.props.setCompleted(completeGoals);
    })
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    return (
      <div>
        {
          this.props.completedGoals.map((completeGoal, index) => {
            const { title, email } = completeGoal;
            return (
              <div key={index}>
                <strong>{title}</strong> completed by <em>{email}</em>
              </div>
            )
          })
        }
        <button
          className='btn btn-primary'
          onClick={() => this.clearCompleted()}
        >
          Clear All
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setCompleted }, dispatch)
)

const mapStateToProps = state => {
  const { completedGoals } = state;
  return {
    completedGoals
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompleteGoalList);
