import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MdDialogRef, MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import {ContactsEditorComponent} from "./contacts-editor.component";
import {ConfirmDeactivationDialogComponent} from "../confirm-deactivation-dialog/confirm-deactivation-dialog.component";

@Injectable()
export class CanDeactivateContactsEditorGuard implements CanDeactivate<ContactsEditorComponent> {

  dialogRef: MdDialogRef<ConfirmDeactivationDialogComponent>;

  constructor(public dialog: MdDialog) {}

  canDeactivate(component: ContactsEditorComponent) {
    if (component.confirmationNeeded) {
      this.dialogRef = this.dialog.open(ConfirmDeactivationDialogComponent, {
        disableClose: false
      });

      return this.dialogRef.afterClosed();
    }
    return Observable.of(true);
  }
}

