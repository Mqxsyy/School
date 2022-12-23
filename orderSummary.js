var tellimus = {
	id: 2113,
	orderNumber: "E210126001",
	createdAt: "2021-01-26 16:04:24",
	clientName: "Kalle Tali",
	deliveryType: "Omniva smartpost",
	deliveryValue: 178,
	rows: [
		{
			article_id: 31,
			name: "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W",
			product_code: "257549",
			price: 49.1666666667,
			amount: 1,
			vat: 0.2,
		},
		{
			article_id: 23420,
			name: "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk",
			product_code: "355836",
			price: 5.0666666667,
			amount: 2,
			vat: 0.2,
		},
		{
			article_id: 23421,
			name: "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk",
			product_code: "000000000501267301",
			price: 5.825,
			amount: 1,
			vat: 0.2,
		},
	],
};

OrderSummary(tellimus, true);

function OrderSummary(Order, RoundNumbers) {
	let ObjectLength = Object.keys(Order["rows"]).length;
	let TotalPrice = 0;

	for (i = 0; i < ObjectLength; i++) {
		let Item = Order["rows"][i];
		let ItemPrice = Item["price"] * (1 + Item["vat"]);
		let TotalItemPrice = ItemPrice * Item["amount"];

		if (RoundNumbers) {
			ItemPrice = Math.round(ItemPrice * 100) / 100;
			TotalItemPrice = Math.round(TotalItemPrice * 100) / 100;
		}

		TotalPrice += TotalItemPrice;

		console.log(
			"Name: " +
				Item["name"] +
				"\n" +
				"Amount: " +
				Item["amount"] +
				"\n" +
				"Single Price: " +
				ItemPrice +
				"\n" +
				"Total Price: " +
				TotalItemPrice +
				"\n"
		);
	}

	if (RoundNumbers) TotalPrice = Math.round(TotalPrice * 100) / 100;

	console.log("Total Order Price: " + TotalPrice);
}
