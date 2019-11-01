import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RawdataComponent } from './entity/rawdata/rawdata.component';

const routes: Routes = [
  {
    path: 'rawdata',
    component: RawdataComponent
  },
  // {
  //   path: 'profile',
  //   loadChildren: './profile/profile.module#ProfileModule'
  // },
  // {
  //   path: 'editor',
  //   loadChildren: './editor/editor.module#EditorModule'
  // },
  // {
  //   path: 'article',
  //   loadChildren: './article/article.module#ArticleModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
