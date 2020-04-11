import { TOGGLE_NAV_MENU } from '../actions';
import { combineReducers } from 'redux';

type NavState = {
  navOpened: boolean
}

const initialNavState: NavState = {navOpened: false}

function navStatus(state = initialNavState, action: any) {
  switch (action.type) {
    case TOGGLE_NAV_MENU:
      return {navOpened: action.status}
  }
  return state;
}

export const rootReducer = combineReducers({
  navStatus
})
