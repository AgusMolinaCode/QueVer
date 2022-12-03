const key ='66fcf99ec4a23a5ad2778d8c87e9c2da'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-ES&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=es-ES&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=es-ES&page=1`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=es-ES&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=es-ES&page=1`,
  };

  export default requests