import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data="Sanvi Rahman";

  name="Sanvi Rahman";

  onchange(){
    this.name="Shanta Islam Oboni";
  }
}
