const menu = document.querySelector('#menu-icon');
menu.addEventListener('click',(show)=>{
const navbar = document.querySelector('.menus');
console.log(navbar);
navbar.classList.toggle('show');
})
const mens = [
    {id:1,title:"1",image:"../assets/images/mens/1.avif",price:18.00},
    {id:2,title:"2",image:"../assets/images/mens/2.avif",price:65.00},
    {id:3,title:"3",image:"../assets/images/mens/3.avif",price:12.00},
    {id:4,title:"4",image:"../assets/images/mens/20.avif",price:30.00},
    {id:5,title:"5",image:"../assets/images/mens/5.avif",price:20.00},
    {id:6,title:"6",image:"../assets/images/mens/6.avif",price:99.00},
    {id:7,title:"7",image:"../assets/images/mens/7.avif",price:60.00},
    {id:8,title:"8",image:"../assets/images/mens/8.avif",price:55.00},
    {id:9,title:"9",image:"../assets/images/mens/9.avif",price:74.00},
    {id:10,title:"10",image:"../assets/images/mens/10.avif",price:16.00},
    {id:11,title:"11",image:"../assets/images/mens/11.avif",price:11.00},
    {id:12,title:"12",image:"../assets/images/mens/12.avif",price:6.00},
    {id:13,title:"13",image:"../assets/images/mens/13.avif",price:120.00},
    {id:14,title:"14",image:"../assets/images/mens/14.avif",price:30.00},
    {id:15,title:"15",image:"../assets/images/mens/15.avif",price:45.00},
    {id:16,title:"16",image:"../assets/images/mens/16.avif",price:33.00},
    {id:17,title:"17",image:"../assets/images/mens/17.avif",price:60.00},
    {id:18,title:"18",image:"../assets/images/mens/18.avif",price:75.00},
    {id:19,title:"19",image:"../assets/images/mens/19.avif",price:69.00},
    {id:20,title:"20",image:"../assets/images/mens/20.avif",price:63.00},
]


let cart = [];

const countitems = document.querySelector('.countitems');
countitems.innerText=`${cart.length}`

//product page
function displayProducts(mens){
    const mens_Products = document.getElementById('mens-container');
        mens.map((val)=>{
        const items = document.createElement('div');
        items.classList.add('menitems');
        items.innerHTML=`
        <div class="image-block">
        <img src = ${val.image} class="mens-image">
        </div>
        <div class="image-title">
        <h2 class="mens-title">${val.title}</h2>
        <h3 class="mens-price">Price : $${val.price}</h3>
        </div>`
        countitems.innerText=`${cart.length}`
        mens_Products.append(items)

        //Add to cart btn

        const addtocart = document.createElement('button');
        addtocart.innerText="Add to Cart";
        addtocart.classList.add('addbtn');
        addtocart.setAttribute('type','submit');
        items.append(addtocart)

        addtocart.addEventListener('click',(add)=>{
            cart.push(val);
            saveCartitems();
            countitems.innerText=`${cart.length}`  
    })    
})
}

//savetolocalstorage

function saveCartitems(){
    localStorage.setItem('cart',JSON.stringify(cart))
}


//loadfromstorage

(function local(){
    const store = localStorage.getItem('cart');
    cart = JSON.parse(store);
})();


//cart 
function displayCart(cart){
    const showcartitems = document.getElementById('cart-container');
    console.log(showcartitems);
    cart.map((val)=>{
        const cart_items = document.createElement('div');
        cart_items.classList.add('menitems');
        cart_items.innerHTML=`
        <div class="image-block">
        <img src = ${val.image} class="mens-image">
        </div>
        <div class="image-title">
        <h2 class="mens-title">${val.title}</h2>
        <h3 class="mens-price">Price : $${val.price}</h3>
        </div>`
        const count=countitems.innerText=`${cart.length}`
        showcartitems.append(cart_items);
        
        const removefromcart = document.createElement('button');
        removefromcart.innerText="Remove";
        removefromcart.classList.add('addbtn');
        removefromcart.setAttribute('type','submit');
        cart_items.append(removefromcart)

        removefromcart.addEventListener('click',()=>{
            cart_items.remove()
            cart.splice(val,1)
            saveCartitems();
            location.reload()
        })
    })

    //total Amount
    const total = document.querySelector('#total');
    var totalAmount = 0;
    var discountopt = 0;
    cart.forEach((val)=>{
        totalAmount += val.price;
        
    })
    // total.innerHTML=`
    //     <h3>Total Amount : $${totalAmount}</h3>
    //     <label for="discount">Coupon Code :<label>
    //     <input  type="text" id="discount">
    //     <button class="discountbtn">Apply</button>
    //     <button type="submit" class="proceed">Proceed</button>`   
        //discound
    const totalamnt = document.querySelector('.totalamt');
    totalamnt.innerText = `Total Amount : $${totalAmount}`
    const finalamt = document.querySelector('#finalamt');
    finalamt.innerText =  `Final Amount : $${totalAmount}`  
    const discount = document.querySelector('#discount'); 
    const discountbtn = document.querySelector('.discountbtn')
    discountbtn.addEventListener('click',()=>{
        const discountValue = discount.value;
        if(discountValue==!'SG10'){
            document.getElementById('err').innerText=`Invalid Coupon`
        }
        else if(discountValue=='SG10'){
            document.getElementById('err').innerText=``
            let discountopt = 0;
            let finalamt = totalAmount*10/100;
            discountopt = totalAmount-finalamt; 
            document.getElementById('finalamt').innerHTML=`Final Amount :$${discountopt}`
        }
        else{
             document.getElementById('finalamt').innerHTML=`Final Amount :$${totalAmount}`
        }
    })
    
    
   
}
//filterprice



