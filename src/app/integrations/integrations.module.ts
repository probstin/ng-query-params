import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IntegrationsRoutingModule } from './integrations-routing.module';
import { IntegrationsComponent } from './integrations.component';

@NgModule({
  declarations: [
    IntegrationsComponent
  ],
  imports: [
    CommonModule,
    IntegrationsRoutingModule
  ]
})
export class IntegrationsModule { }
