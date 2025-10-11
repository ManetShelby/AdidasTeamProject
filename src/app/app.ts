import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, RouterLinkActive,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Adidas';

  info=[
    {
      a1:'info@company.com',
      a2:'010-020-0340'
    }
  ]
}
