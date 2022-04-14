import { NgModule } from '@angular/core';
import { RutPageComponent } from './pages/rut-page/rut-page.component';
import { PassPageComponent } from './pages/pass-page/pass-page.component';
import { TemporalCodePageComponent } from './pages/temporal-code-page/temporal-code-page.component';

@NgModule({
  declarations: [
    RutPageComponent, PassPageComponent, TemporalCodePageComponent
  ],
  imports: [
    // BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
