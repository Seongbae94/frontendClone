import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import CaractorCategory from "../components/category/Category";
import MiddBaner from "../components/middleBaner/MiddleBaner";

import charInfos from "../components/sub/db/data.json";

import { priceToString } from "../components/sub/utils/PriceToString";

const HomePage = () => {
  const navigate = useNavigate();
  // -----------------------------------------------------
  const gotoProducts = () => {
    navigate("/products");
  };

  const sliderList = [
    {
      id: 1,
      image:
        "https://img1.kakaocdn.net/thumb/R300x0@2x.q95.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fhome_tab%2Fbanner%2Fmain_banner_20221222140316_252944f5104a40949d74ab39330c1677.jpg",
      title: "패피 춘식이 등장",
      desc: "2가지 착장으로 연출 가능\n드레스업 춘식이 인형",
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
        "https://img1.kakaocdn.net/thumb/R300x0@2x.q95.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fhome_tab%2Fbanner%2Fmain_banner_20221220174956_c469cfba6621497291db1be5be3e8835.jpg",
      title: "춘식이와 팝콘을 와삭",
      desc: "사먹을 필요 없어요\n직접 만드는 고소한 팝콘",
    },
    {
      id: 4,
      image:
        "https://img1.kakaocdn.net/thumb/R300x0@2x.q95.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fhome_tab%2Fbanner%2Fmain_banner_20221208155324_f5adde6ed6924f38a69feeabbd099559.jpg",
      title: "행운의 황금 당근인형",
      desc: "라이언과 황금 당근 뽑고\n새해 기운 듬뿍 받아가요!",
    },
  ];
  const firstList = {
    ...sliderList[0],
    id: 0,
  };
  const lastList = {
    ...sliderList[sliderList.length - 1],
    id: sliderList.length + 1,
  };
  const fakeSlideList = [lastList, ...sliderList, firstList];
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
  const [btnLoading, setBtnLoading] = useState(false);

  const slideLeftMove = () => {
    if (!btnLoading) {
      setBtnLoading(true);

      if (slideIdx <= 1) {
        setSlideIdx(sliderList.length);
        setCorrentIdx(correntIdx - 1);

        setTimeout(() => {
          slideReset("left");
        }, slideAnimationTime);
      } else {
        setSlideIdx(slideIdx - 1);
        setCorrentIdx(correntIdx - 1);
      }

      setTimeout(() => {
        setBtnLoading(false);
      }, slideAnimationTime + 500);
    }
  };

  const slideRightMove = () => {
    if (!btnLoading) {
      setBtnLoading(true);

      if (slideIdx >= sliderList.length) {
        setSlideIdx(1);
        setCorrentIdx(correntIdx + 1);

        setTimeout(() => {
          slideReset("right");
        }, slideAnimationTime);
      } else {
        setSlideIdx(slideIdx + 1);
        setCorrentIdx(correntIdx + 1);
      }

      setTimeout(() => {
        setBtnLoading(false);
      }, slideAnimationTime + 500);
    }
  };

  //transition 삭제 후 리셋. 리셋 후에 transition 활성화
  const slideReset = (direction) => {
    switch (direction) {
      case "right":
        setrtansition("");
        setCorrentIdx(2);
        setMoveX(slideMoveWidth);

        setTimeout(() => {
          setrtansition(`all ${slideAnimationTime / 1000}s`);
        }, slideAnimationTime);
        break;
      case "left":
        setrtansition("");
        setCorrentIdx(fakeSlideList.length - 1);
        setMoveX(slideMoveWidth * sliderList.length);
        setTimeout(() => {
          setrtansition(`all ${slideAnimationTime / 1000}s`);
        }, slideAnimationTime);
        break;
    }
  };

  // 오토 슬라이드
  useEffect(() => {
    const loop = setInterval(() => {
      slideRightMove();
    }, slideTime);

    setMoveX((correntIdx - 1) * slideMoveWidth);

    return () => {
      clearInterval(loop);
    };
  }, [slideIdx, moveX]);
  // ----------------------------------------------------------
  const TotalGoodsPage = 3;
  const moveLength = 300;
  const [nowGoodsPage, setNowGoodsPage] = useState(1);
  const [goodsMoveX, setGoodsMoveX] = useState(0);

  const [goodsLeftBtn, setGoodsLeftBtn] = useState("controlBtn left");
  const [goodsRightBtn, setGoodsRightBtn] = useState("controlBtn right Active");

  const rightMove = () => {
    if (nowGoodsPage < 3) {
      setNowGoodsPage(nowGoodsPage + 1);
    }
  };
  const leftMove = () => {
    if (nowGoodsPage > 1) {
      setNowGoodsPage(nowGoodsPage - 1);
    }
  };
  useEffect(() => {
    setGoodsMoveX(moveLength * (nowGoodsPage - 1));

    setGoodsLeftBtn("controlBtn left Active");
    setGoodsRightBtn("controlBtn right Active");

    if (nowGoodsPage === 1) {
      setGoodsLeftBtn("controlBtn left");
    }
    if (nowGoodsPage === 3) {
      setGoodsRightBtn("controlBtn right");
    }
  }, [nowGoodsPage]);

  // ----------------------------------------------------------

  const [charactorProducts, setCharactorProducts] = useState([]);

  const [clickCategoryId, setClickCategoryId] = useState(1);

  const selectCategory = (id) => {
    const charInfo = charInfos.character.find((char) => char.id === +id);
    const charName = charInfo.uniqueName;

    (async () => {
      const { data } = await axios.get(
        `https://dev.kimmand0o0.shop/api/products/characters/${charName}`
      );
      if (data.products.length > 10) {
        const newProduct = data.products.slice(0, 9);
        setCharactorProducts(newProduct);
      } else {
        setCharactorProducts(data.products);
      }
    })();
    setClickCategoryId(id);
  };

  useEffect(() => {
    selectCategory(1);
  }, []);

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
        <div className="slideBtn left" onClick={slideLeftMove}></div>
        <div className="slideBtn right" onClick={slideRightMove}></div>
        <div className="pageNumber">
          {slideIdx}/{sliderList.length}
        </div>
      </SliderWrap>
      <CaractorGoodsWrap
        goodsMoveX={goodsMoveX}
        length={charactorProducts.length}
      >
        <div className="title">내가 좋아하는 캐릭터</div>
        <CaractorCategory
          onClick={selectCategory}
          clickCategoryId={clickCategoryId}
        />
        <div className="listScreen">
          <div className="goodsLists">
            {charactorProducts.map((list) => (
              <div key={list.productId} className="goodsList">
                <div
                  className="goodsImg"
                  style={{ backgroundImage: `Url(${list.imageUrl})` }}
                ></div>
                <div className="goodsContent">
                  <div>{list.productName}</div>
                  <div>
                    <strong>{priceToString(list.productPrice)}</strong>원
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="controlWrap">
          <div className={goodsLeftBtn} onClick={leftMove}></div>
          <span className="goodsPage">
            {nowGoodsPage}/{TotalGoodsPage}
          </span>
          <div className={goodsRightBtn} onClick={rightMove}></div>
        </div>
      </CaractorGoodsWrap>
      <MiddBaner />
      <NewItemWrap>
        <div className="title">새로 나왔어요</div>
        <ul>
          <li>
            <div
              className="listImg"
              style={{
                backgroundImage:
                  "url(https://img1.kakaocdn.net/thumb/R142x142@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221220143210135_8809814929864_AW_00.jpg)",
              }}
            ></div>
            <div className="goodsName">HBD폭죽카드_카카오프렌즈</div>
            <div className="price">
              <strong>7,900</strong>원
            </div>
          </li>
          <li onClick={gotoProducts}>
            <div
              className="listImg"
              style={{
                backgroundImage:
                  "url(https://img1.kakaocdn.net/thumb/R142x142@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221215150812192_8809814929796_AW_00.jpg)",
              }}
            ></div>
            <div className="goodsName">드레스업인형_춘식이</div>
            <div className="price">
              <strong>19,000</strong>원
            </div>
          </li>
          <li>
            <div
              className="listImg"
              style={{
                backgroundImage:
                  "url(https://img1.kakaocdn.net/thumb/R142x142@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221221175116076_8809810212519_AW_00.jpg)",
              }}
            ></div>
            <div className="goodsName">밀키 스텐 텀블러 춘식이</div>
            <div className="price">
              <strong>22,000</strong>원
            </div>
          </li>
          <li>
            <div
              className="listImg"
              style={{
                backgroundImage:
                  "url(https://img1.kakaocdn.net/thumb/R142x142@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221221175241014_8809810212502_AW_00.jpg)",
              }}
            ></div>
            <div className="goodsName">밀키 스텐 텀블러 어피치</div>
            <div className="price">
              <strong>22,000</strong>원
            </div>
          </li>
          <li>
            <div
              className="listImg"
              style={{
                backgroundImage:
                  "url(https://img1.kakaocdn.net/thumb/R142x142@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221221175251014_8809810212496_AW_00.jpg)",
              }}
            ></div>
            <div className="goodsName">밀키 스텐 텀블러 라이언</div>
            <div className="price">
              <strong>22,000</strong>원
            </div>
          </li>
          <li>
            <div
              className="listImg"
              style={{
                backgroundImage:
                  "url(https://img1.kakaocdn.net/thumb/R142x142@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20220926162315633_8809814921318_8809814921318_AW_00.jpg)",
              }}
            ></div>
            <div className="goodsName">춘식이 팝콘메이커</div>
            <div className="price">
              <strong>39,000</strong>원
            </div>
          </li>
          <li>
            <div
              className="listImg"
              style={{
                backgroundImage:
                  "url(https://img1.kakaocdn.net/thumb/R142x142@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221221111200745_8809810212236_AW_00.jpg)",
              }}
            ></div>
            <div className="goodsName">춘식이 허그 슬리퍼</div>
            <div className="price">
              <strong>29,000</strong>원
            </div>
          </li>
          <li>
            <div
              className="listImg"
              style={{
                backgroundImage:
                  "url(https://img1.kakaocdn.net/thumb/R142x142@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221221110117323_8809790654590_AW_00.jpg)",
              }}
            ></div>
            <div className="goodsName">도어벨 라이언&춘식이</div>
            <div className="price">
              <strong>29,900</strong>원
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
            poster="https://img1.kakaocdn.net/thumb/R320x0.q82/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fhome_tab%2Frecommend_movie%2Frecommend_movie_20221226092025_88ff7ce7815f4204a31cb20ae1e84353.mp4.jpg"
          >
            <source src="https://t1.kakaocdn.net/friends/prod/home_tab/recommend_movie/recommend_movie_20221226092025_88ff7ce7815f4204a31cb20ae1e84353.mp4.recommend_movie.1080p.mp4" />
          </video>
          <div className="videoContent">
            <div className="title">2023 미리보기</div>
            <div className="desc">2023 미리보기</div>
          </div>
        </div>
        <ul>
          <li>
            <div
              className="listImg"
              style={{
                backgroundImage: `url(https://img1.kakaocdn.net/thumb/R125x125@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221013181207775_8809814928324_AW_00.jpg)`,
              }}
            ></div>
            <div className="listTitle">2023 탁상용 캘린더</div>
            <div className="listDesc">
              <strong>6,000</strong>원
            </div>
          </li>
          <li>
            <div
              className="listImg"
              style={{
                backgroundImage: `url(https://img1.kakaocdn.net/thumb/R125x125@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221013181015265_8809814928317_AW_00.jpg)`,
              }}
            ></div>
            <div className="listTitle">[온라인]2023 다이어리세트_어피치</div>
            <div className="listDesc">
              <strong>27,000</strong>원
            </div>
          </li>
          <li>
            <div
              className="listImg"
              style={{
                backgroundImage: `url(https://img1.kakaocdn.net/thumb/R125x125@2x.q82.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fprod%2Fproduct%2F20221013181050228_8809814928287_AW_00.jpg)`,
              }}
            ></div>
            <div className="listTitle">2023 다이어리_라이언</div>
            <div className="listDesc">
              <strong>16,000</strong>원
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
  .slideBtn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    background-image: url("	https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/ico_friends.png");
    background-size: 700px 1000px;
    cursor: pointer;
  }
  .slideBtn.left {
    background-position: 0 -840px;
    left: 20px;
  }
  .slideBtn.right {
    background-position: -40px -840px;
    right: 20px;
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
    z-index: 10;
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
  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 640px;
    height: 273px;
    background: linear-gradient(rgba(0, 0, 0, 0), black);
    opacity: 0.4;
    content: "";
  }
`;
const CaractorGoodsWrap = styled.div`
  margin-top: 30px;
  .title {
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    padding: 0 20px 16px;
  }
  .listScreen {
    padding-left: 20px;
    height: 193px;
    overflow: hidden;
  }
  .goodsLists {
    width: ${({ length }) => length * 135}px;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 10px;
    list-style: none;
    padding-left: 5px;
    margin: 0;
    transform: ${({ goodsMoveX }) => `translateX(-${goodsMoveX}px)`};
    transition: transform 0.5s;
  }
  .goodsList {
    width: 125px;
    height: 172px;
    cursor: pointer;
  }
  .goodsImg {
    width: 100%;
    height: 125px;
    background-size: contain;
    background-position: center;
  }
  .goodsContent {
    padding-top: 10px;
    color: #616161;
    font-size: 14px;
    line-height: 17px;
  }
  .goodsContent div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
  .goodsContent div strong {
    color: #222;
  }
  .controlWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
  }
  .goodsPage {
    padding: 0 20px;
  }
  .controlBtn {
    width: 24px;
    height: 24px;
    background-size: 700px 1000px;
    background-image: url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/ico_friends.png");
  }
  .controlBtn.left {
    background-position: -430px -760px;
  }
  .controlBtn.left.Active {
    background-position: -430px -730px;
    cursor: pointer;
  }
  .controlBtn.right {
    background-position: -460px -760px;
  }
  .controlBtn.right.Active {
    background-position: -460px -730px;
    cursor: pointer;
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
  .videoWrap::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 42.934%;
    z-index: 50;
    background: linear-gradient(rgba(0, 0, 0, 0), black);
    opacity: 0.3;
  }
  .videoContent {
    position: absolute;
    left: 20px;
    bottom: 40px;
    color: white;
    z-index: 100;
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
    padding: 0 20px;
    gap: 10px;
    margin: 0;
    margin-top: -25px;
    list-style: none;
  }
  li {
    flex: 33%;
    z-index: 100;
    height: 100%;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
    cursor: pointer;
  }
  .listImg {
    width: 100%;
    height: 193.33px;
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
