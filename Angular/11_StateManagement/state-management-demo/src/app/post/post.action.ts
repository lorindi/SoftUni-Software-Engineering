import { Action } from '@ngrx/store';

// TYPES
export const EDIT = '[Post] Edit';
export const RESET = '[Post] Reset';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';

// ACTIONS
export class Edit implements Action {
  readonly type = EDIT;

  constructor(public payload: string) {}
}

export class Reset implements Action {
  readonly type = RESET;
}

export class Upvote implements Action {
  readonly type = UPVOTE;
}

export class Downvote implements Action {
  readonly type = DOWNVOTE;
}

export type All = Upvote | Downvote | Reset | Edit;
