import {API_KEY} from './constants/constants'

export const originals =`discover/tv?api_key=${API_KEY}&with_networks=213`

export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`

export const comedyMovies = `discover/movie?api_key=${API_KEY}&with_genres=35`

export const horrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`

export const romanceMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`

export const documentaries = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`