import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CompetitionRoutingModule } from './competion-routing.module';
import { CompetitionComponent } from './competition.component';
// import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CompetitionComponent],
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    FormsModule,
    SharedModule,
    // HttpClientModule,
  ],
  exports: [CompetitionComponent],
})
export class CompetitionModule {}
