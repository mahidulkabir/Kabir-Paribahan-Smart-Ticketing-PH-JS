function seatButtonPressed(className){
    let element = document.getElementsByClassName(className);
    let availableSeat = parseInt(document.getElementById('remainingSeat').innerHTML);
    for(let i =0; i < element.length ; i++){
        element[i].addEventListener('click',function(){
              this.classList.toggle('bg-green-400');
              this.classList.toggle('text-white')
              if (this.classList.contains('bg-green-400')) {
                availableSeat --;
              }
              else{
                availableSeat ++ ;
              }
              document.getElementById('remainingSeat').innerHTML= availableSeat;
        });
    
    
    }
}
