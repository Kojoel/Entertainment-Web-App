import { createReducer, on } from "@ngrx/store";
import { Show } from "../models/media.model";
import * as ShowActions from '../store/home.actions';

export interface ShowState {
    allshows: Show[];
    loading: boolean;
    error: any;
}
  
export const initialState: ShowState = {
    allshows: [],
    loading: false,
    error: null
};
  

export const showReducer = createReducer(
    initialState,
    on(ShowActions.loadShows, state => ({ ...state, loading: true })),
    on(ShowActions.loadShowsSuccess, (state, { shows }) => ({
      ...state,
      allshows: shows,
    //   filteredShows: shows,
      loading: false
    })),
    on(ShowActions.loadShowsFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    })),

    on(ShowActions.toggleBookmark, (state, { title }) => ({
      ...state,
      shows: state.allshows.map(item => {
        item.title === title? { ...item, isBookmarked: !item.isBookmarked } : item
      }),
      // shows: state.shows.map((item) =>
      //   item.id === id ? { ...item, isBookmarked: !item.isBookmarked } : item
      // ),
    }))
  );