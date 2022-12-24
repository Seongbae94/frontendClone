import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CaractorCategory from "../components/category/Category";

const HomePage = () => {
  const navigate = useNavigate();

  const gotoProducts = () => {
    navigate("/products");
  };

  const sliderList = [
    {
      id: 1,
      image:
        "https://img1.kakaocdn.net/thumb/R300x0@2x.q95.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fnew_store%2Fprod%2Fhome_tab%2Fbanner%2Fmain_banner_20221219135731_231e0e37b1784c64b2acb1c5cb0d9873.jpg",
      title: "마음의 일너 피스",
      desc: "지치고 힘들 때 인센스 스틱으로\n평화를 되찾아보세요.",
    },
    {
      id: 2,
      image:
        "https://img1.kakaocdn.net/thumb/R300x0@2x.q95.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fnew_store%2Fprod%2Fhome_tab%2Fbanner%2Fmain_banner_20221219135731_231e0e37b1784c64b2acb1c5cb0d9873.jpg",
      title: "마음의 이너 피스",
      desc: "지치고 힘들 때 인센스 스틱으로\n평화를 되찾아보세요.",
    },
    {
      id: 3,
      image:
        "https://img1.kakaocdn.net/thumb/R300x0@2x.q95.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fnew_store%2Fprod%2Fhome_tab%2Fbanner%2Fmain_banner_20221219135731_231e0e37b1784c64b2acb1c5cb0d9873.jpg",
      title: "마음의 삼너 피스",
      desc: "지치고 힘들 때 인센스 스틱으로\n평화를 되찾아보세요.",
    },
    {
      id: 4,
      image:
        "https://img1.kakaocdn.net/thumb/R300x0@2x.q95.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fnew_store%2Fprod%2Fhome_tab%2Fbanner%2Fmain_banner_20221219135731_231e0e37b1784c64b2acb1c5cb0d9873.jpg",
      title: "마음의 사너 피스",
      desc: "지치고 힘들 때 인센스 스틱으로\n평화를 되찾아보세요.",
    },
  ];
  const fakeSlideList = [
    sliderList[sliderList.length - 1],
    ...sliderList,
    sliderList[0],
  ];
  // -------------------------------------------------------
  const slideMoveWidth = 640;
  const slideTime = 5000;
  const slideAnimationTime = 500;

  const [slideIdx, setSlideIdx] = useState(1);
  const [correntIdx, setCorrentIdx] = useState(2);
  const [moveX, setMoveX] = useState(640);
  const [transition, setrtansition] = useState(
    `all ${slideAnimationTime / 1000}s`
  );

  //우측 끝으로 갈 시 transition 삭제 후 리셋. 리셋 후에 transition 활성화
  const slideReset = () => {
    setrtansition("");
    setCorrentIdx(2);
    setMoveX(640);
    setTimeout(() => {
      setrtansition("all 0.5s");
    }, slideAnimationTime);
  };

  // 오토 슬라이드
  useEffect(() => {
    const loop = setInterval(() => {
      if (slideIdx >= sliderList.length) {
        setSlideIdx(1);
        setCorrentIdx(correntIdx + 1);
        setMoveX(correntIdx * slideMoveWidth);

        setTimeout(() => {
          slideReset();
        }, slideAnimationTime);
      } else {
        setSlideIdx(slideIdx + 1);
        setCorrentIdx(correntIdx + 1);
        setMoveX(correntIdx * slideMoveWidth);
      }
    }, slideTime);

    return () => {
      clearInterval(loop);
    };
  }, [slideIdx, moveX]);

  return (
    <main>
      <SliderWrap
        width={fakeSlideList.length}
        transition={transition}
        translate={moveX}
      >
        <ul>
          {fakeSlideList.map((list) => (
            <SlideList key={list.id} slideImg={list.image}>
              <div className="content">
                <div className="title">{list.title}</div>
                <div className="desc">{list.desc}</div>
              </div>
            </SlideList>
          ))}
        </ul>
        <div className="pageNumber">
          {slideIdx}/{sliderList.length}
        </div>
      </SliderWrap>
      <CaractorCategory />
      <NewItemWrap>
        <div className="title">새로 나왔어요</div>
        <ul>
          <li onClick={gotoProducts}>
            <div className="listImg"></div>
            <div className="goodsName">드레스업인형_춘식이</div>
            <div className="price">
              <strong>19,000</strong>원
            </div>
          </li>
          <li>
            <div className="listImg"></div>
            <div className="goodsName">드레스업인형_춘식이</div>
            <div className="price">
              <strong>19,000</strong>원
            </div>
          </li>
          <li>
            <div className="listImg"></div>
            <div className="goodsName">드레스업인형_춘식이</div>
            <div className="price">
              <strong>19,000</strong>원
            </div>
          </li>
          <li>
            <div className="listImg"></div>
            <div className="goodsName">드레스업인형_춘식이</div>
            <div className="price">
              <strong>19,000</strong>원
            </div>
          </li>
          <li>
            <div className="listImg"></div>
            <div className="goodsName">드레스업인형_춘식이</div>
            <div className="price">
              <strong>19,000</strong>원
            </div>
          </li>
          <li>
            <div className="listImg"></div>
            <div className="goodsName">드레스업인형_춘식이</div>
            <div className="price">
              <strong>19,000</strong>원
            </div>
          </li>
          <li>
            <div className="listImg"></div>
            <div className="goodsName">드레스업인형_춘식이</div>
            <div className="price">
              <strong>19,000</strong>원
            </div>
          </li>
          <li>
            <div className="listImg"></div>
            <div className="goodsName">드레스업인형_춘식이</div>
            <div className="price">
              <strong>19,000</strong>원
            </div>
          </li>
        </ul>
      </NewItemWrap>
      <ExhibitionWrap>
        <div className="videoWrap">
          <video
            width={"100%"}
            height={"100%"}
            muted
            autoPlay
            loop
            playsInline
            poster="https://img1.kakaocdn.net/thumb/R320x0.q82/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fnew_store%2Fprod%2Fhome_tab%2Frecommend_movie%2Frecommend_movie_20221213182911_392ad9eade8b43b18343dfa327fa535b.mp4.jpg"
          >
            <source src="https://t1.kakaocdn.net/friends/new_store/prod/home_tab/recommend_movie/recommend_movie_20221213182911_392ad9eade8b43b18343dfa327fa535b.mp4.recommend_movie.1080p.mp4" />
          </video>
          <div className="videoContent">
            <div className="title">달콤한 크리스마스</div>
            <div className="desc">디저트로 변신한 프렌즈</div>
          </div>
        </div>
        <ul>
          <li>
            <div className="listImg"></div>
            <div className="listTitle">마이크리스마스쿠키 스노우볼</div>
            <div className="listDesc">
              <strong>29,000</strong>원
            </div>
          </li>
          <li>
            <div className="listImg"></div>
            <div className="listTitle">마이크리스마스쿠키 스노우볼</div>
            <div className="listDesc">
              <strong>29,000</strong>원
            </div>
          </li>
          <li>
            <div className="listImg"></div>
            <div className="listTitle">마이크리스마스쿠키 스노우볼</div>
            <div className="listDesc">
              <strong>29,000</strong>원
            </div>
          </li>
        </ul>
      </ExhibitionWrap>
    </main>
  );
};

