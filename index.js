const productData = {
    name: 'Escapade',
    type: 'Full Face Helmet',
    color: 'White',
    price: 1900,
    quantity: 5
}

let productCounter = 1;
let counter = document.getElementById('counter');
counter.innerHTML = `${productCounter}`;
let details_title = document.getElementById('details-title');
details_title.innerHTML = `<p id="sub-title">${productData.type},${productData.color}</p>
                     <h3 id="title">${productData.name}</h3>
                     <h2 id="price">Rs. ${productData.price}</h2>`;



let productJson = {
    'fName': '',
    'lName': '',
    'address': '',
    'apartmentNo': '',
    'city': '',
    'state': '',
    'pincode': '',
    'phone': ''
}

function userDetails() {
    let first_name = document.getElementById('first_name');
    let second_name = document.getElementById('second_name');
    let addr = document.getElementById('addr');
    let addr_details = document.getElementById('addr-details');
    let city = document.getElementById('city');
    let phn = document.getElementById('phn');
    let payment = document.getElementById('payment');
    payment.addEventListener('click',function(){
        console.log(productJson);
    })
    phn.children[0].addEventListener('blur', function () {
        let phone = phn.children[0].value;
        productJson.phone = phone;
    })
    city.children[0].addEventListener('blur', function () {
        let cityName = city.children[0].value;
        productJson.city = cityName;
    })
    city.children[1].addEventListener('blur', function () {
        let state = city.children[1].value;
        productJson.state = state;
    })
    city.children[2].addEventListener('blur', function () {
        let pincode = city.children[2].value;
        productJson.pincode = pincode
    })
    addr_details.children[0].addEventListener('blur', function () {
        let address_details = addr_details.children[0].value
        productJson.apartmentNo = address_details;
    })
    addr.children[0].addEventListener('blur', function () {
        let address = addr.children[0].value
        productJson.address = address
    })
    first_name.addEventListener('blur', function () {
        let fname = first_name.value
        productJson.fName = fname
    })
    second_name.addEventListener('blur', function () {
        let sname = second_name.value
        productJson.lName = sname;
    })

}
let dec = document.getElementById('dec')
let inc = document.getElementById('inc')
let total_price = document.getElementById('total-price');
total_price.innerHTML = `Rs. ${productData.price * productCounter}`

dec.addEventListener('click', productQuantityDec);
inc.addEventListener('click', productQuantityInc);

function productQuantityDec() {
    productCounter--;
    console.log("Clicked minus!", productCounter);
    if (productCounter >= 0) {
        counter.innerHTML = `${productCounter}`;
        total_price.innerHTML = `Rs. ${productData.price * productCounter}`
    }
    else {
        productCounter = 0;
        console.log('Please add some product!')
    }
}
function productQuantityInc() {
    productCounter++;
    console.log("Clicked plus!", productCounter)
    if (productCounter <= 5) {
        counter.innerHTML = `${productCounter}`;
        total_price.innerHTML = `Rs. ${productData.price * productCounter}`
    }
    else {
        productCounter = 5;
        console.log("Out of stock!");
    }
}

userDetails();



