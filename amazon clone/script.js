function generateItems(products) {
    let itemsHTML = "";
    products.forEach((item) => {
        let doc = document.createElement("div");
        doc.classList.add("main-product", "mr-5");
        doc.innerHTML = `
            <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
                <img class="w-full h-full object-contain" src="${item.image}">
            </div>
            <div class="product-name text-gray-700 font-bold mt-2 text-sm">
                ${item.name}
            </div>
            <div class="product-make text-green-700 font-bold">
                ${item.image}
            </div>
            <div class="product-price font-bold text-gray-700 text-lg">
                ${numeral(item.price).format('$0,0.00')}
            </div>`
    })
}
console.log(generateItems);