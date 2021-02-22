function activateMenu(){
    document.getElementById('navbar-list').style.right = '0%';
};
 
document.onclick = function(event){
    var trigger = document.getElementById('mobile-icon') ;
    if(trigger !== event.target){
        document.getElementById('navbar-list').style.right = '100%';
    }            
}