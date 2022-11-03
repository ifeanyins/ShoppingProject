let shop = document.getElementById('shop');
  
let shopItemsData = [
{
    id:'fdse',
    name:'Bow Tie',
    price: 45,
    desc: 'Lorem ipsum, dolor sit amet consectetur obcaecati architecto beatae quis, enim quas mollitia! Eius, excepturi!',
    img: 'images/download.JPEG'
},
{
    id:'fdsje',
    name:'Hugo Boss Suit',
    price: 1000,
    desc: 'Lorem ipsum, dolor sit amet consectetur obcaecati architecto beatae quis, enim quas mollitia! Eius, excepturi!',
    img: 'images/download2.JPEG'
},
{
    id:'fdbse',
    name:'Men Shoes',
    price: 100,
    desc: 'Lorem ipsum, dolor sit amet consectetur obcaecati architecto beatae quis, enim quas mollitia! Eius, excepturi!',
    img: 'images/download3.JPEG'
},
{
    id:'fdsbe',
    name:' NS Air',
    price: 120,
    desc: 'Lorem ipsum, dolor sit amet consectetur obcaecati architecto beatae quis, enim quas mollitia! Eius, excepturi!',
    img: 'images/download4.JPEG'
}
];

let basket = [{
    id:'yfuf',
    item:1
}];

let generateShop =()=>{
return (shop.innerHTML = shopItemsData.map ((x)=>{
    let {id,price,name,desc,img } = x;
    return `
    <div id= product-id-${id} class="item"><img src=${img} alt="" class="imgs">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                    <div id=${id} class="quantity">0</div>
                    <i onclick="increment(${id})"class="bi bi-plus-circle"></i>
                </div>
            </div>
        </div>
    </div>
        `
}).join(''));
};

generateShop();

let increment =(id)=>{
    let selectedItem = id;
    let search = basket.find((xr)=> xr.id === selectedItem.id)
    
    if (search === undefined) {
        basket.push({
            id:selectedItem.id,
            item: 1,
        });
    }
    else{
        search.item += 1;
    }

    // console.log(basket);
    update(selectedItem.id);
}
let decrement =(id)=>{
    let selectedItem = id;
    let search = basket.find((xr)=> xr.id === selectedItem.id)

    if (search.item === 0) return;
    else{
        search.item -= 1;
    }

   
    // console.log(basket);
    update(selectedItem.id);
}
let update =(id)=>{
    let search = basket.find((xr) =>xr.id === id);
    document.getElementById(id).innerHTML = search.item;
    
}