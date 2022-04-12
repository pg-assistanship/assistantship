import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminpageComponent } from './admin-login/adminpage/adminpage.component';
import { AdminUniversityViewpageComponent } from './admin-university/admin-university-viewpage/admin-university-viewpage.component';
import { AdminUniversityComponent } from './admin-university/admin-university.component';
import { ActChennaiDetailsComponent } from './colleges/act-chennai/act-chennai-details/act-chennai-details.component';
import { ActChennaiViewformComponent } from './colleges/act-chennai/act-chennai-viewform/act-chennai-viewform.component';
import { ActChennaiComponent } from './colleges/act-chennai/act-chennai.component';
import { AlagapaDetailsComponent } from './colleges/alagapa/alagapa-details/alagapa-details.component';
import { AlagapaViewformComponent } from './colleges/alagapa/alagapa-viewform/alagapa-viewform.component';
import { AlagapaComponent } from './colleges/alagapa/alagapa.component';
import { AnnaUniversityCoimbatoreDetailsComponent } from './colleges/anna-university-coimbatore/anna-university-coimbatore-details/anna-university-coimbatore-details.component';
import { AnnaUniversityCoimbatoreViewformComponent } from './colleges/anna-university-coimbatore/anna-university-coimbatore-viewform/anna-university-coimbatore-viewform.component';
import { AnnaUniversityCoimbatoreComponent } from './colleges/anna-university-coimbatore/anna-university-coimbatore.component';
import { AnnaUniversityMaduraiDetailsComponent } from './colleges/anna-university-madurai/anna-university-madurai-details/anna-university-madurai-details.component';
import { AnnaUniversityMaduraiViewformComponent } from './colleges/anna-university-madurai/anna-university-madurai-viewform/anna-university-madurai-viewform.component';
import { AnnaUniversityMaduraiComponent } from './colleges/anna-university-madurai/anna-university-madurai.component';
import { AnnaUniversityTirunelveliDetailsComponent } from './colleges/anna-university-tirunelveli/anna-university-tirunelveli-details/anna-university-tirunelveli-details.component';
import { AnnaUniversityTirunelveliViewformComponent } from './colleges/anna-university-tirunelveli/anna-university-tirunelveli-viewform/anna-university-tirunelveli-viewform.component';
import { AnnaUniversityTirunelveliComponent } from './colleges/anna-university-tirunelveli/anna-university-tirunelveli.component';
import { CegGuindyDetailsComponent } from './colleges/ceg-guindy/ceg-guindy-details/ceg-guindy-details.component';
import { CegGuindyViewformComponent } from './colleges/ceg-guindy/ceg-guindy-viewform/ceg-guindy-viewform.component';
import { CegGuindyComponent } from './colleges/ceg-guindy/ceg-guindy.component';
import { CitCoimbatoreDetailsComponent } from './colleges/cit-coimbatore/cit-coimbatore-details/cit-coimbatore-details.component';
import { CitCoimbatoreViewformComponent } from './colleges/cit-coimbatore/cit-coimbatore-viewform/cit-coimbatore-viewform.component';
import { CitCoimbatoreComponent } from './colleges/cit-coimbatore/cit-coimbatore.component';
import { GceBargurDetailsComponent } from './colleges/gce-bargur/gce-bargur-details/gce-bargur-details.component';
import { GceBargurViewformComponent } from './colleges/gce-bargur/gce-bargur-viewform/gce-bargur-viewform.component';
import { GceBargurComponent } from './colleges/gce-bargur/gce-bargur.component';
import { GceErodeDetailsComponent } from './colleges/gce-erode/gce-erode-details/gce-erode-details.component';
import { GceErodeViewformComponent } from './colleges/gce-erode/gce-erode-viewform/gce-erode-viewform.component';
import { GceErodeComponent } from './colleges/gce-erode/gce-erode.component';
import { GceSalemDetailsComponent } from './colleges/gce-salem/gce-salem-details/gce-salem-details.component';
import { GceSalemViewformComponent } from './colleges/gce-salem/gce-salem-viewform/gce-salem-viewform.component';
import { GceSalemComponent } from './colleges/gce-salem/gce-salem.component';
import { GceTirunelveliDetailsComponent } from './colleges/gce-tirunelveli/gce-tirunelveli-details/gce-tirunelveli-details.component';
import { GceTirunelveliViewformComponent } from './colleges/gce-tirunelveli/gce-tirunelveli-viewform/gce-tirunelveli-viewform.component';
import { GceTirunelveliComponent } from './colleges/gce-tirunelveli/gce-tirunelveli.component';
import { GctCoimbatoreDetailsComponent } from './colleges/gct-coimbatore/gct-coimbatore-details/gct-coimbatore-details.component';
import { GctCoimbatoreViewformComponent } from './colleges/gct-coimbatore/gct-coimbatore-viewform/gct-coimbatore-viewform.component';
import { GctCoimbatoreComponent } from './colleges/gct-coimbatore/gct-coimbatore.component';
import { MitChennaiDetailsComponent } from './colleges/mit-chennai/mit-chennai-details/mit-chennai-details.component';
import { MitChennaiViewformComponent } from './colleges/mit-chennai/mit-chennai-viewform/mit-chennai-viewform.component';
import { MitChennaiComponent } from './colleges/mit-chennai/mit-chennai.component';
import { PeriyarVellorDetailsComponent } from './colleges/periyar-vellor/periyar-vellor-details/periyar-vellor-details.component';
import { PeriyarVellorViewformComponent } from './colleges/periyar-vellor/periyar-vellor-viewform/periyar-vellor-viewform.component';
import { PeriyarVellorComponent } from './colleges/periyar-vellor/periyar-vellor.component';
import { PsgCoimbatoreDetailsComponent } from './colleges/psg-coimbatore/psg-coimbatore-details/psg-coimbatore-details.component';
import { PsgCoimbatoreViewformComponent } from './colleges/psg-coimbatore/psg-coimbatore-viewform/psg-coimbatore-viewform.component';
import { PsgCoimbatoreComponent } from './colleges/psg-coimbatore/psg-coimbatore.component';
import { ThiagarajarMaduraiDetailsComponent } from './colleges/thiagarajar-madurai/thiagarajar-madurai-details/thiagarajar-madurai-details.component';
import { ThiagarajarMaduraiViewformComponent } from './colleges/thiagarajar-madurai/thiagarajar-madurai-viewform/thiagarajar-madurai-viewform.component';
import { ThiagarajarMaduraiComponent } from './colleges/thiagarajar-madurai/thiagarajar-madurai.component';
import { UniversityAriyalurDetailsComponent } from './colleges/university-ariyalur/university-ariyalur-details/university-ariyalur-details.component';
import { UniversityAriyalurViewformComponent } from './colleges/university-ariyalur/university-ariyalur-viewform/university-ariyalur-viewform.component';
import { UniversityAriyalurComponent } from './colleges/university-ariyalur/university-ariyalur.component';
import { UniversityDindigulDetailsComponent } from './colleges/university-dindigul/university-dindigul-details/university-dindigul-details.component';
import { UniversityDindigulViewformComponent } from './colleges/university-dindigul/university-dindigul-viewform/university-dindigul-viewform.component';
import { UniversityDindigulComponent } from './colleges/university-dindigul/university-dindigul.component';
import { UniversityKanchepuramDetailsComponent } from './colleges/university-kanchepuram/university-kanchepuram-details/university-kanchepuram-details.component';
import { UniversityKanchepuramViewformComponent } from './colleges/university-kanchepuram/university-kanchepuram-viewform/university-kanchepuram-viewform.component';
import { UniversityKanchepuramComponent } from './colleges/university-kanchepuram/university-kanchepuram.component';
import { UniversityNagercoilDetailsComponent } from './colleges/university-nagercoil/university-nagercoil-details/university-nagercoil-details.component';
import { UniversityNagercoilViewformComponent } from './colleges/university-nagercoil/university-nagercoil-viewform/university-nagercoil-viewform.component';
import { UniversityNagercoilComponent } from './colleges/university-nagercoil/university-nagercoil.component';
import { UniversityPanrutiComponent } from './colleges/university-panruti/university-panruti.component';
import { UniversityPanrutiiDetailsComponent } from './colleges/university-panruti/university-panrutii-details/university-panrutii-details.component';
import { UniversityPanrutiiViewformComponent } from './colleges/university-panruti/university-panrutii-viewform/university-panrutii-viewform.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ViewFormComponent } from './view-form/view-form.component';

