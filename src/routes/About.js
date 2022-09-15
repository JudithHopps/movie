import React from "react";
import './About.css';

// import { useLocation } from 'react-router-dom';
// pathname: 현재 주소의 경로 (쿼리스트링 제외)
// search: 맨 앞의 ? 문자 포함한 쿼리스트링 값
// hash: 주소의 # 문자열 뒤의 값 (주로 History API 가 지원되지 않는 구형 브라우저에서 클라이언트 라우팅을 사용할 때 쓰는 해시 라우터에서 사용합니다.)
// state: 페이지로 이동할때 임의로 넣을 수 있는 상태 값


function About() {
  return (
    <div className="about__container">
      <span>
        “Freedom is the freedom to say that two plus two make four. If that is granted, all else
        follows.”
      </span>
      <span>- George Orwell, 1984</span>
    </div>
  );
}

export default About;