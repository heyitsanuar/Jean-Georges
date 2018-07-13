import Header from './modules/Header';
import Feature from './modules/Feature';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var header = new Header();
var feature = new Feature();

//Waypoints
new RevealOnScroll( $(".feature") , "100%");