const SliderWrap = styled.div`
  width: 100%;
  height: 512px;
  overflow: hidden;
  position: relative;
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    width: ${({ width }) => width * 640 + "px"};
    transform: ${({ translate }) => `translateX(${-translate}px)`};
    transition: ${({ transition }) => transition};
  }
  .pageNumber {
    position: absolute;
    right: 16px;
    bottom: 16px;
    color: rgb(255, 255, 255);
    font-size: 11px;
    padding: 0 6px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 16px;
    line-height: 19px;
  }
`;
const SlideList = styled.li`
  width: 640px;
  height: 512px;
  background-image: url(${({ slideImg }) => slideImg});
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
  .content {
    position: absolute;
    left: 20px;
    bottom: 30px;
    color: rgb(255, 255, 255);
  }
  .title {
    font-size: 32px;
    line-height: 38px;
    font-weight: bold;
  }
  .desc {
    margin-top: 10px;
    font-size: 18px;
    line-height: 21px;
    white-space: pre;
  }
`;

const NewItemWrap = styled.div`
  padding: 30px 15px 0;
  .title {
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    margin: 0;
    list-style: none;
    gap: 39px 10px;
  }
  li {
    flex: 0 0 25%;
    height: 189px;
    margin: 0 -3.8px;
    cursor: pointer;
  }
  .listImg {
    width: 100%;
    height: 142px;
    background-image: Url("https://img1.kakaocdn.net/thumb/R142x142@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221215150812192_8809814929796_AW_00.jpg");
    background-size: cover;
    background-position: center;
  }
  .goodsName {
    width: 142px;
    padding-top: 10px;
    font-size: 14px;
    line-height: 17px;
    color: #616161;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  .price {
    color: #222;
    font-size: 15px;
    line-height: 18px;
  }
`;
const ExhibitionWrap = styled.div`
  width: 100%;
  margin-top: 40px;
  .videoWrap {
    width: 100%;
    height: 360px;
    cursor: pointer;
    position: relative;
  }
  .videoContent {
    position: absolute;
    left: 20px;
    bottom: 40px;
    color: white;
  }
  .videoContent .title {
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
  }
  .videoContent .desc {
    margin-top: 4px;
    font-size: 14px;
    line-height: 17px;
    opacity: 0.8;
  }
  ul {
    display: flex;
    height: 269.33px;
    padding: 0 15px;
    gap: 10px;
    margin: 0;
    margin-top: -25px;
    list-style: none;
  }
  li {
    flex-grow: 1;
    z-index: 100;
    height: 100%;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
  }
  .listImg {
    width: 100%;
    height: 193.33px;
    background-image: Url("https://img1.kakaocdn.net/thumb/R125x125@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221114004816054_8809814929246_AW_00.jpg");
    background-size: cover;
    background-position: center;
  }
  .listTitle {
    font-size: 13px;
    line-height: 16px;
    padding-top: 10px;
    color: #616161;
  }
  .listTitle {
    font-size: 13px;
    line-height: 16px;
    margin-top: 2px;
    color: #616161;
  }
`;

export default HomePage;
