import { 
  ADD_REMINDER,
  DELETE_REMINDER
} from '../constants';

export const addReminder = (text, dueDate) => ({
    type: ADD_REMINDER,
    text,
    dueDate
});

export const deleteReminder = id => ({
  type: DELETE_REMINDER,
  id
});
