import { FormBuilder, Validators } from '@angular/forms';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
 import { DataProvider } from '../providers/data/data';

 import { HttpModule } from '@angular/http';
 
@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,File,FilePath,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,

  ]
})
export class AppModule {}
