// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getTrendMovies } from 'shared/services/Api';

// import styles from './trending-movies.css';

// const TrendingMovies = () => {
//   const [items, setItems] = useState([]);
//   // const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTrendMovies = async () => {
//       try {
//         // setLoading(true);
//         const { results } = await getTrendMovies();
//         setItems(prevItems => [...prevItems, ...results]);
//         console.log(results);
//       } catch (error) {
//         setError(error.message);
//       }
//       // finally {
//       // setLoading(false)
//       // }
//     };
//     fetchTrendMovies();
//   }, [setItems, getTrendMovies, setError]);

//   return (
//     <>
//       <h1>Trending Today</h1>
//       <ul>
//         {items.map(({ id, title }) => (
//           <Link key={id}>
//             <li>
//               <h2>{title}</h2>
//             </li>
//           </Link>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default TrendingMovies;
