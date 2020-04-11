export const TOGGLE_NAV_MENU =  'TOGGLE_NAV_MENU';

export function toggleNav(status: boolean) {
  return {type: TOGGLE_NAV_MENU, status}
}
