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

let basket = JSON.parse(localStorage.getItem("data")) || []


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
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket))

}
let decrement =(id)=>{
    let selectedItem = id;
    let search = basket.find((xr)=> xr.id === selectedItem.id)

    if (search === undefined) return;
    else if (search.item === 0) return;
    else{
        search.item -= 1;
    }
   update(selectedItem.id);
    
   basket = basket.filter((x) => x.item !== 0);

   localStorage.setItem("data", JSON.stringify(basket))
}
let update =(id)=>{
    let search = basket.find((xr) =>xr.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation()
}

let calculation = () =>{
    let cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y, )
}
calculation()