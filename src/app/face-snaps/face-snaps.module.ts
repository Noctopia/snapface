import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FaceSnapListComponent } from './component/face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './component/face-snap/face-snap.component';
import { NewFaceSnapComponent } from './component/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './component/single-face-snap/single-face-snap.component';
import { FaceSnapsRoutingModule } from './face-snaps-routing.module';

@NgModule({
  declarations: [
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FaceSnapsRoutingModule],
  exports: [
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
  ],
})
export class FaceSnapsModule {}
