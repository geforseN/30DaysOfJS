// friends - список из объектов(друзей)
// где поле "books" - список любимых книг друга
var friends = [
{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
{ name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
{ name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
]

// allbooks - список, который будет содержать все книги друзей +
// дополнительный список указанный в initialValue
var allbooks = friends.reduce(function(prev, curr) {
  return [...prev, ...curr.books];
}, ["Alphabet"]);
console.log(allbooks)