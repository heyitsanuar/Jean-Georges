import $ from 'jquery';

class Feature{

    constructor(){
        this.featureFood = $("#feature-food");
        this.featureBackground = $("#feature-background");
        this.prevScrollValue = 0;

        this.events();
    }

    events(){
        $(window).scroll(this.moveFeatureFood.bind(this));
    }

    moveFeatureFood(){
        var scrollBar = $(window).scrollTop();
        var position = scrollBar * (-0.15);

        if(scrollBar >= 760){
            if(this.prevScrollValue > scrollBar){
                $(this.featureFood).css({'top': '+=2px'});
                $(this.featureBackground).css({'top': '+=2px'});
            }else{
                $(this.featureFood).css({'top': '-=2px'});
                $(this.featureBackground).css({'top': '-=2px'});
            }

            this.prevScrollValue = scrollBar;
        }


    }
}

export default Feature;