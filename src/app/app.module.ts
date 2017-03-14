import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactsAppComponent } from './contacts.component';
import {ContactsService} from "./contacts.service";
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {APP_ROUTES} from "./app.routes";
import {RouterModule} from "@angular/router";
import { ContactsDetailComponentComponent } from './contacts-detail-component/contacts-detail-component.component';
import {HttpModule} from "@angular/http";
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import {EventBusService} from "./event-bus.service";
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { EmailAvailabilityValidatorDirective } from './email-availability-validator.directive';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from './about/about.component';
import { ConfirmDeactivationDialogComponent } from './confirm-deactivation-dialog/confirm-deactivation-dialog.component';
import {CanDeactivateContactsEditorGuard} from "./contacts-editor/CanDeactivateContactsEditorGuard";

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactsListComponent,
    ContactsDetailComponentComponent,
    ContactsDetailComponentComponent,
    ContactsEditorComponent,
    ContactsEditorComponent,
    ContactsDetailViewComponent,
    ContactsDetailViewComponent,
    TabComponent,
    TabsComponent,
    ContactsCreatorComponent,
    EmailValidatorDirective,
    EmailAvailabilityValidatorDirective,
    ContactsDashboardComponent,
    AboutComponent,
    ConfirmDeactivationDialogComponent],
  //entryComponent is nodig omdat dit niet via een selector opgeroepen wordt
  //anders wordt deze verwijderd bij tree-shaking :)
    entryComponents: [ConfirmDeactivationDialogComponent],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [ContactsAppComponent],
  providers: [ContactsService,
              EventBusService,
             {provide: 'ConfirmNavigationGuard',
              useValue: doConfirm},
    CanDeactivateContactsEditorGuard]
})
export class ContactsModule {

}

// Needs to be an exported function for AOT to work
export function doConfirm(component) {
  return !component.confirmationNeeded || window.confirm('Navigate away without saving?');
}



