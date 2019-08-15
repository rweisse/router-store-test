import { Params, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';


export interface RouterStateUrl  {
    url: string;
    queryParams: Params;
    params: Params;
    random: number;
}

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl > {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl  {
        const { url, root: { queryParams } } = routerState;
        const random = Math.random();
        console.warn(`CustomRouterStateSerializer called by ${url}, random: ${random}`);
        let state: ActivatedRouteSnapshot = routerState.root;
        while(state.firstChild){
            state = state.firstChild;
        }
        const { params } = state;
        return {url, queryParams, params, random };
    }
}