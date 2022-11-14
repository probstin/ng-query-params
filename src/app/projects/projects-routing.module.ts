import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './containers/getting-started/getting-started.component';
import { ProjectsComponent } from './projects.component';
import { ProjectsResolver } from './projects.resolver';

const routes: Routes = [
  {
    path: ':uuid',
    component: ProjectsComponent,
    resolve: { project: ProjectsResolver },
    children: [
      { path: 'getting-started', component: GettingStartedComponent },
      { path: 'integrations', loadChildren: () => import('../integrations/integrations.module').then(m => m.IntegrationsModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
