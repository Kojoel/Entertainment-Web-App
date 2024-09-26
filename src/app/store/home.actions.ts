import { createAction, props } from "@ngrx/store";
import { Show } from "../models/media.model";


export const loadShows = createAction('[Shows] Load Shows');
export const loadShowsSuccess = createAction('[Shows] Load Shows Success', props<{ shows: Show[] }>());
export const loadShowsFailure = createAction('[Shows] Load Shows Failure', props<{ error: any }>());