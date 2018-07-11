import $ from 'jquery';

class Header {
    
    constructor(){
        this.btnMenuOpen = $("#btn-menu-open");
        this.btnMenuClose = $("#btn-menu-close");
        this.banner = $("#banner-info");
        this.menu = $("#menu");

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
    
}

export default Header;