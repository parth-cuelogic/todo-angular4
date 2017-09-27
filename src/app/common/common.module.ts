import { NgModule } from '@angular/core';
import {
    AccordionModule, AlertModule, ButtonsModule, CarouselModule,
    CollapseModule, BsDatepickerModule, BsDropdownModule, ModalModule,
    PaginationModule, PopoverModule, ProgressbarModule, RatingModule,
    SortableModule, TabsModule, TimepickerModule, TooltipModule, TypeaheadModule
} from 'ngx-bootstrap';

import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';



@NgModule({
    imports: [
        BsDropdownModule.forRoot(),
        AccordionModule.forRoot(),
        AlertModule.forRoot(),
        ButtonsModule.forRoot(),
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
        PopoverModule.forRoot(),
        ProgressbarModule.forRoot(),
        RatingModule.forRoot(),
        SortableModule.forRoot(),
        TabsModule.forRoot(),
        TimepickerModule.forRoot(),
        TooltipModule.forRoot(),
        TypeaheadModule.forRoot()
    ],
    exports:[],
    providers: [
        UserService,
        AuthenticationService
    ]
})


export class CommonModule { }