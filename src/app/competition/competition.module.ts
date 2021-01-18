import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompetitionRoutingModule } from './competion-routing.module';
import { CompetitionComponent } from './competition.component';

@NgModule({
  declarations: [CompetitionComponent],
  imports: [CommonModule, CompetitionRoutingModule, FormsModule],
  exports: [CompetitionComponent],
})
export class CompetitionModule {}
