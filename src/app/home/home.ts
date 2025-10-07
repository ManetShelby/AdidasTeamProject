import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
  text_h1=[
    {
      h1:'Categories of The Month',
      p:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]

  Card=[
    {
      //first card
      h1 : 'Adidas eCommerce',
      h2 : 'Animal Print Clothes & Shoes',
      p : " ap into your wild side with animal print clothes and shoes from adidas. From sport performance apparel to day-off sneakers, it is all about eye-catching style. This template is 100% free provided by TemplateMo website.",
      Image : 'asset/assets/img/Samba_OG_shoes_Black_JI2734_02_standard_hover_hover_hover.avif'
    },
    {
      //second  card
      h1 : 'Soccer',
      h2 : 'F50 Messi Pro Firm Ground Cleats',
      p : " Shop this and more select items with your adiClub discount voucher. Other promo codes will not apply to this product.",
      Image : 'asset/assets/img/F50_Messi_Elite_Firm_Ground_Cleats_Blue_JP7435_HM1.avif'
    },
    {
      //thrid card
      h1 : 'Teamgeist Cap',
      h2 : 'Animal Print Clothes & Shoes',
      p : " Sun shade or style statement? You can have both browsing women's hats at adidas — whether you're a boonie fan, a trucker lover or a baseball cap",
      Image : 'asset/assets/img/Teamgeist_Cap_Black_JV9984_01_00_standard.avif'
    }
  ]

  second_card=[
    {
       //first card
      Image : 'asset/assets/img/xcat_fw25_bts_tcc_evo_m_d_6b787a4366.avif',
      h2 : 'SPEED NEVER GOES OUT OF STYLE',
      h5 : 'Explore Evo SL, the running shoe built for fast in all aspects of life.',
      p : "Go Shop",
    },
     {
      //second  card
      Image : 'asset/assets/img/global_teamgeist_originals_fw25_launch_catlp_hp_navigation_card_teaser_1_d_6d10fc5ef9.avif',
      h2 : 'TEAMGEIST',
      h5 : 'Heritage soccer recut for today.',
      p : "Go Shop",
    },
    {
      //thrid card
      Image : 'asset/assets/img/xcat_fw25_bts_tcc_shoesunder80_mw_d_c283c4ad98.avif',
      h2 : '$80 AND UNDER SCHOOL SHOES',
      h5 : 'Get ahead of the class: Score classic sneakers for your first day fit.',
      p : "Go Shop",
    } 
  ]

  third_card=[
    {
       //first card
      Image : 'asset/assets/img/xcat_fw25_bts_tcc_evo_m_d_6b787a4366.avif',
      h2 : 'SPEED NEVER GOES OUT OF STYLE',
      h5 : 'Explore Evo SL, the running shoe built for fast in all aspects of life.',
      p : "Go Shop",
    },
     {
      //second  card
      Image : 'asset/assets/img/global_teamgeist_originals_fw25_launch_catlp_hp_navigation_card_teaser_1_d_6d10fc5ef9.avif',
      h2 : 'TEAMGEIST',
      h5 : 'Heritage soccer recut for today.',
      p : "Go Shop",
    },
    {
      //thrid card
      Image : 'asset/assets/img/xcat_fw25_bts_tcc_shoesunder80_mw_d_c283c4ad98.avif',
      h2 : '$80 AND UNDER SCHOOL SHOES',
      h5 : 'Get ahead of the class: Score classic sneakers for your first day fit.',
      p : "Go Shop",
    } ,
    {
      //four  card
      Image : 'asset/assets/img/xcat_fw25_bts_tcc_shoesunder80_mw_d_c283c4ad98.avif',
      h2 : '$80 AND UNDER SCHOOL SHOES',
      h5 : 'Get ahead of the class: Score classic sneakers for your first day fit.',
      p : "Go Shop",
    } 
  ]

  text=[
    {
      h1:'Sneakers, Activewear and Sporting Goods',
      p:' Calling all athletes. Gear up for your favorite sport with adidas sneakers and activewear for men and women. From running to soccer and the gym to the trail, performance workout clothes and shoes keep you feeling your best. Find sport-specific sneakers to support your passion, and shop versatile activewear and accessories that support everyday comfort. adidas has you covered with world-class performance, quality and unmatched comfort to fit your style. Explore the full range of adidas gear today. Founded on performance, adidas sporting goods equipment supports athletes at all levels. Men, women and kids will find their best form in sneakers and activewear made to perform under pressure. adidas sportswear breathes, manages sweat and helps support working muscles. Explore sport-specific clothes and gear for basketball, soccer, or the yoga studio. Runners will find a range of sneakers for training, racing and trail runs. Gym users will find tops, tees and tanks that support focused efforts with adidas CLIMACOOL to feel cool and dry. Explore warm-ups featuring four-way stretch to support mobility. Find a new outdoor jacket that helps protect against wind and rain. Lace up new athletic shoes that energize every step with adidas Boost cushioning. With sizes and styles for all ages, we have sporting goods for the whole family. Dedicated training demands dedicated workout clothes. Experience the latest performance fabrics and sneaker technologies to get the most out of your next training session.'      
    }
  ]

   four_card=[
    {
       //first card
      Image : 'asset/assets/img/edi_fw25_sambasizeguide_bnr_d_3_4126acc079.avif',
      li:'$240.00',
      a : 'The adidas Samba SizeGuide',
      p1:'Tired of asking are Sambas true to size? Check out our official adidas Samba size chart for all you need to find your perfect Samba style and fit today.',
      p2 : "Reviews (24)",
    },
     {
      //second  card
      Image : 'asset/assets/img/Edi_SS_24_How_to_Style_a_Tennis_Skirt_mh_d_c09648994f.avif',
      li:'$480.00',
      a : 'How To Lace Running Shoes',
      p1:'Even the most comfortable running shoe can cause issues when you start racking up the miles. Luckily, the laces come in handy for more than just keeping your shoes tied. Learning how to lace running shoes in new ways can help alleviate chafing and blistering depending on your gait and foot width, so read on to troubleshoot your fit for the perfect run.',
      p2 : "Reviews (48)",
    },
    {
      //thrid card
      Image : 'asset/assets/img/how_to_style_a_soccer_jersey_mh_d_215_1035532_5578c26900.avif',
      li:'$360.00',
      a : 'How To Style A Soccer Jersey',
      p1:'The FIFA Women’s World Cup Australia & New Zealand kicks off this July, with 32 teams facing off on the biggest stage in the hopes of taking home the title. In anticipation of the monthlong tournament, take inspiration from these world-class athletes and pull one of their on-pitch essentials into your own wardrobe: the soccer jersey. Regardless of your personal style aesthetic.',
      p2 : "Reviews (74)",
    } ,
    {
      //four  card
       Image : 'asset/assets/img/how_to_do_a_lunge_mh_d_221_1036927_d975f2a9e6.avif',
      li:'$360.00',
      a : 'The adidas Samba SizeGuide',
      p1:'Lose yourself in the lunge. From the rhythmic unilateral and lateral movements to your heart beating stronger with each rep, lunges are a powerhouse compound exercise that activates several of the muscles in your lower body and core at once.',
      p2 : "Reviews (74)",
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

  Categories=[
    {
      h1:'Categories of The Month',
      p:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]

}
