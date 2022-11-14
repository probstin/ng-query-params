import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable()
export class ProjectsService {

  private _project$ = new BehaviorSubject<any>(null);
  private _environments$ = new BehaviorSubject<any>(null);

  public project$ = this._project$.asObservable();
  public environments$ = this._environments$.asObservable();
  
  constructor() { }

  public getProject(uuid: string | null): Observable<any> {
    return of({ name: 'Fancy Pants', ignoreGettingStarted: true })
      .pipe(tap(project => this._project$.next(project)));
  }

  public getProjectEnvironments(): Observable<any[]> {
    return of([
      { uuid: 'jklja9121399302', name: 'Development' },
      { uuid: 'ksa9jnksdljahdh', name: 'Test' },
      { uuid: '20idjasl9388ksk', name: 'Production' }
    ])
      .pipe(tap(environments => this._environments$.next(environments)));
  }

  public get project() {
    return this._project$.value;
  }

  public get environments() {
    return this._environments$.value;
  }

  public get defaultEnvironment() {
    return this._environments$.value[0];
  }

}
