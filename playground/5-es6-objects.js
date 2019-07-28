// Object property shorthand

const name = 'Steve'
const userAge = 31

const user = {
    name,
    age: userAge,
    location: 'Boston'
}

console.log(user)

// Object destructuring

const product = { 
    label: 'Red notebook', 
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating="diarrhea"} = product

// console.log(stock)
// console.log(rating)
// console.log(productLabel)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)