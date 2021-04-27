import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppsRoutingModule } from './apps-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppsComponent } from './apps.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';

import { ServiceblogService } from './blog/blog-service.service';
import { RelayOnComponent } from './about/About-Components/relay-on/relay-on.component';
import { TopContentComponent } from './about/About-Components/top-content/top-content.component';

import { FullComponent } from './layout/full/full.component';

import { BannerComponent } from './shared/banner/banner.component';
import { BannerNavigationComponent } from './shared/banner-navigation/banner-navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BlogFeaturesComponent } from './blog/blog-features/blog-features/blog-features.component';
import { BlogFeaturesRightComponent } from './blog/blog-features-right/blog-features-right.component';
import { WorkComponent } from './work/work.component';
import { ViewerComponent } from './viewer/viewer.component';
import { MatCardModule } from '@angular/material/card';
import { CardPjComponent } from './work/card-pj/card-pj.component';
import {MatButtonModule} from '@angular/material/button';
import { NfcBoxComponent } from './projects/nfc-box/nfc-box.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { SudokuSolverComponent } from './projects/sudoku-solver/sudoku-solver.component';

@NgModule({
  declarations: [
    AppsComponent,
    BlogComponent,
    AboutComponent,
    BlogDetailComponent,
    RelayOnComponent,
    TopContentComponent,
    FullComponent,
    BannerComponent,
    // BannerContentComponent,
    BannerNavigationComponent,
    FooterComponent,
    BlogFeaturesComponent,
    BlogFeaturesRightComponent,
    WorkComponent,
    ViewerComponent,
    CardPjComponent,
    NfcBoxComponent,
    SudokuSolverComponent,
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    YouTubePlayerModule
  ],
  providers: [ServiceblogService],
})
export class AppsModule {}
