// Guided Practice - Block15
//const dinner = {cheeseburger: 12,
//steak: 20,
//soup: 8,
//macAndCheese: 14,
//soupAndSalad: 16,
//};
//console.log(Object.keys(dinner));
//console.log(Object.values(dinner));
//for (const property in dinner);
//let total=0;
//for (const property in dinner){
//    total += dinner[property];}
//    console.log(total);


// Workshop - Block15
// keys	values
// firstName	"jake"
// lastName	"smith"
// email	"jaekSmih!aol.com"
// phone	undefined
// zipCode	"631"
// zipCode:"631",
// favoriteFlavors: 32,
// cupSize: "medium",
// favoriteStore: "Target",
// firstVisit:	"false",}// 



const customer = 
{firstName: "jake",
lastName: "smith",
email: "jaekSmih!aol.com",
phone: undefined,
zipCode:"631",
favoriteFlavors: 32,
cupSize: "medium",
favoriteStore: "Target",
firstVisit:	"false",}

customer.email="Jak3Smith1992@email.com";
customer.phone="3195551234";
customer.zipCode="63132";
customer.favoriteFlavors="coffee,strawberry,matcha";

delete customer["zipCode"];
delete customer["favoriteStore"];

customer.toppings="chocolateSprinkles,waferStraws,gummyBears";
customerFutureFlavors="mango";
customer.todaysPurchaseCost= 5.32;

console.log(Object.keys(customer));