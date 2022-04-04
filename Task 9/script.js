/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    if (this.budget > 100000000) {
      return true;
    }
    if (this.budget <= 100000000) {
      return false;
    } else {
      alert("Check budget value. Must be number only");
    }
  }
}

//f-jos testavimas
// const movie1 = new Movie("Matrix", "The Wachowskis", 63000000);
// const movie2 = new Movie("Avatar", "James Cameron", 237000000);
// const movie3 = new Movie("Alien", "Ridley Scott", "11 million");

// console.log("movie1 ===", movie1);
// console.log("movie2 ===", movie2);
// console.log("movie3 ===", movie3);

//metodo "wasExpensive" testavimas
// console.log(movie1.wasExpensive());
// console.log(movie2.wasExpensive());
// console.log(movie3.wasExpensive());
