
import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {ContactsDetailComponentComponent} from "./contacts-detail-component/contacts-detail-component.component";
import {ContactsEditorComponent} from "./contacts-editor/contacts-editor.component";
import {ContactsDetailViewComponent} from "./contacts-detail-view/contacts-detail-view.component";
import {ContactsCreatorComponent} from "./contacts-creator/contacts-creator.component";
import {ContactsDashboardComponent} from "./contacts-dashboard/contacts-dashboard.component";
import {AboutComponent} from "./about/about.component";
export const APP_ROUTES = [
  //{ path: '', component: ContactsListComponent },
  { path: 'contact', component: ContactsListComponent },
  { path: 'contact/new', component: ContactsCreatorComponent },
//  { path: 'contact/:id', component: ContactsDetailViewComponent },
//  { path: 'contact/:id/edit', component: ContactsEditorComponent },
  { path: '', component: ContactsDashboardComponent,
      children: [{ path: '', redirectTo: 'contact/0', pathMatch: 'full' },
        { path: 'contact/:id', component: ContactsDetailViewComponent },
        { path: 'contact/:id/edit', component: ContactsEditorComponent }]},
  { path: 'about', component: AboutComponent },
]
