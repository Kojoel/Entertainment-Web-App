import { createReducer, on } from "@ngrx/store";
import { Show } from "../models/media.model";
import * as ShowActions from '../store/home.actions';

export interface ShowState {
    allshows: Show[];
    filteredShows: Show[];
    loading: boolean;
    error: any;
}
  
export const initialState: ShowState = {
    allshows: [],
    filteredShows: [],
    loading: false,
    error: null
};
  

export const showReducer = createReducer(
    initialState,
    on(ShowActions.loadShows, state => ({ ...state, loading: true })),
    on(ShowActions.loadShowsSuccess, (state, { shows }) => ({
      ...state,
      allshows: shows,
      filteredShows: shows,
      loading: false
    })),
    on(ShowActions.loadShowsFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    })),
  );