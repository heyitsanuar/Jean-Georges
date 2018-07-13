import Header from './modules/Header';
import Feature from './modules/Feature';
import RevealOnScroll from './modules/RevealOnScroll';
import SlidingElement from './modules/SlidingElement';
import $ from 'jquery';

var header = new Header();
var feature = new Feature();

//Waypoints

//Reveal Images
new RevealOnScroll($(".about__image"), "100%");
new RevealOnScroll($(".feature"), "100%");
new RevealOnScroll($(".comment__info"), "100%");
new RevealOnScroll($(".comment__images"), "100%");
new RevealOnScroll($(".gallery__container"), "100%");

//Sliding Element

new SlidingElement($(".about__images"), "100%", 'right');
new SlidingElement($(".comment"), "60%", 'left');
new SlidingElement($(".gallery"), "100%", 'right');