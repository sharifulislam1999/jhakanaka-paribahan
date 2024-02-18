function getTicket(){
    const ticketArray = [];
    const seatNumber = document.querySelectorAll(".seat-number");
    for(i = 0; i < seatNumber.length; i++){
        const currenElement = seatNumber[i];
        const currentValue = currenElement.querySelector("h1").innerText;
        currenElement.addEventListener("click",function(){              
            pushArray(currentValue,currenElement);
        });
    }
    function pushArray(seat,currenElement){
        if(ticketArray.length !== 4){
            if(ticketArray.includes(seat)){
                const index = ticketArray.indexOf(seat);
                ticketArray.splice(index,1);
                seatStyle(currenElement); 
            }else{
                ticketArray.push(seat); 
                seatStyle(currenElement); 
            }
        }else{
            if(ticketArray.includes(seat)){
                const index = ticketArray.indexOf(seat);
                ticketArray.splice(index,1);
                seatStyle(currenElement);
            }
            if(ticketArray.length === 4){
                alert("sorry you can't buy 4 ticket")
            }
        }
    }
    function seatStyle (element){
        element.classList.toggle("bg-[#F7F8F8]")
        element.classList.toggle("bg-[#1DD100]")
        element.classList.toggle("text-white")
    }
}
getTicket()







