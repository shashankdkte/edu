import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BrandLinkComponent } from './sidebar/brand-link/brand-link.component';
import { SidebarSearchComponent } from './sidebar/sidebar-search/sidebar-search.component';
import { NavComponent } from './sidebar/nav/nav.component';
import { NavItemComponent } from './sidebar/nav-item/nav-item.component';
import { UserPanelComponent } from './sidebar/user-panel/user-panel.component';
import { ClassDashboardComponent } from './class/class-dashboard/class-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EnrollmentTrendsComponent } from './dashboards/classes/enrollment-trends/enrollment-trends.component';
import { ClassListComponent } from './class/class-list/class-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TabsComponent } from './components/tabs/tabs.component';
import { ScheduleStepperComponent } from './schedule-stepper/schedule-stepper.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandLinkComponent,
    SidebarSearchComponent,
    NavComponent,
    NavItemComponent,
    UserPanelComponent,
    ClassDashboardComponent,
    NotFoundComponent,
    EnrollmentTrendsComponent,
    ClassListComponent,

    TabsComponent,
      ScheduleStepperComponent,
      ConfirmDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync(),
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
