/*
* Create a variable for each order with the order number as the name of the variable.
* Create an object for each order based on the specs in the ReadMe
* Each object will have two nested objects ex.(pizza & toppings)
* Keys with more than one value should be an array of strings ex. Veggies
*/

var Customers = {

		order11821:{
			CustomerName: "James Franko",
			Address: "2155 E Lake Dr",
			City: "Seattle",
			State: "WA",
			ZipCode: 11310,
				Pizza:{
				Crust: "thin",
  				PizzaSauce: "robust marinara",
  				Cheese: "regular",
 				Toppings:
    			Veggies: [
    				"olives", "green peppers"
    				],
    			Meats: [
    				"pepperoni", "ham", "sausage"
    				],
				SideItems: [
				"breadsticks", "bbq wings" "6 piece"
				],
				Sauces: "ranch"
				}
			Special Instructions: "please cut into squares"
			Payment Type: "cash"
			Store Id: 112
	}
		order11372: {
			CustomerName: "Justin Bieber",
			Address: "1801 W Rodeo Dr",
			City: "Beverly Hills",
			State: "CA",
			ZipCode: 91833,
				Pizza:{

					Crust: "thin",
  					PizzaSauce: "creamy garlic alfredo",
  					Crust: "stuffed crust",
  					Cheese: "double",
 					Toppings:{
    				Veggies: [
    					"olives", "green peppers"
    					],
    				Meats: [
    					"pepperoni", "ham", "sausage"
    					]
    				}
					SideItems: [
					"double fudge brownie dessert"
						],
					Sauces: "bbq", "garlic sauce"
						}
				Special Instructions: "call 815 at the gate"
				Payment Type: "card"
				Store Id: 382
	}


}
var currentOrders = {
	1:order11372,
	2:order11821
} 

/*
* Create a new variable named currentOrders
* currentOrders should be single object containing both orders from above
*/

/*
* Make the changes to the currentOrders object based on the ReadMe
* Run your file with node pizza.js
* Console.log(currentOrders) to verify changes have been made
*/
