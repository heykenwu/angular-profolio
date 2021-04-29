import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { ViewerComponent } from './viewer/viewer.component';
import { FullComponent } from './layout/full/full.component';
import { NfcBoxComponent } from './projects/nfc-box/nfc-box.component';
import { SudokuSolverComponent } from './projects/sudoku-solver/sudoku-solver.component';
import { GisComponent } from './projects/gis/gis.component';
import { StegoComponent } from './projects/stego/stego.component';
import { PacketSniffingComponent } from './projects/packet-sniffing/packet-sniffing.component';
import { CovertChannelComponent } from './projects/covert-channel/covert-channel.component';
import { DnsSpoofingComponent } from './projects/dns-spoofing/dns-spoofing.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', component: BlogComponent },
      { path: 'blogDetail/:id', component: BlogDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'work', component: WorkComponent },
      { path: 'viewer', component: ViewerComponent },
      { path: 'nfc-box', component: NfcBoxComponent },
      { path: 'sudoku-solver', component: SudokuSolverComponent },
      { path: 'gis', component: GisComponent },
      { path: 'stego', component: StegoComponent },
      { path: 'packet-sniffing', component: PacketSniffingComponent},
      {path: 'covert-channel', component: CovertChannelComponent},
      {path: 'dns-spoofing', component:DnsSpoofingComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
