import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
 contact=[
    {
      h1:'Contact Us',
      h3:'About',
      p:'Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.'
    },
  ]
  contact2=[
    {
      h1:'ADIDAS AG',
      h3:'',
      p:'World of Sports',
      p2:'Adi-Dassler-Straße 1',
      p3:'91074 Herzogenaurach',
      p4:'Germany',
      a:'phone: +49 9132 84 0',
    }
  ]
  contact3=[
    {
      h1:'ADIDAS AG',
      h3:'',
      p:'World of Sports',
      p2:'Adi-Dassler-Straße 1',
      p3:'91074 Herzogenaurach',
      p4:'Germany',
      a:'phone: +49 9132 84 0',
    },
  ]
    contact4=[
    {
      //first
      h1:'Media Contact',
      h3:'adidas AG Media Relations',
      p:'World of Sports',
      p2:'Adi-Dassler-Straße 1',
      p3:'91074 Herzogenaurach',
      p4:'Germany',
      button1:'Send an Email',
      button2:'Our Team',
    },
    {
      //second
      h1:'Investor Relations Contact',
      h3:'adidas AG Media Relations',
      p:'World of Sports',
      p2:'Adi-Dassler-Straße 1',
      p3:'91074 Herzogenaurach',
      p4:'Germany',
      button1:'Send an Email',
      button2:'Our Team',
    },
    {
      //third
      h1:'Sustainability Contact',
      h3:'adidas AG Social & Environmental Affairs',
      p:'World of Sports',
      p2:'Adi-Dassler-Straße 1',
      p3:'91074 Herzogenaurach',
      p4:'Germany',
      button1:'Send an Email',
      button2:'',
    }
  ]
  


  form=[
    {
      Name:'Name',
      Email:'Email',
      Subject:'Subject',
      Message:'Message',
      Talk:'Let’s Talk',
    }
  ]
  Card=
  [
    {
      h2:'Customer Service',
      p:'Do you have questions about our products or your order? Our customer hotline can help.',
      div:'adidas.com/help'

    }
]

button1=[
  {
    h1:'Popular',
    b1:'Profile',
    b2:'Financial Calendar',
    b3:'careers.adidas-group.com'
  },
]
button2=[
  {
    h1:'',
    b1:'Financial Publications',
    b2:'Press Releases',
    b3:'report.adidas-group.com'
  }
]

Adidas_Shop=[
    {
      h2:'Adidas Shop',
      li1:'123 Consectetur at ligula 10660',
      li2:'010-020-0340',
      li3:'info@company.com',
      li4:'',
      li5:'',
      li6:'',
      li7:'',
    },
    {
      h2:'Products',
      li1:'Luxury',
      li2:'Sport Wear',
      li3:'Mens Shose ',
      li4:'Womens Shose',
      li5:'Popular Dress',
      li6:'Gym Accessories',
      li7:'Sport Shose',
    },
    {
      h2:'Further Info',
      li1:'Home',
      li2:'About Us',
      li3:'Shop Location',
      li4:'FAQS',
      li5:'Contact',
      li6:'',
      li7:'',
    }
  ]

icon=[
    {
      facbook:'http://facebook.com/',
      instagram:'https://www.instagram.com/',
      twitter:'https://twitter.com/',
      linkedin:'https://www.linkedin.com/',
      label:'Email address',
      div:'Subscribe',
      p:'Copyright &copy; 2021 Company Name Designed by <a rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo'
    }
  ]
}
