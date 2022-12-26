import styled from "styled-components";

const MiddBaner = () => {
  return (
    <MiddleBanerWrap>
      <div className="banerWrap">
        <div className="comment">
          최대 5천원 할인혜택 <br />
          <strong>카카오페이 즉시 할인</strong>
        </div>
        <div className="banerImg"></div>
      </div>
    </MiddleBanerWrap>
  );
};

const MiddleBanerWrap = styled.div`
  width: 100%;
  height: 78px;
  background-color: rgb(66, 155, 108);
  margin: 30px 0;
  .banerWrap {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 0 auto;
    padding: 0 40px;
    height: 78px;
    max-width: 375px;
  }
  .comment {
    margin: auto 0;
    width: 160px;
    font-size: 15px;
    line-height: 18px;
    color: #fff;
  }
  .banerImg {
    width: 148px;
    height: 92px;
    background-image: url("https://t1.kakaocdn.net/friends/new_store/prod/goods_notice/goods_notice_20221215064251_caa6805b361747b7afd65e8c4ecce7fb.png");
    background-size: cover;
    transform: translateY(-14px);
  }
`;

export default MiddBaner;
