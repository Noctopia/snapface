import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './component/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './component/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './component/single-face-snap/single-face-snap.component';

const routes: Routes = [
  { path: 'create', component: NewFaceSnapComponent },
  { path: ':id', component: SingleFaceSnapComponent },
  { path: '', component: FaceSnapListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaceSnapsRoutingModule {}
