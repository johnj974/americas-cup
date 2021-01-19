import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsComponent } from './teams.component';
import { TeamsRoutingModule } from './teams-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TeamsComponent],
  imports: [CommonModule, TeamsRoutingModule, RouterModule, SharedModule],
  exports: [TeamsComponent],
})
export class TeamsModule {}
