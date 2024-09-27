import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, debounceTime, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { ApiService } from '../services/api.service';
import * as ShowActions from '../store/home.actions';
import { selectAllShows } from './home.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class ShowEffects {
    private readonly STORAGE_KEY = 'media_data';

    constructor(
        private actions$: Actions,
        private apiService: ApiService,
        private store: Store
    ) {}

    // Effect to load shows
    loadShows$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ShowActions.loadShows),
            switchMap(() => {
                const storedData = localStorage.getItem(this.STORAGE_KEY);
                if (storedData) {
                    // If data exists in local storage, use it
                    return of(JSON.parse(storedData));
                } else {
                    // If local storage is empty, fetch from JSON file
                    return this.apiService.getMediaData();
                }
            }),
            map((shows: any) => {
                // Save the data to local storage
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(shows));
                return ShowActions.loadShowsSuccess({ shows });
            }),
            catchError((error) => of(ShowActions.loadShowsFailure({ error })))
        )
    );
        
    // Effect to udpate local storage 
    updateLocalStorage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(
                ShowActions.loadShowsSuccess,
                ShowActions.toggleBookmark
            ),
            withLatestFrom(this.store.select(selectAllShows)),
            tap(([action, shows]) => {
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(shows));
            })
        ),
        { dispatch: false }
    );


//     searchShows$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ShowActions.searchShow),
//       debounceTime(300),
//       switchMap(({ query }) =>
//         this.apiService.getMediaData(query).pipe(
//           map(results => ShowActions.searchShowSuccess({ results })),
//           catchError(error => of(ShowActions.searchShowFailure({ error })))
//         )
//       )
//     )
//   );

}
