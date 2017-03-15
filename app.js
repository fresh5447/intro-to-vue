var greetingApp = new Vue({
  'el': '#greeting',
  'data': {
    message: "I love javascript!!",
    cta: "JS is esstential in developing for the web"
  }
});


var numbersContainer = new Vue({
  'el': '#numbersList',
  'data': {
    title: 'my favorite numbers',
    numbers: [11, 20, 23, 33, 77, 87, 99]
  }
});

var dogs = [
  { name: "Fido", breed: "miniateur schnauzer", img: "http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23252_dogue-de-bordeaux-dog-breed.jpg" },
  { name: "Susie", breed: "golden retriever", img: "http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23252_dogue-de-bordeaux-dog-breed.jpg" },
  { name: "Buddy", breed: "pug", img: "http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23252_dogue-de-bordeaux-dog-breed.jpg" },
  { name: "Paully", breed: "siberian husky", img: "http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23252_dogue-de-bordeaux-dog-breed.jpg" },
  { name: "Skip", breed: "german shepard", img: "http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23252_dogue-de-bordeaux-dog-breed.jpg" },
  { name: "Fido", breed: "rottweiler", img: "http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23252_dogue-de-bordeaux-dog-breed.jpg" },
];

var dogsContainer = new Vue({
  'el': '#dogView',
  'data': {
    dogs: dogs
  }
});
