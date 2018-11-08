import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';

import { ChatComponent } from './chat/chat';
import { ActionbarComponent } from './actionbar/actionbar';

@NgModule({
	declarations: [ChatComponent,
    ActionbarComponent],
	imports: [IonicModule],
	exports: [ChatComponent,
    ActionbarComponent]
})
export class ComponentsModule {}
