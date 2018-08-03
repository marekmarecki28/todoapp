import { NgModule } from '@angular/core';

import { TodoappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TodoappSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TodoappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TodoappSharedCommonModule {}
