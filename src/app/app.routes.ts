
import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {ContactsDetailComponentComponent} from "./contacts-detail-component/contacts-detail-component.component";
import {ContactsEditorComponent} from "./contacts-editor/contacts-editor.component";
import {ContactsDetailViewComponent} from "./contacts-detail-view/contacts-detail-view.component";
import {ContactsCreatorComponent} from "./contacts-creator/contacts-creator.component";
import {ContactsDashboardComponent} from "./contacts-dashboard/contacts-dashboard.component";
import {AboutComponent} from "./about/about.component";
import {CanDeactivateContactsEditorGuard} from "./contacts-editor/CanDeactivateContactsEditorGuard";
import {ContactResolver} from "./shared/contacts.resolver";
export const APP_ROUTES = [
  //{ path: '', component: ContactsListComponent },
  { path: 'contact', component: ContactsListComponent },
  { path: 'contact/new', component: ContactsCreatorComponent },
//  { path: 'contact/:id', component: ContactsDetailViewComponent },
//  { path: 'contact/:id/edit', component: ContactsEditorComponent },
  { path: '', component: ContactsDashboardComponent,
      children: [{ path: '', redirectTo: 'contact/0', pathMatch: 'full' },
        { path: 'contact/:id', component: ContactsDetailViewComponent, resolve: {contact: ContactResolver} },
        { path: 'contact/:id/edit', component: ContactsEditorComponent,
            resolve: {contact: ContactResolver},
            canDeactivate: [CanDeactivateContactsEditorGuard] }]},
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
]
