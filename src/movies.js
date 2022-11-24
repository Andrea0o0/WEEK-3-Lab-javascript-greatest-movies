// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let newArrayDirector = []
    moviesArray.forEach(element => newArrayDirector.push((element.director)))
    return newArrayDirector
        
}

const test = [{
    title: 'Jodaeiye Nader az Simin',
    year: 2011,
    director: 'Asghar Farhadi',
    duration: '2h 3min',
    genre: ['Drama', 'Mystery'],
    score: 8.4
  }]
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergmovies = moviesArray.filter(movies => {
      if(movies.director.includes('Steven Spielberg')){
        return true}
      })
    //console.log(spielbergmovies)
    const dramagenre = spielbergmovies.filter((movies,bigindex) => {
      let genredramatrue = 0
      spielbergmovies[bigindex].genre.forEach((element, index,array) => {
       if(array[index]=='Drama'){
        genredramatrue++}
      })
    return genredramatrue>0      
    })
    // console.log(dramagenre)
    if(dramagenre==[]){
        return 0
    }
    else{
        //console.log(dramagenre.length)
      return dramagenre.length
    }
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length==0){
        return 0}
    else{
        let totalscores = []
        moviesArray.forEach((item)=>{
            if(typeof item.score=="number"){
                totalscores.push(item.score)
            }
            else{
                totalscores.push(0)
            }
        })
        const resultAverage = ((totalscores.reduce((accum,currentValue) => accum + currentValue))/totalscores.length)

            return (Math.round(resultAverage*100))/100

        // console.log(resultAverage)
        // console.log(moviesArray)
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const dramaGenreScore = moviesArray.filter((movies,bigindex) => {
        let genredramatruescore = 0
        moviesArray[bigindex].genre.forEach((element, index,array) => {
         if(array[index]=='Drama'){
          genredramatruescore++}
        })
      return genredramatruescore>0      
      })
      let totaldramascores = []
      dramaGenreScore.forEach((item)=>{
        if(typeof item.score=="number"){
            totaldramascores.push(item.score)
        }
        else{
            totaldramascores.push(0)
        }
    })
  if(dramaGenreScore.length<1){
    return 0
  }
  else{
    const resultDramaAverage = ((totaldramascores.reduce((accum,currentValue) => accum + currentValue))/totaldramascores.length)
    // console.log(dramaGenreScore)
    return (Math.round(resultDramaAverage*100))/100
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedYears = [...moviesArray].sort((a, b) => {
        if (a.year < b.year) {
          return -1
        }
        if (a.year > b.year) {
          return 1
        }
        if(a.year == b.year){
          if(a.title<b.title){
            return -1
          }
          if(a.title>b.title){
            return 1
          }
        }
      })
      return sortedYears
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedTitles = [...moviesArray].sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
      }) 
    const titles20 = sortedTitles.slice(0,20)
    const result20Titles = []
    titles20.forEach(item => result20Titles.push(item.title))
    return result20Titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newMoviesArray = JSON.parse(JSON.stringify(moviesArray))
    const toMin = [...newMoviesArray].filter(word => {
        const hourForm = ((word.duration[word.duration.indexOf("h")-1]*60))
        let minForm = 0
        if(word.duration.includes("min")){
        minForm+=parseInt(word.duration.slice((word.duration.indexOf("min")-2),(word.duration.indexOf("min"))))}
        return word.duration = hourForm+minForm 
      })
    return toMin
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if(moviesArray.length<1){
    return null
  }
  let copyAyear = []
  let bestYear = []
  moviesArray.forEach((bigitem,bigindex) => {
    if(copyAyear.includes(bigitem.year)){
      bestYear.forEach(item => {
        if(item.year == bigitem.year){
          item.score += bigitem.score
          item.averagelength++
        }
      })
    }
    else{
       bestYear.push({year:bigitem.year,score:bigitem.score,averagelength:1})
       copyAyear.push(bigitem.year)
      // console.log("it works")
     }
    })
  bestYear.forEach(item => item.score = item.score/item.averagelength)
  const sortedscores = bestYear.sort((aitem, bitem) => {
    if(aitem.score < bitem.score){
      return 1
    }
    if(aitem.score > bitem.score){
      return -1
    }
    if(aitem.score == bitem.score){
      if(aitem.year < bitem.year){
        return -1
      }
      else {
        return 1
      }
    }
    })
  const finalresult = `The best year was ${sortedscores[0].year} with an average score of ${sortedscores[0].score}`
  console.log(finalresult)
  return finalresult
}
