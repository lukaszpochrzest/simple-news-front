import {Routes} from '@angular/router';
import {BrowseComponent} from "./browse/browse.component";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'browse', pathMatch: 'full' },
    { path: 'browse', component: BrowseComponent }
];

