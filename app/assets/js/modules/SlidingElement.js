import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class SlidingElement {

    constructor(els, offset, direction){
        this.lazyImages = $(".lazyload");
        this.itemsToSlide = els;
        this.offsetPercentage = offset;
        this.classWithDirection = "slide-item--" + direction;
        
        this.moveInitially();
        this.createWaypoints();
        this.refreshWaypoints();
    }

    refreshWaypoints(){
        this.lazyImages.on('load', function(){
            Waypoint.refreshAll();
        });
    }

    moveInitially(){        
        this.itemsToSlide.addClass(this.classWithDirection);
    }

    createWaypoints(){
        var thisPrev = this;

        this.itemsToSlide.each(function(){
            var currentItem = this;

            new Waypoint({
                element: currentItem,
                handler: function(){
                    $(currentItem).addClass(thisPrev.classWithDirection + "-is-slided");
                },
                offset: thisPrev.offsetPercentage
            });
        });
    }

}

export default SlidingElement;