import { TOGGLE_NAV_MENU } from '../actions';

export const navMiddleware = store => next => action => {
  if (action.type === TOGGLE_NAV_MENU) {
    if (action.status) {
      document.body.classList.add('nav-opened');
    } else {
      document.body.classList.remove('nav-opened');
    }
  }
  next(action);
};
