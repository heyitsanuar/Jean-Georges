import $ from 'jquery';

class Menu {
    
    constructor(){
        this.btnMenu = $("#btn-menu");
        this.menu = $("#menu");

        this.events();
    }

    events(){
        this.btnMenu.click(this.showMenu.bind(this));
    }

    showMenu(){
        console.log('Hey');
        console.log(this.menu);
    }
    
}

export default Menu;