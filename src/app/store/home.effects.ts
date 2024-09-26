// invoice.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApiService } from '../services/api.service';
import * as ShowActions from '../store/home.actions';

@Injectable()
export class ShowEffects {
    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) {}
  
    // Effect to load shows
    loadShows$ = createEffect(() =>
        this.actions$.pipe(
        ofType(ShowActions.loadShows),
        mergeMap(() =>
            this.apiService.getMediaData().pipe(  // Assuming you have a method getShows() in ApiService
            map((shows: any) => {
                return ShowActions.loadShowsSuccess({ shows })
            },
            catchError((error) => of(ShowActions.loadShowsFailure({ error })))
            )
            )
        )
        )
    );
}
