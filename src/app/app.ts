import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Adidas';
  Header=[
    {
      Home:'Home',
      About :'About',
      Shop:'Shop',
      Contact:'Contact',

    }
  ]

  info=[
    {
      a1:'info@company.com',
      a2:'010-020-0340'
    }
  ]
}
