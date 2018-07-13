import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class Header {
    
    constructor(){
        this.btnMenuOpen = $("#btn-menu-open");
        this.btnMenuClose = $("#btn-menu-close");
        this.banner = $("#banner-info");
        this.menu = $("#menu");
        
        this.header = $(".header__navigation");
        this.headerWaypointTrigger = $(".landing-page");
        this.createHeaderWaypoints();

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
        console.log("Hey");
        var thisPrev = this;
        console.log(thisPrev);

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
    
}

export default Header;