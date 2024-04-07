import * as PostAction from './post.action';
import { Post } from './post.type';

export type Action = PostAction.All;

// initial state
const defaultState: Post = {
  text: 'I am the default text',
  likes: 0,
};

// fn if you want to use?
function newState(state: Post, newState: Post) {
  return { ...state, ...newState };
}

// Implementation of reduce. Default value is important!
export function postReducer(state: Post = defaultState, action: Action) {
  switch (action.type) {
    case PostAction.DOWNVOTE:
      return newState(state, {
        likes: state?.likes !== undefined ? state.likes - 1 : 0,
      });

    case PostAction.UPVOTE:
      return {
        ...state,
        likes: state?.likes !== undefined ? state.likes + 1 : 0,
      };

    case PostAction.EDIT:
      return newState(state, { text: action.payload });

    case PostAction.RESET:
      return defaultState;

    default:
      return state;
  }
}

//  POST  -> [POST] Create, Update, Delete, Read
//  THEME -> [THEME] Create, Update, Delete, Read
//  USER  -> [USER] Create, Update, Delete, Read
