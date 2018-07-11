import $ from 'jquery';

class Header {
    
    constructor(){
        this.btnMenu = $("#btn-menu");
        this.menu = $("#menu");

        this.events();
    }

    events(){
        this.btnMenu.on("click", this.showMenu.bind(this));
    }

    showMenu(){
        this.menu.toggleClass("header__menu--is-active");
    }
    
}

export default Header;