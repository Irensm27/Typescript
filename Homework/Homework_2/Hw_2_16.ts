let cartsDiv:HTMLDivElement = document.createElement('div');

fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(json => {
        let {carts} = json;
        console.log(carts);

        for (const cart of carts) {
            let div:HTMLDivElement = document.createElement('div');
            div.classList.add('cart-container');
            let divWithInfo:HTMLDivElement = document.createElement('div');
            divWithInfo.innerText = `
            "total": ${cart.total},
            "discountedTotal": ${cart.discountedTotal},
            "userId": ${cart.userId},
            "totalProducts": ${cart.totalProducts},
            "totalQuantity: ${cart.totalQuantity}
            `
            let ol:HTMLOListElement = document.createElement('ol');
            for (const product of cart.products) {
                let li:HTMLLIElement = document.createElement('li');
                let info:HTMLParagraphElement = document.createElement('p')
                info.innerText = `
                "id": ${product.id},
                "title": ${product.title},
                "price": ${product.price},
                "quantity": ${product.quantity},
                "total": ${product.total},
                "discountPercentage": ${product.discountPercentage},
                "discountedTotal": ${product.discountedTotal} 
                `
                let img:HTMLImageElement = document.createElement('img');
                img.src = product.thumbnail;
                li.append(img, info);

                ol.appendChild(li)

            }

            div.append(divWithInfo, ol)
            cartsDiv.appendChild(div)
        }
    })

document.body.appendChild(cartsDiv);