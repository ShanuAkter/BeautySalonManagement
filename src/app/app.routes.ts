import { Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { ServicesComponent } from './pages/services/services.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HairComponent } from './pages/hair/hair.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { ExpertsComponent } from './pages/experts/experts.component';
import { NailsComponent } from './pages/nails/nails.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { BeautyProductsComponent } from './pages/beauty-products/beauty-products.component';
import { GroomingComponent } from './pages/grooming/grooming.component';
import { CartComponent } from './pages/cart/cart.component';
import { ModelsComponent } from './pages/models/models.component';
import { BridalMakeoverComponent } from './pages/bridal-makeover/bridal-makeover.component';
import { BeautyTipsComponent } from './pages/beauty-tips/beauty-tips.component';
import { SpaComponent } from './pages/spa/spa.component';
import { EssentialsComponent } from './pages/essentials/essentials.component';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { AdminServicesComponent } from './pages/admin-services/admin-services.component';
import { AdminAppointmentComponent } from './pages/admin-appointment/admin-appointment.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AddServiceComponent } from './pages/add-service/add-service.component';
import { AppointmentCartComponent } from './pages/appointment-cart/appointment-cart.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user-registration', component: UserRegistrationComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'experts', component: ExpertsComponent },
    { path: 'beauty-products', component: BeautyProductsComponent },
    { path: 'grooming', component: GroomingComponent },
    { path: 'models', component: ModelsComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'aboutUs', component: AboutUsComponent },
    { path: 'contact', component: ContactComponent },
    { path:'services/bridal',component:BridalMakeoverComponent},
    { path:'services/beauty-tips',component:BeautyTipsComponent},
    { path:'services/spa',component:SpaComponent},
    { path:'services/essential',component:EssentialsComponent},
    { path: 'services/hair', component: HairComponent },
    { path: 'services/nail', component: NailsComponent },
    { path: 'appointment', component: AppointmentComponent },
     { path: 'cart', component: CartComponent },
     { path: 'admindashboard', component: AdminDashboardComponent },
     { path:'adminproducts',component:AdminProductsComponent},
     { path:'adminservices',component:AdminServicesComponent},
     { path:'adminappointment',component:AdminAppointmentComponent},
     { path:'addProduct',component:AddProductComponent},
     { path:'addservice',component:AddServiceComponent},
     { path:'appointmentcart',component:AppointmentCartComponent}



];
