import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ShowState } from "./home.reducers";

export const selectShowState = createFeatureSelector<ShowState>('shows');

export const selectAllShows = createSelector(
  selectShowState,
  (state: ShowState) => state.allshows
);

export const selectFilteredShows = createSelector(
  selectShowState,
  (state: ShowState) => state.filteredShows
);