import Movie from '../models/movie';
import moment from 'moment';

// Hardcode the days
const days = [ 'Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D') ];

const times = [ '9:00 AM', '11:10AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM'];

export const index = (req, res, next) => {
  // Find all movies and return json response
  Movie.find().lean().exec((err, movies) => res.json(
    // Iterate through each movies
    { movies: movies.map(movie => ({
        ...movie,
        days, // append days
        times
    }))}
  ));
};
