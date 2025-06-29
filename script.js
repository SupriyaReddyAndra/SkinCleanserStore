let addBtn=document.getElementsByClassName("add_btn");
console.log(addBtn)
let cart=[]
addBtn[i].classList.toggle("selected")
        
for(let i=0;i<addBtn.length;i++){
    addBtn[i].addEventListener("click",()=>{
        let img=addBtn[i].getAttribute("product-img")
        let name=addBtn[i].getAttribute("product-name")
        let price=addBtn[i].getAttribute("product-price")
        let product={
            p_img:img,
            p_name:name,
            p_price:price
        } 
       let quantity=
cart.push(product)
console.log(cart)
})
}
