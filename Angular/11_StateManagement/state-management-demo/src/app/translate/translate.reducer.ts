import { Action } from '@ngrx/store';

const messageDefault = 'Hello!';

export function translateReducer(state = messageDefault, action: Action) {
  console.log({ action, state });

  switch (action.type) {
    case 'BG':
      return (state = 'Здрасти!');
    case 'EN':
      return (state = 'Hello!');
    case 'IT':
      return (state = 'Ciao!');

    default:
      return state;
  }
}
