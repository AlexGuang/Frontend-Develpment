exports.getDate = function(){
    const today = new Date();
   // let currentDay = today.getDay();
    // if (currentDay === 0 || currentDay === 6) {
    //     var day = "weekend";
    // } else {
    //     var day = "weekday";
    // }
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    
    return today.toLocaleDateString("zh-CN", options)
  
}

exports.getDay = function(){
    const today = new Date();
    // let currentDay = today.getDay();
     // if (currentDay === 0 || currentDay === 6) {
     //     var day = "weekend";
     // } else {
     //     var day = "weekday";
     // }
     const options = {
         weekday: "long",
         
     }
     
     return today.toLocaleDateString("zh-CN", options)

}