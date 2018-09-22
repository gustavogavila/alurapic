import { Component, Input } from "../../../../node_modules/@angular/core";

@Component({
    selector: "ap-photo",
    templateUrl: "photo.component.html"
})
export class PhotoComponent {

    @Input() url: '';
    @Input() description: '';
}