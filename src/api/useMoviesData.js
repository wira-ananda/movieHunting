import { useEffect, useState } from "react";
import { fetchMovies, fetchMovieDetails } from "./fetch";

const errMsg = "Gagal fetching:";

export const useMoviesData = () => {
  const [data, setData] = useState({
    popularMovies: [],
    topRatedMovies: [],
    nowPlayingMovies: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { popularMovies, topRatedMovies, nowPlayingMovies } =
          await fetchMovies();

        setData({
          popularMovies,
          topRatedMovies,
          nowPlayingMovies,
        });
      } catch (error) {
        console.error(errMsg, error.message);
      }
    };

    fetchData();
  }, []);

  return data;
};

export const useMovieDetailsData = (movieId) => {
  const [data, setData] = useState({
    creditsMovie: [],
  });

  useEffect(() => {
    if (movieId) {
      const fetchData = async () => {
        try {
          const { creditsMovie } = await fetchMovieDetails(movieId);
          setData({
            creditsMovie,
          });
        } catch (error) {
          console.error(errMsg, error.message);
        }
      };

      fetchData();
    }
  }, [movieId]);

  return data;
};

// export const useMovieData = () => {
//   const [data, setData] = useState({
//     creditMovie: [],
//     imagesMovie: [],
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { creditMovie, imagesMovie } = await fetchMovie(movieId);
//         setData({
//           creditMovie: creditMovie,
//           imagesMovie: imagesMovie,
//         });
//       } catch (error) {
//         console.error(errMsg, error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return data;
// };

// export const useCreditsMovie = (movieId) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axiosInstance.get(
//           `/movie/${movieId}/credits${api_key}`
//         );
//         setData(res.data.cast);
//       } catch (error) {
//         console.error(errMsg, error);
//       }
//     };

//     fetchData();
//   }, [movieId]);

//   return {
//     getCreditsMovie: data,
//   };
// };
