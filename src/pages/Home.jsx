import styled from "styled-components";

const HomePage = () => {
  return (
    <main>
      <SliderWrap>
        <div className="slideImg">
          <div className="content">
            <div className="title">마음의 이너 피스</div>
            <div className="desc">
              지치고 힘들 때 인센스 스틱으로 <br />
              평화를 되찾아보세요.
            </div>
          </div>
        </div>
        <div className="pageNumber">5/8</div>
      </SliderWrap>
      <CharectorCategory>
        <ul>
          <li>
            <div className="listImg"></div>
            <div className="listName">라이언</div>
          </li>
          <li>
            <div className="listImg"></div>
            <div className="listName">라이언</div>
          </li>
        </ul>
      </CharectorCategory>
      <NewItemWrap>
        <div className="title">새로 나왔어요</div>
        <ul>
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
          </li>{" "}
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
  position: relative;
  .slideImg {
    width: 100%;
    height: 100%;
    background-image: url("https://img1.kakaocdn.net/thumb/R300x0@2x.q95.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fnew_store%2Fprod%2Fhome_tab%2Fbanner%2Fmain_banner_20221219135731_231e0e37b1784c64b2acb1c5cb0d9873.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    cursor: pointer;
  }
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
const CharectorCategory = styled.div`
  width: 100%;
  height: 74px;
  margin: 20px 0;
  ul {
    display: flex;
    gap: 14px;
    margin: 0 14px;
    list-style: none;
    padding: 0;
  }
  li {
    width: 55px;
    height: 100%;
    cursor: pointer;
  }
  .listImg {
    width: 55px;
    height: 55px;
    margin-bottom: 6px;
    background-image: url("https://img1.kakaocdn.net/thumb/R55x55@2x.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fnew_store%2Fprod%2Fhome_tab%2Flink-shortcut%2Flink_shortcut_20221213234338_9a00ec6a44f34e109179115c14f3f2dc.jpg");
    background-size: cover;
    background-position: center;
  }
  .listName {
    color: #757575;
    text-align: center;
    font-size: 11px;
    line-height: 13px;
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
