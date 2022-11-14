import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, ParamMap, PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup } from '@angular/router';
import { map, Subject, takeUntil } from 'rxjs';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public project!: any;
  public environments!: any;
  public selectedEnvironmentUuid!: string;

  private _destroyed$ = new Subject<any>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _projectsSerivce: ProjectsService
  ) { }

  // ===================
  // lifecycle
  // ===================

  ngOnInit(): void {
    this.project = this._projectsSerivce.project;
    this.environments = this._projectsSerivce.environments;

    this._activatedRoute.queryParamMap
      .pipe(
        map((params: ParamMap) => params.get('environment')),
        takeUntil(this._destroyed$)
      )
      .subscribe(queryParam => {
        this.selectedEnvironmentUuid = (queryParam && queryParam.length)
          ? queryParam
          : this._projectsSerivce.defaultEnvironment.uuid;

        this._configureRouting(this.selectedEnvironmentUuid);
      });

  }

  ngOnDestroy(): void {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }

  // ===================
  // interactions
  // ===================

  environmentSelected(selectedEnviornmentUuid: string) {
    this._configureRouting(selectedEnviornmentUuid);
  }

  // ===================
  // helpers
  // ===================

  private _configureRouting(selectedEnvironment: string): void {
    const navigationExtras: NavigationExtras = {
      relativeTo: this._activatedRoute,
      queryParamsHandling: 'merge',
      queryParams: { environment: selectedEnvironment }
    };
    
    const route = this.project.ignoreGettingStarted ? 'integrations' : 'getting-started';

    this._router.navigate([route], navigationExtras);
  }

}
