import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConvertPipe } from '../pipes/convert.pipe';
import { SharedModule } from '../shared/shared.module';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';

@NgModule({
  declarations: [NewsComponent, ConvertPipe],
  imports: [NewsRoutingModule, CommonModule, SharedModule],
  exports: [NewsComponent],
})
export class NewsModule {}
