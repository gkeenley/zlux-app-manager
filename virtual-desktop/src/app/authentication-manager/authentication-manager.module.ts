

/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ZluxPopupManagerModule } from '@zlux/widgets';
import { LoginComponent } from './login/login.component';
import { AuthenticationManager } from './authentication-manager.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ZluxPopupManagerModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AuthenticationManager,
    /* Expose authentication manager to window managers */
    { provide: MVDHosting.Tokens.AuthenticationManagerToken, useExisting: AuthenticationManager }
  ]
})
export class AuthenticationModule {

}


/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright Contributors to the Zowe Project.
*/

