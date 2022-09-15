import { useLocation } from 'react-router-dom';
import './Detail.css';

export default function Detail() {
  // 1. useLocation 훅 취득
  const location = useLocation();
  
  // 2. location.state 에서 파라미터 취득 - 타입을 지정해줌.
  const state = location.state ;
  const year = state.year;
  const title = state.title;
  const summary = state.summary;
  const poster = state.poster;
  const genres = state.genres;
  
  return (
    <div className="detail__container">
      <span>
      <img src={poster} alt={title} title={title} />
      </span>
      <span className="bold">{title}</span>
      <span >{year}</span>
      <span>{genres}</span>
      <span >{summary}</span>
     

    </div>
  );
}
