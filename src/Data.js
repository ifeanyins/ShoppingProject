let generateShop =()=>{
    return (shop.innerHTML = shopItemsData.map ((x)=>{
        let {id,price,name,desc,img } = x;
        let search = basket.find((x)=>x.id === id) || [];
        return `
        <div id= product-id-${id} class="item"><img src=${img} alt="" class="imgs">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                        <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
                        <i onclick="increment(${id})"class="bi bi-plus-circle"></i>
                    </div>
                </div>
            </div>
        </div>
            `
    }).join(''));
    };