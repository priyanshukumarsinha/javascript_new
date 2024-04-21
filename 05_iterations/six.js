const nums = [1,2,3,4,5,6,7,8,9]

const sum = nums.reduce( (acc, currVal) => {
    return acc + currVal
}, 0)

// const sum = nums.reduce( (acc, currVal) => acc + currVal, 0)

// console.log(sum)


const shoppingCart = [
    {
        itemName : "js Course",
        price : 999,
    },
    {
        itemName : "java Course",
        price : 2999,
    },
    {
        itemName : "python Course",
        price : 999,
    },
    {
        itemName : "web dev Course",
        price : 1999,
    },
    {
        itemName : "mobile dev Course",
        price : 5999,
    },
]

const totalAmount = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(totalAmount)