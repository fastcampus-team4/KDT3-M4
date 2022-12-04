import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__top}>
        <div className={`${style.inner}`}>
          <div className={style.col}>
            <div className={style.logo}>
              <Link to="/" className={style.naver}>
                <span>NAVER</span>
              </Link>
              <Link to="/" className={style.shopping}>
                <span>네이버 쇼핑</span>
              </Link>
            </div>
          </div>
          <div className={style.col}>
            <Link to="/mypage" className="myPage">
              마이페이지
            </Link>
            <Link to="/mycart" className="myCart">
              장바구니
            </Link>
            <Link to="/login" className="myCart">
              로그인
            </Link>
            <Link to="/signup" className="myCart">
              회원가입
            </Link>
            <Link to="/slider" className="myCart">
              (슬라이더)
            </Link>
          </div>
        </div>
      </div>
      <div className={style.header__bottom}>
        <div className={`${style.inner}`}>
          <div className={style.col}>
            <img
              src="https://shop-phinf.pstatic.net/20191031_145/1572507325623D6htg_PNG/9868064258605110_767066992.png?type=m120"
              alt="장바구니"
            />
            <p>맛그레이드하세요↗ 식품전문가 프레시멘토의 큐레이션 서비스</p>
            <div className={style.customerNumber}>관심고객수 117,891</div>
          </div>
          <div className={style.col}>
            <input type="search" placeholder="검색어를 입력해보세요" />
          </div>
        </div>
      </div>
    </header>
  );
}