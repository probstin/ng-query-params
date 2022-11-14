import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { map, mergeMap, Observable } from 'rxjs';
import { ProjectsService } from './projects.service';

@Injectable()
export class ProjectsResolver implements Resolve<any> {

  constructor(private _projectsService: ProjectsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._projectsService
      .getProject(route.paramMap.get('uuid'))
      .pipe(mergeMap(project => this._projectsService
        .getProjectEnvironments()
        .pipe(map(environments => ({ ...project, environments }))))
      );
  }

}
