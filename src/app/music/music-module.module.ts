import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicService } from './music-service';
import { MusicComponent } from './music.component';

@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MusicService
  ]
})


export class MusicModule { }
