console.log("its working")
let dom = document.getElementById("bigSpenders")
// Array to contain all the big spenders
const bigSpenders = businesses.forEach(business => {
   business.orders.filter(bizOrders => {
       if(bizOrders > 9000){
        dom.innerHTML += 
        
        `<div>
            <h4>${business.companyName}</h4>

        </div`  

       }
   })
})
console.log(bigSpenders)