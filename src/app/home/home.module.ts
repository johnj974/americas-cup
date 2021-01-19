import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingComponent } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
