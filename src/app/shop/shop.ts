import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop {
products=[
    {
      model : '2fer Candy',
      size: '20',
      Category: '2fer Candy.jpg',
      Image : '/assets/2fer_20Candy.jpg'
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

  Our_Brands=[
  {
    h1:'Our Brands',
    p:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit amet.',
    Image1:'asset/assets/img/brand_01.png',
    Image2:'asset/assets/img/brand_02.png',
    Image3:'asset/assets/img/brand_03.png',
    Image4:'asset/assets/img/brand_04.png',
  }
]

card=[
  {//card1
    Image:'asset/assets/img/adicolor-classic-firebird-loose-track-top.avif',
    a:'Adicolor Classic Firebird Loose',
    li:'M/L/X/XL',
    p:'$250.00'
  },
  {//card2
    Image:'asset/assets/img/adicolor-classics-firebird-track-jacket.avif',
    a:'Oupidatat non',
    li:'M/L/X/XL',
    p:'$250.00'
  },
  {//card3
    Image:'asset/assets/img/Essentials_CLIMAWARM_3-Stripes_Synthetic_Down_Jackets_Black_JM8421_21_model.avif',
    a:'Oupidatat non',
    li:'M/L/X/XL',
    p:'$250.00'
  },
  {//card4
    Image:'asset/assets/img/adidas_Originals_Satin_Shirt_Multicolor_KA2678_21_model.avif',
    a:'Oupidatat non',
    li:'M/L/X/XL',
    p:'$250.00'
  },
  {//card5
    Image:'asset/assets/img/Tailored_Track_Jacket_Brown_JX5311_21_model.avif',
    a:'Oupidatat non',
    li:'M/L/X/XL',
    p:'$250.00'
  },
  {//card6
    Image:'asset/assets/img/adidas_Originals_x_Liberty_London_Debossed_Velvet_Firebird_Track_Jacket_Green_JW5267_21_model.avif',
    a:'Oupidatat non',
    li:'M/L/X/XL',
    p:'$250.00'
  },
  {//card7
    Image:'asset/assets/img/Essentials_3-Stripes_Fleece_Sweatshirt_Beige_JX7689_21_model.avif',
    a:'Oupidatat non',
    li:'M/L/X/XL',
    p:'$250.00'
  },
  {//card8
    Image:'asset/assets/img/Premium_Essentials_Denim_Jacket_Black_JV7775_HM1.avif',
    a:'Oupidatat non',
    li:'M/L/X/XL',
    p:'$250.00'
  },
  {//card9
    Image:'asset/assets/img/Adidas_By_Stella_McCartney_Cropped_Padded_Winter_Jacket_Brown_JM3652_HM1.avif',
    a:'Oupidatat non',
    li:'M/L/X/XL',
    p:'$250.00'
  },
]
}
