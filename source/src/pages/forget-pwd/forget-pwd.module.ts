import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgetPwdPage } from './forget-pwd';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  declarations: [
    ForgetPwdPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ForgetPwdPage),
  ],
})
export class ForgetPwdPageModule {}
