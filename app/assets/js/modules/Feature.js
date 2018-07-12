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
        if ( $(window).width() > 768) {      
            //Add your javascript for large screens here 
            var scrollBar = $(window).scrollTop();
            var position = scrollBar * (-0.1);
    
            if(scrollBar >= 760){
                console.log(scrollBar);
                if(this.prevScrollValue > scrollBar){
                    $(this.featureFood).css({'top': '+=1.5px'});
                    $(this.featureBackground).css({'top': '+=1px'});
                }else{
                    $(this.featureFood).css({'top': '-=1.5px'});
                    $(this.featureBackground).css({'top': '-=1px'});
                }
            }else{
                $(this.featureFood).css({'top': '72px'});
                $(this.featureBackground).css({'top': '72px'});
            }
            this.prevScrollValue = scrollBar;


        } 

    }
}

export default Feature;