const routes: Routes = [

  {
    path: "", component: LoginComponent,
  },

  {
    path: 'admin-login',
    children: [
      { path: '', component: AdminLoginComponent, },
      { path: 'admin', component: AdminpageComponent, }
    ]
  },
  {
    path: 'uni-login',
    children: [
      {
        path: '', component: AdminUniversityComponent
      },
      {
        path: 'uni-admin', component: AdminUniversityViewpageComponent
      }
    ]
  },


  { path: 'gce-salem', component: GceSalemComponent },
  { path: 'gce-viewform', component: GceSalemViewformComponent },
  {
    path: 'gce-salem-details',
    children: [
      { path: '', component: GceSalemDetailsComponent },
    ]
  },


  { path: 'act-chennai', component: ActChennaiComponent },
  {
    path: 'act-chennai-details',
    children: [
      { path: '', component: ActChennaiDetailsComponent },
      { path: 'act-chennai-form', component: ActChennaiViewformComponent }
    ]
  },

  { path: 'alagapa', component: AlagapaComponent },
  {
    path: 'alagapa-details',
    children: [
      { path: '', component: AlagapaDetailsComponent },
      { path: 'alagapa-viewform', component: AlagapaViewformComponent }
    ]
  },

  { path: 'uni-coimbatore', component: AnnaUniversityCoimbatoreComponent },
  {
    path: 'uni-coimbatore-details',
    children: [
      { path: '', component: AnnaUniversityCoimbatoreDetailsComponent },
      { path: 'uni-coimbatore-viewform', component: AnnaUniversityCoimbatoreViewformComponent }
    ]
  },

  { path: 'uni-madurai', component: AnnaUniversityMaduraiComponent },
  {
    path: 'uni-madurai-details',
    children: [
      { path: '', component: AnnaUniversityMaduraiDetailsComponent },
      { path: 'uni-madurai-viewform', component: AnnaUniversityMaduraiViewformComponent }
    ]
  },

  { path: 'uni-tirunelveli', component: AnnaUniversityTirunelveliComponent },
  {
    path: 'uni-tirunelveli-details',
    children: [
      { path: '', component: AnnaUniversityTirunelveliDetailsComponent },
      { path: 'uni-tirunelveli-viewform', component: AnnaUniversityTirunelveliViewformComponent }
    ]
  },

  { path: 'ceg-guindy', component: CegGuindyComponent },
  {
    path: 'ceg-guindy-details',
    children: [
      { path: '', component: CegGuindyDetailsComponent },
      { path: 'ceg-guindy-viewform', component: CegGuindyViewformComponent }
    ]
  },

  { path: 'cit-coimbatore', component: CitCoimbatoreComponent },
  {
    path: 'cit-coimbatore-details',
    children: [
      { path: '', component: CitCoimbatoreDetailsComponent },
      { path: 'cit-coimbatore-viewform', component: CitCoimbatoreViewformComponent }
    ]
  },

  { path: 'gce-bargur', component: GceBargurComponent },
  {
    path: 'gce-bargur-details',
    children: [
      { path: '', component: GceBargurDetailsComponent },
      { path: 'gce-bargur-viewform', component: GceBargurViewformComponent }
    ]
  },

  { path: 'gce-erode', component: GceErodeComponent },
  {
    path: 'gce-erode-details',
    children: [
      { path: '', component: GceErodeDetailsComponent },
      { path: 'gce-erode-viewform', component: GceErodeViewformComponent }
    ]
  },

  { path: 'gce-tirunelveli', component: GceTirunelveliComponent },
  {
    path: 'gce-tirunelveli-details',
    children: [
      { path: '', component: GceTirunelveliDetailsComponent },
      { path: 'gce-tirunelveli-viewform', component: GceTirunelveliViewformComponent }
    ]
  },

  { path: 'gct-coimbatore', component: GctCoimbatoreComponent },
  {
    path: 'gct-coimbatore-details',
    children: [
      { path: '', component: GctCoimbatoreDetailsComponent },
      { path: 'gct-coimbatore-viewform', component: GctCoimbatoreViewformComponent }
    ]
  },

  { path: 'mit-chennai', component: MitChennaiComponent },
  {
    path: 'mit-chennai-details',
    children: [
      { path: '', component: MitChennaiDetailsComponent },
      { path: 'mit-chennai-viewform', component: MitChennaiViewformComponent }
    ]
  },

  { path: 'periyar-vellor', component: PeriyarVellorComponent },
  {
    path: 'periyar-vellor-details',
    children: [
      { path: '', component: PeriyarVellorDetailsComponent },
      { path: 'periyar-vellor-viewform', component: PeriyarVellorViewformComponent }
    ]
  },

  { path: 'psg-coimbatore', component: PsgCoimbatoreComponent },
  {
    path: 'psg-coimbatore-details',
    children: [
      { path: '', component: PsgCoimbatoreDetailsComponent },
      { path: 'psg-coimbatore-viewform', component: PsgCoimbatoreViewformComponent }
    ]
  },

  { path: 'thiagarajar-madurai', component: ThiagarajarMaduraiComponent },
  {
    path: 'thiagarajar-madurai-details',
    children: [
      { path: '', component: ThiagarajarMaduraiDetailsComponent },
      { path: 'thiagarajar-madurai-viewform', component: ThiagarajarMaduraiViewformComponent }
    ]
  },

  { path: 'uni-ariyalur', component: UniversityAriyalurComponent },
  {
    path: 'uni-ariyalur-details',
    children: [
      { path: '', component: UniversityAriyalurDetailsComponent },
      { path: 'uni-ariyalur-viewform', component: UniversityAriyalurViewformComponent }
    ]
  },

  { path: 'uni-dindigul', component: UniversityDindigulComponent },
  {
    path: 'uni-dindigul-details',
    children: [
      { path: '', component: UniversityDindigulDetailsComponent },
      { path: 'uni-dindigul-viewform', component: UniversityDindigulViewformComponent }
    ]
  },

  { path: 'uni-kanchepuram', component: UniversityKanchepuramComponent },
  {
    path: 'uni-kanchepuram-details',
    children: [
      { path: '', component: UniversityKanchepuramDetailsComponent },
      { path: 'uni-kanchepuram-viewform', component: UniversityKanchepuramViewformComponent }
    ]
  },

  { path: 'uni-nagercoil', component: UniversityNagercoilComponent },
  {
    path: 'uni-nagercoil-details',
    children: [
      { path: '', component: UniversityNagercoilDetailsComponent },
      { path: 'uni-nagercoil-viewform', component: UniversityNagercoilViewformComponent }
    ]
  },

  { path: 'uni-panruti', component: UniversityPanrutiComponent },
  {
    path: 'uni-panruti-details',
    children: [
      { path: '', component: UniversityPanrutiiDetailsComponent },
      { path: 'uni-panruti-viewform', component: UniversityPanrutiiViewformComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
