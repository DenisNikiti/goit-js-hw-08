
var throttle = require('lodash.throttle');

const currenttime = JSON.parse(localStorage.getItem("videoplayer-current-time"))


 if (currenttime) {
    
     
       player.setCurrentTime(currenttime.seconds).then(function(seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            
            break;

        default:
           
            break;
    }
});

     
     
 }





const timeupdate =  throttle(  function (data) {
    localStorage.setItem("videoplayer-current-time",JSON.stringify(data))
},1000)
    
    


player.on('timeupdate', timeupdate);


