function seatButtonPressed(){
    let element = document.getElementsByClassName('bttnPressedFunction');
    for(let i =0; i < element.length ; i++){
        element[i].addEventListener('click',function(){

            this.classList.add('bg-green-400');
        });
    }
}
seatButtonPressed();