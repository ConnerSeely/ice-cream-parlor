const iceCream = [{ type: 'Ice Cream', id: 1, name: 'Cookie Dough', image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg', price: 1 }, { type: 'Ice Cream', id: 2, name: 'Vanilla', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg', price: 1 }, { type: 'Ice Cream', id: 3, name: 'Strawberry', image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg', price: 2 }]

const vessels = [{ type: 'Vessel', id: 4, name: 'Waffle Cone', image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg', price: 2 }, { type: 'Vessel', id: 5, name: 'Waffle Bowl', image: 'http://images.wbmason.com/350/L_JOY66050.jpg', price: 4 }]

const toppings = [{ type: 'Topping', id: 6, name: 'Sprinkles', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg', price: 1 }, { type: 'Topping', id: 7, name: 'Chocolate Chips', image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360', price: 2 }]

const order = []

function drawMenuIceCream() {

    let template = ''

    iceCream.forEach(item => {
        template += `
    <div class="col-md-4 p-2">
    <div class="shadow rounded IceCream-card action" onclick="addToCart(${item.id})">
    <img class="w-100 object-cover rounded-top" height="200px" src="${item.image}" alt="IceCream">
    <div class="d-flex justify-content-between p-3">
    <h4>${item.name}</h4>
    <h4><em>$${item.price.toFixed(2)}</em></h4>
    </div>
    </div>
    </div>
    `
    })


    document.getElementById('menu-icecream').innerHTML = template
}

function drawMenuToppings() {

    let template = ''

    toppings.forEach(item => {
        template += `
    <div class="col-md-4 p-2">
    <div class="shadow rounded Toppings-card action" onclick="addToCart(${item.id})">
    <img class="w-100 object-cover rounded-top" height="200px" src="${item.image}" alt="Toppings">
    <div class="d-flex justify-content-between p-3">
    <h4>${item.name}</h4>
    <h4><em>$${item.price.toFixed(2)}</em></h4>
    </div>
    </div>
    </div>
    `
    })


    document.getElementById('menu-toppings').innerHTML = template
}

function drawMenuVessels() {

    let template = ''

    vessels.forEach(item => {
        template += `
    <div class="col-md-4 p-2">
    <div class="shadow rounded Vessels-card action" onclick="addToCart(${item.id})">
    <img class="w-100 object-cover rounded-top" height="200px" src="${item.image}" alt="Toppings">
    <div class="d-flex justify-content-between p-3">
    <h4>${item.name}</h4>
    <h4><em>$${item.price.toFixed(2)}</em></h4>
    </div>
    </div>
    </div>
    `
    })


    document.getElementById('menu-vessels').innerHTML = template
}

function drawOrder() {
    let template = ''
    let total = 0
    order.forEach(item => {
        total += item.price
        template += `
    <li class="d-flex justify-content-between border-bottom border-secondary">
      <p class="m-1">${item.name}</p>
      <p class="m-1">$${item.price.toFixed(2)}</p>
    </li>
    `
    })

    template = template || '<p><em>No items in cart</em></p>'

    document.getElementById('total').innerText = total.toFixed(2)
    document.getElementById('order-items').innerHTML = template
    document.getElementById('total-order-items').innerText = order.length.toString()
}


function addToCart(id) {
    let allItems = [...iceCream, ...vessels, ...toppings]
    let found = iceCream.find(item => item.id == id)
    // if ! found
    // vessels.find
    if (!found) {
        found = vessels.find(item => item.id == id)
    }
    // if ! found
    // toppings.find
    if (!found) {
        found = toppings.find(item => item.id == id)
    }

    if (found) {
        console.log(found)
        order.push(found)
        drawOrder()
    }
    document.getElementById('checkout-button').disabled = false
}

function checkout() {
    order.length = 0
    drawOrder()
    document.getElementById('checkout-button').disabled = true
    setTimeout(() => {
        bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('order')).hide()
    }, 1000)
}





// startup
drawMenuIceCream()
drawMenuToppings()
drawMenuVessels()
drawOrder()