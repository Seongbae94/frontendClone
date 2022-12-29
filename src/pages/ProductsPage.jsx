import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { priceToString } from "../components/sub/utils/PriceToString";

import MiddBaner from "../components/middleBaner/MiddleBaner";

const ExplainDropdown = ({ title, children }) => {
  const [explainDisplay, setExplainDisplay] = useState(false);
  const ActiveExplain = () => {
    setExplainDisplay(!explainDisplay);
  };
  return (
    <li>
      <div className="header" onClick={ActiveExplain}>
        {title} <DropdownIcon explainDisplay={explainDisplay} />
      </div>
      <DropdownWrap explainDisplay={explainDisplay}>{children}</DropdownWrap>
    </li>
  );
};

const ProductsPage = () => {
  const accesstoken = localStorage.getItem("accesstoken");
  const refreshtoken = localStorage.getItem("refreshtoken");

  const params = useParams().id;
  const [count, setCount] = useState(1);

  const [modalActive, setModalActive] = useState(false);

  const [productData, setProductData] = useState({});
  const ModalToggle = () => {
    setModalActive(!modalActive);
  };
  const nowBuying = async (productId) => {
    await axios.post(
      `${process.env.REACT_APP_URL}/api/users/directorderlists`,
      {
        productId: productId,
        amount: count,
      },
      {
        headers: {
          accesstoken: accesstoken,
          refreshtoken: refreshtoken,
        },
      }
    );
    fetchData();
    alert("구매 완료!");
    ModalToggle();
  };
  const addBasket = () => {
    console.log("장바구니");
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_URL}/api/products/${params}`
    );
    setProductData(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {productData ? (
        <>
          <ProductsExplainWrap image={productData.imageUrl}>
            <div className="productImg"></div>
            <div className="productsContents">
              <div className="productName">{productData.productName}</div>
              <div className="productPrice">
                {priceToString(productData.productPrice)}원
              </div>
            </div>
          </ProductsExplainWrap>
          <MiddBaner />
          <Promotion>
            <div className="title">{productData.content}</div>
            <div className="desc"></div>
          </Promotion>
          <BuyExplain>
            <ul>
              <ExplainDropdown title="배송•반품">
                <DropdownDesc>
                  <div className="title">배송</div>
                  <div className="content">
                    <div className="list">
                      주문취소 및 배송지 변경은 “주문접수” 단계에서만
                      가능합니다. 마이페이지에서 취소·변경하실 수 있습니다.
                    </div>
                    <div className="list">
                      교환·반품은 배송완료 후 7일 이내만 가능합니다. 단, 재화
                      등의 내용이 표시, 광고 내용과 다르거나 계약내용을 다르게
                      이행한 경우에는 재화 등을 공급받은 날로부터 3개월 이내, 그
                      사실을 안 날 또는 알 수 있었던 날로부터 30일 이내에
                      교환·반품이 가능합니다.
                    </div>
                    <div className="list">
                      상품의 불량·하자 및 표시광고 및 계약 내용이 다른 경우 해당
                      상품의 회수 비용은 무료이나, 고객님의 단순변심에 의한
                      교환·반품일 경우에는 교환·반품 배송비를 고객님께서 직접
                      부담하셔야 합니다.
                    </div>
                    <div className="list">
                      상품 불량·하자의 경우, 상품 불량을 증명할 수 있는 사진과
                      함께 마이페이지 1:1 문의로 접수해주시면 확인 뒤
                      교환·반품이 진행됩니다.
                    </div>
                    <div className="list">
                      여러 상품을 함께 주문 시 2개 이상의 택배 박스로 분할 출고
                      될 수 있으며, 단순변심에 의한 교환/반품 시 배송비는 송장
                      별로 발생됩니다.
                    </div>
                    <div className="list">
                      미성년자가 구매하는 경우, 법정대리인이 동의하지 않으면
                      미성년자 또는 법정대리인이 구매를 취소할 수 있습니다.
                    </div>
                  </div>
                  <div className="title">취소·교환·반품</div>
                  <div className="content">
                    <div className="list">배송사 : CJ대한통운</div>
                    <div className="list">
                      배송비 : 국내 3,000원 (3만 원 이상 구매 시 무료배송)
                    </div>
                    <div className="list">
                      오후 3시 이전 결제 완료 주문건은 당일 출고, 오후 3시 이후
                      주문 건은 익일 출고됩니다. <br />
                      출고 이후 영업일 기준 평균 3일 이내 제품을 수령하실 수
                      있습니다. <br />
                      단, 제품의 재고 상황, 배송량, 배송 지역에 따라 배송기일이
                      추가로 소요될 수 있는 점 양해 부탁드립니다
                    </div>
                  </div>
                </DropdownDesc>
              </ExplainDropdown>
              <ExplainDropdown title="구매 시 주의사항">
                <DropdownDesc>
                  <div className="title">구매안전서비스 가입 사실 안내</div>
                  <div className="desc">
                    · (주)카카오는 고객님께서 현금성 결제 수단(카카오페이머니,
                    기프트카드 등)으로 결제하는 모든 거래에 대하여 신한은행과
                    채무지급보증계약을 체결하여 안전거래를 보장하고 있습니다.
                  </div>
                  <div className="desc">
                    · (주)카카오의 신한은행과 채무보증계약은 하단
                    '구매안전서비스'에서 확인 가능합니다.
                  </div>
                </DropdownDesc>
              </ExplainDropdown>
            </ul>
          </BuyExplain>
          <BuyButton onClick={ModalToggle} position="fixed" left="50%">
            구매하기
          </BuyButton>
          <BuyModalWrap modalActive={modalActive}>
            <div className="bg" onClick={ModalToggle}></div>
            <div className="Modal">
              <div className="numberSelect">
                <div className="selectTitle">수량 선택</div>
                <div className="contrilWrap">
                  <ControlBtn
                    value="plus"
                    onClick={() => setCount(count + 1)}
                  ></ControlBtn>
                  <ControlBtn
                    value="minus"
                    onClick={() =>
                      count > 1 ? setCount(count - 1) : setCount(count)
                    }
                  ></ControlBtn>
                  <input disabled value={count} />
                </div>
              </div>
              <div className="totalPriceWrap">
                <div className="totalPriceMenu">총 제품금액</div>
                <div className="totalPrice">
                  {productData.productPrice * count}
                </div>
              </div>
              <BuyButton
                onClick={() => nowBuying(productData.productId)}
                position="static"
              >
                바로구매
              </BuyButton>
              {/* <i onClick={addBasket}></i> */}
            </div>
          </BuyModalWrap>
        </>
      ) : null}
    </>
  );
};

const ProductsExplainWrap = styled.div`
  .productImg {
    width: 100%;
    height: 640px;
    background-image: ${({ image }) => `url(${image})`};
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
    white-space: pre;
    word-break: break-all;
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
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    border-bottom: 1px solid #e3e5e8;
    position: relative;
  }
  li .header {
    padding: 29px 60px 29px 20px;
    cursor: pointer;
  }
`;
const DropdownIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 32px;
  width: 16px;
  height: 15px;
  background-image: url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/ico_friends.png");
  background-size: 700px 1000px;
  background-position: ${({ explainDisplay }) =>
    explainDisplay ? "-340px 0" : "-360px 0"};
`;
const DropdownWrap = styled.div`
  display: ${({ explainDisplay }) => (explainDisplay ? "block" : "none")};
`;
const DropdownDesc = styled.div`
  padding: 1px 20px 29px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.025em;
  .title {
    font-weight: bold;
    padding-bottom: 5px;
  }
  .desc {
    word-break: break-all;
    font-weight: normal;
    margin-top: 5px;
  }
  .list {
    font-weight: normal;
    padding-left: 10px;
    position: relative;
    margin-top: 5px;
  }
  .list::before {
    content: "";
    position: absolute;
    width: 3px;
    height: 3px;
    background-color: #333;
    border-radius: 50%;
    left: 1px;
    top: 10px;
  }
  .content {
    margin-bottom: 20px;
  }
`;
const BuyButton = styled.div`
  position: ${({ position }) => position};
  left: ${({ left }) => left};
  bottom: 0;
  transform: ${({ left }) =>
    left === "50%" ? "translateX(-50%)" : "translateX(0)"};
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
const BuyModalWrap = styled.div`
  display: ${({ modalActive }) => (modalActive ? "block" : "none")};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1500;
  width: 100%;
  height: 100%;
  .bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .Modal {
    position: fixed;
    left: 50%;
    bottom: 0;
    z-index: 1000;
    transform: translateX(-50%);
    padding-top: 32px;
    background-color: white;
    border-radius: 10px 10px 0 0;
  }
  .numberSelect {
    padding: 0 20px 20px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .selectTitle {
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
  }
  .contrilWrap {
    padding: 0 28px;
    position: relative;
    border-bottom: 1px solid #eff0f2;
  }
  input {
    width: 26px;
    height: 100%;
    font-size: 14px;
    text-align: center;
    padding: 8px 15px;
    border: 1px solid #dedfe0;
    border-radius: 8px;
    line-height: 20px;
  }
  .totalPriceWrap {
    padding: 0 21px 0 20px;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .totalPriceMenu {
    font-size: 14px;
    line-height: 16px;
    color: #747475;
  }
  .totalPrice {
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
  }
  i {
    position: absolute;
    cursor: pointer;
    right: 20px;
    bottom: 15px;
    transform: translate(0, -50%);
    background-position: -280px -21px;
    width: 24px;
    height: 24px;
    background-image: url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/ico_friends.png");
    background-size: 700px 1000px;
  }
`;
const ControlBtn = styled.button`
  position: absolute;
  top: 6px;
  width: 24px;
  height: 24px;
  border: none;
  background-color: white;
  cursor: ${({ set }) => (set === "disable" ? "auto" : "pointer")};
  background-image: url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/ico_friends.png");
  background-size: 700px 1000px;
  background-position: ${({ value, set }) => {
    if (value === "plus") {
      return "-590px -220px";
    } else if (value === "minus") {
      if (set === "Active") {
        return "-560px -220px";
      } else {
        return "-620px -220px";
      }
    }
  }};
  ${({ value }) => {
    if (value === "plus") {
      return "right : 0";
    } else {
      return "left : 0";
    }
  }}
`;

export default ProductsPage;
