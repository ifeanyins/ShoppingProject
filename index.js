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
    price: 45,
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

let generateShop =()=>{
return (shop.innerHTML = shopItemsData.map ((x)=>{
    let {id,price,name,desc,img } = x;
    return `
    <div id-product-id-${id} class="item"><img src=${img} alt="" class="imgs">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="buttons">
                    <i class="bi bi-dash-circle"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-plus-circle"></i>
                </div>
            </div>
        </div>
    </div>
        `
}).join(''));
};

generateShop();