//Add to cart 
let productsCountEl = document.getElementById("products-count")
console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");
console.log(addToCartBtns);

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener('click', function () {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}

// addToCartBtns.forEach => {
//     items.addEventListener("click", function(){
//         console.log("clicked")
//     })
// }