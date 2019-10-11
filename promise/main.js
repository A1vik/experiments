const fetchProducts = () => Promise.resolve({data: [1, 2, 3]});
const fetchAdditional = (products) => Promise.resolve({
	data: [2, 3, 4]
});

const getProducts = async () => {
	const products = await fetchProducts();

	if (!products.data.length) {
		return products.data;
	}

	return fetchAdditional(products.data);
};

// const getProducts = () => {
// 	fetchProducts().then(result => console.log(result));
// };

// const getProducts = async () => {
// 	try {
// 		const products = await fetchProducts();
// 		console.log(products);
// 	} catch (err) {
// 		console.log('error: ', err);
// 	}
// };

getProducts().then(result => console.log('result ', result));



const status = (response) => {
		return response.status !== 200
		? Promise.reject(new Error(response.status))
		: Promise.resolve(response);
};

const json = response => response.json();

// fetch('https://jsonplaceholder.typicode.com/users')
// 	.then(status)
// 	.then(json)
// 	.then(data => console.log(data))
// 	.catch(err => console.log('error', err));


	const getUsers = async () => {
		const users = await fetch('https://jsonplaceholder.typicode.com/users');
		const usersData = users.json();
		return usersData;
	};

	getUsers().then(users => console.log(users));