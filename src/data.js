import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";
import shioImage from './imgs/shio.png';
import shoyuImage from './imgs/shoyu2.png';
import misoImage from './imgs/miso.png';
import tsukemenImage from './imgs/tsukemen.jpeg';
import tonkotsuImage from "./imgs/tonkotsu.jpg";
import kitakataImage from "./imgs/kitakata.jpeg";
import facebookSVG from "./imgs/facebook.svg";
import instagramSVG from "./imgs/instagram.svg";
import twitterSVG from "./imgs/twitter.svg";

let navList = {
    home: home,
    menu: menu,
    about: about,
}

let footer = {
    facebook: {
        name: 'Facebook',
        image: facebookSVG,
        url: 'https://www.facebook.com/'
    },
    instagram: {
        name: 'Instagram',
        image: instagramSVG,
        url: 'https://www.instagram.com/'
    },
    twitter: {
        name: 'Twitter',
        image: twitterSVG,
        url: 'https://www.twitter.com'
    }
}

let ramenTypes = {
    shio: {
        name: 'Shio',
        image: shioImage,
        description: 'Rich, fatty pork broth, velvety-soft yolk eggs, fresh noodles, and tender pork belly that melts in your mouth.',
        price: '$9.95'
    },
    shoyu: {
        name: 'Shoyu',
        image: shoyuImage,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt ab corrupti velit, fugit suscipit.',
        price: '$9.95'
    },
    miso: {
        name: 'Miso',
        image: misoImage,
        description: 'Minus sit, enim nemo sequi officiis molestiae, corrupti similique et ab excepturi aliquid cum dolor!',
        price: '$9.95'
    },
    tsukemen: {
        name: 'Tsukemen',
        image: tsukemenImage,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt ab corrupti velit, fugit suscipit. Minus sit, enim nemo sequi officiis molestiae, corrupti similique et ab excepturi aliquid cum dolor!',
        price: '$9.95'
    },
    tonkotsu: {
        name: 'Tonkotsu',
        image: tonkotsuImage,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt ab corrupti velit, fugit suscipit. Minus sit, enim nemo sequi officiis molestiae, corrupti similique et ab excepturi aliquid cum dolor!',
        price: '$9.95'
    },
    kitakata: {
        name: 'Kitakata',
        image: kitakataImage,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt ab corrupti velit, fugit suscipit. Minus sit, enim nemo sequi officiis molestiae, corrupti similique et ab excepturi aliquid cum dolor!',
        price: '$9.95'
    }
}

export { navList, ramenTypes, footer };