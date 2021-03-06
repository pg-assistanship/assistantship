import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { AlagapaComponent } from './colleges/alagapa/alagapa.component';
import { GceTirunelveliComponent } from './colleges/gce-tirunelveli/gce-tirunelveli.component';
import { GceBargurComponent } from './colleges/gce-bargur/gce-bargur.component';
import { GceErodeComponent } from './colleges/gce-erode/gce-erode.component';
import { CegGuindyComponent } from './colleges/ceg-guindy/ceg-guindy.component';
import { ActChennaiComponent } from './colleges/act-chennai/act-chennai.component';
import { MitChennaiComponent } from './colleges/mit-chennai/mit-chennai.component';
import { AnnaUniversityCoimbatoreComponent } from './colleges/anna-university-coimbatore/anna-university-coimbatore.component';
import { AnnaUniversityTirunelveliComponent } from './colleges/anna-university-tirunelveli/anna-university-tirunelveli.component';
import { AnnaUniversityMaduraiComponent } from './colleges/anna-university-madurai/anna-university-madurai.component';
import { UniversityAriyalurComponent } from './colleges/university-ariyalur/university-ariyalur.component';
import { UniversityPanrutiComponent } from './colleges/university-panruti/university-panruti.component';
import { UniversityDindigulComponent } from './colleges/university-dindigul/university-dindigul.component';
import { UniversityKanchepuramComponent } from './colleges/university-kanchepuram/university-kanchepuram.component';
import { UniversityNagercoilComponent } from './colleges/university-nagercoil/university-nagercoil.component';
import { UniversityThirukkuvalaiComponent } from './colleges/university-thirukkuvalai/university-thirukkuvalai.component';
import { UniversityRamanathapuramComponent } from './colleges/university-ramanathapuram/university-ramanathapuram.component';
import { UniversityPattukodaiComponent } from './colleges/university-pattukodai/university-pattukodai.component';
import { UniversityThiruvannamalaiComponent } from './colleges/university-thiruvannamalai/university-thiruvannamalai.component';
import { UniversityThoothukudiComponent } from './colleges/university-thoothukudi/university-thoothukudi.component';
import { UniversityThiruchirappalliComponent } from './colleges/university-thiruchirappalli/university-thiruchirappalli.component';
import { UniversityVillupuramComponent } from './colleges/university-villupuram/university-villupuram.component';
import { UniversityThindivanamComponent } from './colleges/university-thindivanam/university-thindivanam.component';
import { CitCoimbatoreComponent } from './colleges/cit-coimbatore/cit-coimbatore.component';
import { PsgCoimbatoreComponent } from './colleges/psg-coimbatore/psg-coimbatore.component';
import { ThiagarajarMaduraiComponent } from './colleges/thiagarajar-madurai/thiagarajar-madurai.component';
import { GctCoimbatoreComponent } from './colleges/gct-coimbatore/gct-coimbatore.component';
import { GceSalemComponent } from './colleges/gce-salem/gce-salem.component';
import { PeriyarVellorComponent } from './colleges/periyar-vellor/periyar-vellor.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GceSalemDetailsComponent } from './colleges/gce-salem/gce-salem-details/gce-salem-details.component';
import { GceSalemViewformComponent } from './colleges/gce-salem/gce-salem-viewform/gce-salem-viewform.component';
import { ActChennaiDetailsComponent } from './colleges/act-chennai/act-chennai-details/act-chennai-details.component';
import { ActChennaiViewformComponent } from './colleges/act-chennai/act-chennai-viewform/act-chennai-viewform.component';
import { AlagapaDetailsComponent } from './colleges/alagapa/alagapa-details/alagapa-details.component';
import { AlagapaViewformComponent } from './colleges/alagapa/alagapa-viewform/alagapa-viewform.component';
import { AnnaUniversityCoimbatoreDetailsComponent } from './colleges/anna-university-coimbatore/anna-university-coimbatore-details/anna-university-coimbatore-details.component';
import { AnnaUniversityCoimbatoreViewformComponent } from './colleges/anna-university-coimbatore/anna-university-coimbatore-viewform/anna-university-coimbatore-viewform.component';
import { AnnaUniversityTirunelveliDetailsComponent } from './colleges/anna-university-tirunelveli/anna-university-tirunelveli-details/anna-university-tirunelveli-details.component';
import { AnnaUniversityTirunelveliViewformComponent } from './colleges/anna-university-tirunelveli/anna-university-tirunelveli-viewform/anna-university-tirunelveli-viewform.component';
import { CegGuindyDetailsComponent } from './colleges/ceg-guindy/ceg-guindy-details/ceg-guindy-details.component';
import { CegGuindyViewformComponent } from './colleges/ceg-guindy/ceg-guindy-viewform/ceg-guindy-viewform.component';
import { CitCoimbatoreDetailsComponent } from './colleges/cit-coimbatore/cit-coimbatore-details/cit-coimbatore-details.component';
import { CitCoimbatoreViewformComponent } from './colleges/cit-coimbatore/cit-coimbatore-viewform/cit-coimbatore-viewform.component';
import { GceBargurDetailsComponent } from './colleges/gce-bargur/gce-bargur-details/gce-bargur-details.component';
import { GceBargurViewformComponent } from './colleges/gce-bargur/gce-bargur-viewform/gce-bargur-viewform.component';
import { GceErodeDetailsComponent } from './colleges/gce-erode/gce-erode-details/gce-erode-details.component';
import { GceErodeViewformComponent } from './colleges/gce-erode/gce-erode-viewform/gce-erode-viewform.component';
import { GceTirunelveliDetailsComponent } from './colleges/gce-tirunelveli/gce-tirunelveli-details/gce-tirunelveli-details.component';
import { GceTirunelveliViewformComponent } from './colleges/gce-tirunelveli/gce-tirunelveli-viewform/gce-tirunelveli-viewform.component';
import { GctCoimbatoreDetailsComponent } from './colleges/gct-coimbatore/gct-coimbatore-details/gct-coimbatore-details.component';
import { GctCoimbatoreViewformComponent } from './colleges/gct-coimbatore/gct-coimbatore-viewform/gct-coimbatore-viewform.component';
import { AnnaUniversityMaduraiDetailsComponent } from './colleges/anna-university-madurai/anna-university-madurai-details/anna-university-madurai-details.component';
import { AnnaUniversityMaduraiViewformComponent } from './colleges/anna-university-madurai/anna-university-madurai-viewform/anna-university-madurai-viewform.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminpageComponent } from './admin-login/adminpage/adminpage.component';
import { AdminUniversityComponent } from './admin-university/admin-university.component';
import { AdminUniversityViewpageComponent } from './admin-university/admin-university-viewpage/admin-university-viewpage.component';
import { FilterPipe } from './admin-login/filter.pipe';
import { MitChennaiDetailsComponent } from './colleges/mit-chennai/mit-chennai-details/mit-chennai-details.component';
import { MitChennaiViewformComponent } from './colleges/mit-chennai/mit-chennai-viewform/mit-chennai-viewform.component';
import { PeriyarVellorDetailsComponent } from './colleges/periyar-vellor/periyar-vellor-details/periyar-vellor-details.component';
import { PeriyarVellorViewformComponent } from './colleges/periyar-vellor/periyar-vellor-viewform/periyar-vellor-viewform.component';
import { PsgCoimbatoreDetailsComponent } from './colleges/psg-coimbatore/psg-coimbatore-details/psg-coimbatore-details.component';
import { PsgCoimbatoreViewformComponent } from './colleges/psg-coimbatore/psg-coimbatore-viewform/psg-coimbatore-viewform.component';
import { ThiagarajarMaduraiDetailsComponent } from './colleges/thiagarajar-madurai/thiagarajar-madurai-details/thiagarajar-madurai-details.component';
import { ThiagarajarMaduraiViewformComponent } from './colleges/thiagarajar-madurai/thiagarajar-madurai-viewform/thiagarajar-madurai-viewform.component';
import { UniversityAriyalurDetailsComponent } from './colleges/university-ariyalur/university-ariyalur-details/university-ariyalur-details.component';
import { UniversityAriyalurViewformComponent } from './colleges/university-ariyalur/university-ariyalur-viewform/university-ariyalur-viewform.component';
import { UniversityDindigulDetailsComponent } from './colleges/university-dindigul/university-dindigul-details/university-dindigul-details.component';
import { UniversityDindigulViewformComponent } from './colleges/university-dindigul/university-dindigul-viewform/university-dindigul-viewform.component';
import { UniversityKanchepuramDetailsComponent } from './colleges/university-kanchepuram/university-kanchepuram-details/university-kanchepuram-details.component';
import { UniversityKanchepuramViewformComponent } from './colleges/university-kanchepuram/university-kanchepuram-viewform/university-kanchepuram-viewform.component';
import { UniversityNagercoilDetailsComponent } from './colleges/university-nagercoil/university-nagercoil-details/university-nagercoil-details.component';
import { UniversityNagercoilViewformComponent } from './colleges/university-nagercoil/university-nagercoil-viewform/university-nagercoil-viewform.component';
import { UniversityPanrutiiDetailsComponent } from './colleges/university-panruti/university-panrutii-details/university-panrutii-details.component';
import { UniversityPanrutiiViewformComponent } from './colleges/university-panruti/university-panrutii-viewform/university-panrutii-viewform.component';
import { UniversityPattukodaiDetailsComponent } from './colleges/university-pattukodai/university-pattukodai-details/university-pattukodai-details.component';
import { UniversityPattukodaiViewformComponent } from './colleges/university-pattukodai/university-pattukodai-viewform/university-pattukodai-viewform.component';
import { UniversityRamanathapuramDetailsComponent } from './colleges/university-ramanathapuram/university-ramanathapuram-details/university-ramanathapuram-details.component';
import { UniversityRamanathapuramViewformComponent } from './colleges/university-ramanathapuram/university-ramanathapuram-viewform/university-ramanathapuram-viewform.component';
import { UniversityThindivanamDetailsComponent } from './colleges/university-thindivanam/university-thindivanam-details/university-thindivanam-details.component';
import { UniversityThindivanamViewformComponent } from './colleges/university-thindivanam/university-thindivanam-viewform/university-thindivanam-viewform.component';
import { UniversityThiruchirappalliDetailsComponent } from './colleges/university-thiruchirappalli/university-thiruchirappalli-details/university-thiruchirappalli-details.component';
import { UniversityThiruchirappalliViewformComponent } from './colleges/university-thiruchirappalli/university-thiruchirappalli-viewform/university-thiruchirappalli-viewform.component';
import { UniversityThirukkuvalaiDetailsComponent } from './colleges/university-thirukkuvalai/university-thirukkuvalai-details/university-thirukkuvalai-details.component';
import { UniversityThirukkuvalaiViewformComponent } from './colleges/university-thirukkuvalai/university-thirukkuvalai-viewform/university-thirukkuvalai-viewform.component';
import { UniversityThiruvannamalaiDetailsComponent } from './colleges/university-thiruvannamalai/university-thiruvannamalai-details/university-thiruvannamalai-details.component';
import { UniversityThiruvannamalaiViewformComponent } from './colleges/university-thiruvannamalai/university-thiruvannamalai-viewform/university-thiruvannamalai-viewform.component';
import { UniversityThoothukudiDetailsComponent } from './colleges/university-thoothukudi/university-thoothukudi-details/university-thoothukudi-details.component';
import { UniversityThoothukudiViewformComponent } from './colleges/university-thoothukudi/university-thoothukudi-viewform/university-thoothukudi-viewform.component';
import { UniversityVillupuramDetailsComponent } from './colleges/university-villupuram/university-villupuram-details/university-villupuram-details.component';
import { UniversityVillupuramViewformComponent } from './colleges/university-villupuram/university-villupuram-viewform/university-villupuram-viewform.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsFormComponent,
    ViewFormComponent,
    AlagapaComponent,
    GceTirunelveliComponent,
    GceBargurComponent,
    GceErodeComponent,
    CegGuindyComponent,
    ActChennaiComponent,
    MitChennaiComponent,
    AnnaUniversityCoimbatoreComponent,
    AnnaUniversityTirunelveliComponent,
    AnnaUniversityMaduraiComponent,
    UniversityAriyalurComponent,
    UniversityPanrutiComponent,
    UniversityDindigulComponent,
    UniversityKanchepuramComponent,
    UniversityNagercoilComponent,
    UniversityThirukkuvalaiComponent,
    UniversityRamanathapuramComponent,
    UniversityPattukodaiComponent,
    UniversityThiruvannamalaiComponent,
    UniversityThoothukudiComponent,
    UniversityThiruchirappalliComponent,
    UniversityVillupuramComponent,
    UniversityThindivanamComponent,
    CitCoimbatoreComponent,
    PsgCoimbatoreComponent,
    ThiagarajarMaduraiComponent,
    GctCoimbatoreComponent,
    GceSalemComponent,
    PeriyarVellorComponent,
    ForgotPasswordComponent,
    SidebarComponent,
    NavbarComponent,
    GceSalemDetailsComponent,
    GceSalemViewformComponent,
    ActChennaiDetailsComponent,
    ActChennaiViewformComponent,
    AlagapaDetailsComponent,
    AlagapaViewformComponent,
    AnnaUniversityCoimbatoreDetailsComponent,
    AnnaUniversityCoimbatoreViewformComponent,
    AnnaUniversityTirunelveliDetailsComponent,
    AnnaUniversityTirunelveliViewformComponent,
    CegGuindyDetailsComponent,
    CegGuindyViewformComponent,
    CitCoimbatoreDetailsComponent,
    CitCoimbatoreViewformComponent,
    GceBargurDetailsComponent,
    GceBargurViewformComponent,
    GceErodeDetailsComponent,
    GceErodeViewformComponent,
    GceTirunelveliDetailsComponent,
    GceTirunelveliViewformComponent,
    GctCoimbatoreDetailsComponent,
    GctCoimbatoreViewformComponent,
    AnnaUniversityMaduraiDetailsComponent,
    AnnaUniversityMaduraiViewformComponent,
    AdminLoginComponent,
    AdminpageComponent,
    AdminUniversityComponent,
    AdminUniversityViewpageComponent,
    FilterPipe,
    MitChennaiDetailsComponent,
    MitChennaiViewformComponent,
    PeriyarVellorDetailsComponent,
    PeriyarVellorViewformComponent,
    PsgCoimbatoreDetailsComponent,
    PsgCoimbatoreViewformComponent,
    ThiagarajarMaduraiDetailsComponent,
    ThiagarajarMaduraiViewformComponent,
    UniversityAriyalurDetailsComponent,
    UniversityAriyalurViewformComponent,
    UniversityDindigulDetailsComponent,
    UniversityDindigulViewformComponent,
    UniversityKanchepuramDetailsComponent,
    UniversityKanchepuramViewformComponent,
    UniversityNagercoilDetailsComponent,
    UniversityNagercoilViewformComponent,
    UniversityPanrutiiDetailsComponent,
    UniversityPanrutiiViewformComponent,
    UniversityPattukodaiDetailsComponent,
    UniversityPattukodaiViewformComponent,
    UniversityRamanathapuramDetailsComponent,
    UniversityRamanathapuramViewformComponent,
    UniversityThindivanamDetailsComponent,
    UniversityThindivanamViewformComponent,
    UniversityThiruchirappalliDetailsComponent,
    UniversityThiruchirappalliViewformComponent,
    UniversityThirukkuvalaiDetailsComponent,
    UniversityThirukkuvalaiViewformComponent,
    UniversityThiruvannamalaiDetailsComponent,
    UniversityThiruvannamalaiViewformComponent,
    UniversityThoothukudiDetailsComponent,
    UniversityThoothukudiViewformComponent,
    UniversityVillupuramDetailsComponent,
    UniversityVillupuramViewformComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
