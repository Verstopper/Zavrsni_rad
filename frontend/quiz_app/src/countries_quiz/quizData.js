

import helper from "./helper";




 const jsonArray = helper.getCountriesAndCapitals()

export const quizData  = [];

jsonArray.then((result) => {
  console.log("as")
  console.log(result.length);
  quizData.push(result);
})

