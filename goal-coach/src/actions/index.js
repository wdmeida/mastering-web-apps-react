import {
    SET_COMPLETED,
    SET_GOALS,
    SIGNED_IN
} from '../constants';

export const logUser = email => ({
    type: SIGNED_IN,
    email
});

export const setGoals = goals => ({
    type: SET_GOALS,
    goals
});

export const setCompleted = completedGoals => ({
    type: SET_COMPLETED,
    completedGoals
});
