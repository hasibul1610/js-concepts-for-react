const products = [
    {name: 'laptop', brand: 'Dell',price: 60000},
    {name: 'laptop', brand: 'Apple',price: 50000},
    {name: 'laptop', brand: 'Asus',price: 30000},
    {name: 'laptop', brand: 'HP',price: 45000},
    {name: 'laptop', brand: 'Lenovo',price: 25000},
];

const brandName = products.map(product => product.brand);
// console.log(brandName);

// products.forEach(product => console.log(product));

const specificName = products.filter(product => product.brand.includes('H'));
// console.log(specificName);

const specificNameWithFind = products.find(product => product.brand.includes('A'));
// console.log(specificNameWithFind);

const newProduct = {name: 'laptop', brand: 'Zed',price: 12000};

const updateArray = [...products, newProduct];

// console.log(updateArray);

const deletedOneElementArray = products.filter(product => product.brand !== 'Lenovo');
console.log(deletedOneElementArray);


