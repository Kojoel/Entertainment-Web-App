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


// Bookmark selectors
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


// Search selectors
export const selectSearchQuery = createSelector(
  selectShowState,
  (state: ShowState) => state.searchQuery
);

export const selectSearchResults = createSelector(
  selectShowState,
  (state: ShowState) => state.searchResults
);

export const selectFilteredShows = createSelector(
  selectAllShows,
  selectSearchQuery,
  (shows, query) => {
    if (!query) return shows;
    return shows.filter(show => 
      show.title.toLowerCase().includes(query.toLowerCase())
    );
  }
);