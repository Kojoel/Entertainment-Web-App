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
    on(ShowActions.loadShowsSuccess, (state, { shows }) => ( console.log("Shows in reducer: ", shows),{
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
      allshows: state.allshows.map(item => {
          return item.title === title 
              ? { ...item, isBookmarked: !item.isBookmarked } 
              : item;
      }),
    }))
  );