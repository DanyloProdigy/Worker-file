onmessage = function(event) {
  debugger;
  if(event && event.data){
    var expireTime = event.data.expireTime;
    var scope = event.data.scope;
    var message = event.data.message;
    var initTimer = function(expireTime){
      var message = 'JWT-init-' + scope;
      var timerId = this.setInterval(function() {
       
        postMessage(obj);
      }, expireTime)
      postMessage({timerId, message});
    }
   var clearTimer = function(timerId){
    var message = 'JWT-clear-' + scope;
    window.clearTimeout(timerId);
    postMessage(timerId);
   }
   if(message === 'startJwtTimer'){
    initTimer(expireTime);
    
   } 
   if(message === 'clearJwtTimer'){
    clearTimer();
   }
  }
}