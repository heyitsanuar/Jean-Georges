import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smothScroll from 'jquery-smooth-scroll';

class Header {
    
    constructor(){
        this.btnMenuOpen = $("#btn-menu-open");
        this.btnMenuClose = $("#btn-menu-close");
        this.banner = $("#banner-info");
        this.menu = $("#menu");
        
        this.header = $(".header__navigation");
        this.headerWaypointTrigger = $(".landing-page");
        
        this.pageSections = $(".page-section");
        this.headerLinks = $(".header__menu a");
        
        this.createHeaderWaypoints();
        this.createPageSectionWaypoints();
        this.addSmothScrolling();
        this.events();
    }

    events(){
        this.btnMenuOpen.on("click", this.showMenu.bind(this));
        this.btnMenuClose.on("click", this.showMenu.bind(this));
    }

    showMenu(){
        this.menu.toggleClass("header__menu--is-active");
        this.banner.toggleClass("header__banner--is-toggled");
        this.btnMenuClose.toggleClass("header__menu-exit--is-visible");
    }

    createHeaderWaypoints(){
        var thisPrev = this;

        new Waypoint({
            element: this.headerWaypointTrigger[0],
            handler: function(direction){
                if(direction == 'down'){
                    thisPrev.header.addClass("header__navigation--dark");
                }else{
                    thisPrev.header.removeClass("header__navigation--dark");
                }
            }
        });
    }
    
    createPageSectionWaypoints(){
        var thisPrev = this;

        this.pageSections.each(function(){
            var currentPageSection = this;

            new Waypoint({
                element: currentPageSection,
                handler: function(direction){
                    if(direction == 'down'){
                        var matchingLink = currentPageSection.getAttribute("data-matching-link");
                        
                        thisPrev.headerLinks.removeClass("is-current-link");
                        $(matchingLink).addClass("is-current-link");
                    }
                },
                offset: "20%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction){
                    if(direction == 'up'){
                        var matchingLink = currentPageSection.getAttribute("data-matching-link");
                        
                        thisPrev.headerLinks.removeClass("is-current-link");
                        $(matchingLink).addClass("is-current-link");
                    }
                },
                offset: "-30%"
            });
        });
    }

    addSmothScrolling(){
        console.log("Smooth Scrolling");
        this.headerLinks.smoothScroll();
    }
}

export default Header;