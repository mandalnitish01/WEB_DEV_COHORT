let expenses = [
    { description: "Groceries", amount: 50, category: "Food" },
    { description: "Electricity Bill", amount: 100, category: "Utilities" },
    { description: "Dinner", amount: 30, category: "Food" },
    { description: "Internet Bill", amount: 50, category: "Utilities" },
    { description: "Dinner", amount: 130, category: "Fair" },
    { description: "Internet Bill", amount: 50, category: "Fair" },
    { description: "Furniture", amount: 150, category: "Home" },
    { description: "Water Bill", amount: 150, category: "Home" },
    { description: "Books", amount: 50, category: "Study" },
    { description: "college", amount: 150, category: "Study" },
  ]; 
//   here i have to find all the expences of each category


let expancecatogery = expenses.reduce((report , expence)=>{ //(acc, currentvalue)
    // report[expence.category] += expence.amount;
    report[expence.category] = (report[expence.category]  || 0) + expence.amount
    // console.log(report)
    return report;

},{});
// console.log(expancecatogery);


let tasks = [
    { description: "Write report", completed: false, priority: 2 },
    { description: "Send email", completed: true, priority: 3 },
    { description: "Prepare presentation", completed: false, priority: 1 },
    { description: "Prepare presentation", completed: false, priority: 0 },
  ];

  //find krna hai if tasks is not colpleated then sort on the basis of priority
   let pendingtasksort = tasks
   .filter((taks)=>{ return !tasks.completed})
   .sort((a,b)=>{return a.priority - b.priority});
   console.log(pendingtasksort)



let movieRatings = [
    { title: "Movie A", ratings: [4, 7, 6] },
    { title: "Movie B", ratings: [7, 5, 4] },
    { title: "Movie C", ratings: [3, 5, 2] },
  ];
  //to find avg rating of each movie

  let avgRating = movieRatings.map((movie)=>{
    let sum = movie.ratings.reduce((sum,rating) => sum+rating , 0)
    let average = sum / movie.ratings.length;
    return {title:movie.title, Rating:average.toFixed(1)}
  })
//   console.log(avgRating)