// create 5 burgers (at least 3 should be beef)
/*
db.burger.insert([{
meat:'beef',
cheese: false,
topping: ['ketchup','onions','pickles']},
{
meat:'chicken',
cheese: false,
topping: ['onion','worstershire sauce','french fries']},
{
meat:'turkey',
cheese: false,
topping: ['pickled beets','onions','hot fudge']},
{
meat:'ostrich',
cheese: false,
topping: ['sriracha','pickles','ramen']},
{
meat:'tofu',
cheese: false,
topping: ['capers','relish','hot fudge']},
{
meat:'emu',
cheese: false,
topping: ['ketchup','onions','french fries']},
{
meat:'buffalo',
cheese: false,
topping: ['ketchup','onions','mustard']},
{
meat:'elk',
cheese: false,
topping: ['ketchup','guacamole']},
{
meat:'beef',
cheese: false,
topping: ['olives','guacamole','french fries']},
{
meat:'beef',
cheese: false,
topping: ['ketchup','mustard','french fries']},
{
meat:'beef',
cheese: false,
topping: ['pickled beets','relish','kimchi']},
{
meat:'beef',
cheese: false,
topping: ['ketchup','onions','mushrooms']},
])
*/

// find all the burgers
/*
db.burger.find().pretty()
*/

// show just the meat of each burger
/*
db.burger.find({},{
    meat: 1,
    _id: false
}).pretty()
*/

// show just the toppings of each burger
/*
db.burger.find({},{
    topping: 1,
    _id: false
}).pretty()
*/

// show everything but the cheese
/*
db.burger.find({},{
    meat: 1,
    topping: 1,
    _id: false
}).pretty()
*/

// find all the burgers with beef
/*
db.burger.find({
    meat: 'beef'
}).pretty()
*/

// find all the burgers that are not beef
/*
db.burger.find({
    meat: { $ne: 'beef' }
}).pretty()
*/

// find the first burger with cheese
/*
db.burger.find({
    cheese: true
}).limit(1).pretty()
*/

// find one and update the first burger with cheese to have a property of 'double cheese'
/*
db.burger.update({
    cheese: true
},{
    $set: { cheese: 'double cheese'}
})
*/

// find the burger you updated to have double cheese
/*
db.burger.find({
    cheese: 'double cheese'
})
*/

// find and update all the beef burgers to be 'veggie'
/*
db.burger.updateMany({
    meat: 'beef'
},{
    $set: { meat: 'veggie'}
})
*/

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
/*
db.burger.deleteOne({
    meat: 'veggie'
})
*/

// drop the collection
//Expected Output
//true
/*
db.burger.drop()
*/

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
/*
db.dropDatabase()
*/


//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database


//
// Change the name of the key cheese to 'pumpkinSpice'


// find all the burgers with ketchup (or another topping you used at least once)


// find all the burgers with pickles (or a topping you used more than once) and remove the pickles


// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 
