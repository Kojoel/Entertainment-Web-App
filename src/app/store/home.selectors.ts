import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShowState } from "./home.reducers";

export const selectShowState = createFeatureSelector<ShowState>('shows');

export const selectAllShows = createSelector(
  selectShowState,
  (state: ShowState) => state.allshows
);

export const selectMovies = createSelector(
  selectShowState,
  (state: ShowState) => state.allshows.filter((item) => item.category === 'Movie')
);

export const selectTVSeries = createSelector(
  selectShowState,
  (state: ShowState) => state.allshows.filter((item) => item.category === 'TV Series')
);

export const selectBookmarkedShows = createSelector(
  selectShowState,
  (state: ShowState) => state.allshows.filter((item) => item.isBookmarked)
);

export const selectBookmarkedMovies= createSelector(
  selectShowState,
  (state: ShowState) => state.allshows.filter((item) => item.isBookmarked && item.category === "Movie")
);

export const selectBookmarkedSeries= createSelector(
  selectShowState,
  (state: ShowState) => state.allshows.filter((item) => item.isBookmarked && item.category === "TV Series")
);