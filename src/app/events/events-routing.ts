import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {EventListComponent} from "./event-list/event-list.component";
import {EventCreateComponent} from "./event-create/event-create.component";
import {EventEditComponent} from "./event-edit/event-edit.component";
import {EventViewComponent} from "./event-view/event-view.component";

export const EVENTS_ROUTES: Routes = [
  { path: '', component: EventListComponent },
  { path: 'create', component: EventCreateComponent },
  { path: ':id/edit', component: EventEditComponent },
  { path: ':id', component: EventViewComponent }
]
