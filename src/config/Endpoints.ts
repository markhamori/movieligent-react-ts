export const searchByTitle = (title:string | undefined, page:number = 1):string => {
  return `https://www.localhost:3000/${title}&page=${page}`
}

// API_KEY
// query - string - "Movie name"
    // if query at least 3 chars, automatic search
    // button search
// page -  int - 1-1000

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=Apple&page=1&include_adult=false