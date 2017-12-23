import { 
  ADD_REMINDER,
  DELETE_REMINDER
} from '../constants';

export const addReminder = text => ({
    type: ADD_REMINDER,
    text
});

export const deleteReminder = id => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleting in action', action);
  return action;
}