import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EnvironmentSelectorComponent } from './components/environment-selector/environment-selector.component';
import { GettingStartedComponent } from './containers/getting-started/getting-started.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';

@NgModule({
  declarations: [
    ProjectsComponent,
    EnvironmentSelectorComponent,
    GettingStartedComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [
    ProjectsService,
    ProjectsResolver
  ]
})
export class ProjectsModule { }
