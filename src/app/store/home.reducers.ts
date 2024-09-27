import { createReducer, on } from "@ngrx/store";
import { Show } from "../models/media.model";
import * as ShowActions from '../store/home.actions';

export interface ShowState {
    allshows: Show[];
    searchQuery: string;
    searchResults: any[];
    loading: boolean;
    error: any;
}
  
export const initialState: ShowState = {
    allshows: [],
    searchQuery: '',
    searchResults: [],
    loading: false,
    error: null
};
  

export const showReducer = createReducer(
    initialState,
    on(ShowActions.loadShows, state => ({ ...state, loading: true })),
    on(ShowActions.loadShowsSuccess, (state, { shows }) => ({
      ...state,
      allshows: shows,
      loading: false
    })),
    on(ShowActions.loadShowsFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    })),

    // Bookmark reducer
    on(ShowActions.toggleBookmark, (state, { title }) => ({
      ...state,
      allshows: state.allshows.map(item => {
          return item.title === title 
              ? { ...item, isBookmarked: !item.isBookmarked } 
              : item;
      }),
    })),

    // Search reducers
    on(ShowActions.setSearchQuery, (state, { query }) => (console.log(query),{
      ...state,
      searchQuery: query
    })),
    // on(ShowActions.clearSearchQuery, (state) => ({
    //   ...state,
    //   searchQuery: '',
    //   searchResults: []
    // })),
    // on(ShowActions.searchShow, (state) => ({
    //   ...state,
    //   loading: true
    // })),
    // on(ShowActions.searchShowSuccess, (state, { results }) => ({
    //   ...state,
    //   searchResults: results,
    //   loading: false
    // })),
    // on(ShowActions.searchShowFailure, (state, { error }) => ({
    //   ...state,
    //   error,
    //   loading: false
    // }))

  );