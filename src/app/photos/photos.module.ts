import { NgModule } from "../../../node_modules/@angular/core";
import { PhotoComponent } from "./photo/photo.componente";

@NgModule({
    declarations: [
        PhotoComponent
    ],
    exports: [
        PhotoComponent
    ]
})
export class PhotosModule {

}