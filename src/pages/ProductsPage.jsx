import styled from "styled-components";

const ProductsPage = () => {
  return (
    <>
      <ProductsExplainWrap>
        <div className="productImg"></div>
        <div className="productsContents">
          <div className="productName">드레스업인형_춘식이</div>
          <div className="productPrice">19,000원</div>
        </div>
      </ProductsExplainWrap>
      <MiddleBaner>
        <div className="banerWrap">
          <div className="comment">
            최대 5천원 할인혜택 <br />
            <strong>카카오페이 즉시 할인</strong>
          </div>
          <div className="banerImg"></div>
        </div>
      </MiddleBaner>
      <Promotion>
        <div className="title">
          오늘은 뭐 입을까? <br />
          패피 춘식이 등장
        </div>
        <div className="desc">
          최애 착장인 핑크 바지를 입은 <br />
          깜찍한 춘식이 인형입니다. <br />
          크로스백 안에는 뭐가 들어있을까요?
        </div>
      </Promotion>
      <BuyExplain>
        <ul>
          <li>
            배송•반품 <i></i>
          </li>
          <li>
            구매 시 주의사항<i></i>
          </li>
        </ul>
      </BuyExplain>
      <BuyButton>구매하기</BuyButton>
    </>
  );
};

const ProductsExplainWrap = styled.div`
  .productImg {
    width: 100%;
    height: 640px;
    background-image: Url("https://t1.kakaocdn.net/friends/prod/product/20221215150812192_8809814929796_AW_00.jpg");
    background-size: cover;
    background-position: center;
  }
  .productsContents {
    margin-top: 25px;
    padding: 0 117px 0 20px;
  }
  .productName {
    font-size: 28px;
    line-height: 36px;
    font-weight: bold;
  }
  .productPrice {
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    padding-top: 10px;
  }
`;
const MiddleBaner = styled.div`
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
const Promotion = styled.div`
  padding: 0 20px;
  margin-bottom: 50px;
  .title {
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 28px;
    font-family: Apple SD Gothic Neo, sans-serif;
    letter-spacing: -0.02em;
    font-weight: bold;
  }
  .desc {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.02em;
  }
`;
const BuyExplain = styled.div`
  border-top: 1px solid #e3e5e8;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
  }
  li {
    padding: 29px 60px 29px 20px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    cursor: pointer;
    border-bottom: 1px solid #e3e5e8;
    position: relative;
  }
  li i {
    position: absolute;
    right: 20px;
    top: 32px;
    width: 16px;
    height: 15px;
    background-image: url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/ico_friends.png");
    background-size: 700px 1000px;
    background-position: -360px 0;
  }
`;
const BuyButton = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 640px;
  height: 80px;
  background-color: #fb2e45;
  z-index: 1000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
`;

export default ProductsPage;
