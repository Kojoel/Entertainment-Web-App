import { createAction, props } from "@ngrx/store";
import { Show } from "../models/media.model";


export const loadShows = createAction('[Home] Load Shows');
export const loadShowsSuccess = createAction('[Home] Load Shows Success', props<{ shows: Show[] }>());
export const loadShowsFailure = createAction('[Home] Load Shows Failure', props<{ error: any }>());

export const toggleBookmark = createAction(
    '[Home] Toggle Bookmark',
    props<{ title: string }>()
);

// For search component
export const setSearchQuery = createAction(
    '[Search] Set Search Query',
    props<{ query: string }>()
);
  
// export const clearSearchQuery = createAction('[Search] Clear Search Query');

// export const searchShow = createAction(
//     '[Search] Search Shows',
//     props<{ query: string }>()
// );
  
// export const searchShowSuccess = createAction(
//     '[Search] Search Movies Success',
//     props<{ results: Show[] }>()
// );
  
// export const searchShowFailure = createAction(
//     '[Search] Search Movies Failure',
//     props<{ error: any }>()
// );