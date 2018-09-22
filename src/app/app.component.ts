import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  photos = [
    {
      url: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      description: "lion-01"
    },

    {
      url: "https://www.theepochtimes.com/assets/uploads/2017/12/09/GettyImages-587918470-e1512861633449-700x420.jpg",
      description: "lion-2"
    }

  ]
}
