const ticketArray = [];
function getTicket(){
    const seatNumber = document.querySelectorAll(".seat-number");
    for(i = 0; i < seatNumber.length; i++){
        const currenElement = seatNumber[i];
        const currentValue = currenElement.querySelector("h1").innerText;
        currenElement.addEventListener("click",function(){              
            pushArray(currentValue,currenElement);
            totalCount();
            ticketSummery();
            checkNumberInputSeatClick()
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
function totalCount(){
    const totalTicketCount = document.getElementById('totalTicketCount');
    totalTicketCount.innerText = ticketArray.length;
}
function ticketSummery(){
    const ticketBox = document.getElementById("ticket-summery");
    const totalPrice = document.getElementById("total_price");
    const leftSeat = document.getElementById("left-seat");
    ticketBox.innerHTML = `${ticketArray.map(function(item){
        return `<div class="flex justify-between items-center py-2">
        <div class="text-base font-inter font-medium text-[#03071299]">
          <h1>${item}</h1>
        </div>
        <div class="text-base font-inter font-medium text-[#03071299]">
          <h1>Economy</h1>
        </div>
        <div class="text-base font-inter font-medium text-[#03071299]">
          <h1>550</h1>
        </div>                      
      </div>`;
    }).join("")}`;
    var total = 0;
    let leftSeatCount = 40;
    for(let i = 0; i < ticketArray.length; i++){
        total += 550;
        leftSeatCount--;
    }
    leftSeat.innerText = leftSeatCount;
    totalPrice.innerText = total;
    getDiscount(total);
}
function getDiscount(total){
    if(ticketArray.length === 4){
    const discountApplyBtn = document.getElementById("discount-apply");
    const grandPrice = document.getElementById("grand-price");
    const discountInput = document.getElementById("discount_input");
    const invalidCoupon = document.getElementById("invalid_coupon");
    const discountSection = document.getElementById("discount-section");
    const discountprice = document.getElementById("discount-price");
    const couponSection = document.getElementById("coupon");
    discountApplyBtn.addEventListener("click",function(){
        if(discountInput.value === "NEW15"){
            const discount = total / 100 * 15;
            grandPrice.innerText = total - discount; 
            invalidCoupon.classList.add("hidden")
            discountSection.classList.remove("hidden");
            discountprice.innerText = discount;
            couponSection.classList.add("hidden");

        }else if(discountInput.value === "Couple 20"){
            const discount = total / 100 * 20;
            grandPrice.innerText = total - discount; 
            invalidCoupon.classList.add("hidden")
            discountSection.classList.remove("hidden");
            discountprice.innerText = discount;
            couponSection.classList.add("hidden");
        }else{
            invalidCoupon.classList.remove("hidden")
        }
    });
    grandPrice.innerText = total;
    discountApplyBtn.removeAttribute("disabled");
    discountApplyBtn.classList.replace("bg-[#979b9638]","bg-[#1DD100]");

    }else{
        const discountApplyBtn = document.getElementById("discount-apply");
        const grandPrice = document.getElementById("grand-price");
        const discountInput = document.getElementById("discount_input");
        const invalidCoupon = document.getElementById("invalid_coupon");
        const discountSection = document.getElementById("discount-section");
        const discountprice = document.getElementById("discount-price");
        const couponSection = document.getElementById("coupon");
        grandPrice.innerText = total;
        discountApplyBtn.setAttribute("disabled",true);
        discountApplyBtn.classList.replace("bg-[#1DD100]","bg-[#979b9638]");
        discountSection.classList.add("hidden")
        invalidCoupon.classList.add("hidden")
        couponSection.classList.remove("hidden")
        // discountInput.value = "";
        discountprice.innerText = total;
    }
    const grandPrice = document.getElementById("grand-price");
    grandPrice.innerText = total;    
}


}
getTicket()
function checkInput(input){
    const nextBtn = document.getElementById("next-btn");
    if(ticketArray.length > 0){
        if(input.value.length > 0){           
            nextBtn.removeAttribute("disabled");
            nextBtn.classList.replace("bg-[#979b9638]","bg-[#1DD100]");
            nextBtn.addEventListener("click",function(){
                const modal = document.getElementById("modal-section");
                const body = document.querySelector("body");
                modal.classList.remove("hidden");
                body.style.overflow = "hidden";

            });
        }else{
            nextBtn.setAttribute("disabled",true);
            nextBtn.classList.replace("bg-[#1DD100]","bg-[#979b9638]");
        }
    }    
}
function checkNumberInputSeatClick(){
    const numberInput = document.getElementById("number_input");
    const nextBtn = document.getElementById("next-btn");
    if(ticketArray.length && numberInput.value !== ""){           
        nextBtn.removeAttribute("disabled");
        nextBtn.classList.replace("bg-[#979b9638]","bg-[#1DD100]");
    }else{
        nextBtn.setAttribute("disabled",true);
        nextBtn.classList.replace("bg-[#1DD100]","bg-[#979b9638]");
    }
}
const continueBtn = document.getElementById("continue");
continueBtn.addEventListener("click",function(){
    const modal = document.getElementById("modal-section");
    const body = document.querySelector("body");
    modal.classList.add("hidden");
    location.replace("index.html");

})