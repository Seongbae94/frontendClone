import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BasketCard from "../components/sub/BasketCard";
import { priceToString } from "../components/sub/utils/PriceToString";
import axios from "axios";

const Orderbasket = () => {
  const [carts, setCarts] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const deliveryFee = 3000;

  const accesstoken = localStorage.getItem("accesstoken");
  const refreshtoken = localStorage.getItem("refreshtoken");

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://dev.kimmand0o0.shop/api/users/carts",
      {
        headers: {
          accesstoken: accesstoken,
          refreshtoken: refreshtoken,
        },
      }
    );
    if (data.Carts.products && data.Carts.products.length >= 1) {
      const convertedCartsByCheck = data.Carts.products.map((item) => ({
        ...item,
        toggle: true,
      }));

      setCarts(convertedCartsByCheck);
    } else {
      setCarts([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const priceGroup = [];
  let priceTotal = 0;
  carts && carts.map((cart) => priceGroup.push(cart.quantityPrice));
  if (priceGroup.length !== 0) {
    priceTotal = priceGroup.reduce((a, b) => a + b);
  }

  const [toggle, setToggle] = useState(true);

  // let filtered;
  useEffect(() => {
    const filtered = carts?.filter((cart) => cart.toggle === true);
    if (filtered?.length === carts?.length) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [carts]);

  const toggleAll = () => {
    setCarts((prev) => prev.map((prev) => ({ ...prev, toggle: true })));
    setTotalPrice(priceTotal);
  };

  const untoggleAll = () => {
    setCarts((prev) => prev.map((prev) => ({ ...prev, toggle: false })));
    setTotalPrice(0);
  };

  const handlerToggleChild = (id) => {
    // const toggledCartIdx = carts.findIndex((d) => d.productId === id); // index 3

    setCarts((prev) =>
      prev.map((prev) =>
        prev.productId === id ? { ...prev, toggle: !prev.toggle } : { ...prev }
      )
    );

    // setCarts([
    //   ...carts.slice(0, toggledCartIdx),
    //   { ...carts[toggledCartIdx], toggle: !carts[toggledCartIdx].toggle },
    //   ...carts.slice(toggledCartIdx + 1),
    // ]);
  };

  const filtered = carts?.filter((cart) => cart.toggle === true);

  const purchaseItems = async () => {
    await axios.post(
      "https://dev.kimmand0o0.shop/api/users/orderLists",
      {},
      {
        headers: {
          accesstoken: accesstoken,
          refreshtoken: refreshtoken,
        },
      }
    );
    alert("구매가 완료되었습니다");
    fetchData();
  };

  return (
    <div>
      {carts && carts.length !== 0 ? (
        <StContainer>
          {totalPrice >= 30000 ? (
            <div className="headerFont" style={{ color: "#ff447f" }}>
              무료배송
            </div>
          ) : totalPrice < 30000 && totalPrice > 0 ? (
            <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
              <span className="headerFont" style={{ color: "#ff447f" }}>
                {priceToString(30000 - totalPrice)}
              </span>
              <span>원 추가시 무료배송</span>
            </div>
          ) : totalPrice === 0 ? (
            <div className="headerFont">3만원 이상 구매시 무료배송</div>
          ) : null}

          <StGaugeBar>
            {totalPrice ? (
              <div
                className="percent"
                style={{
                  width: `${
                    (totalPrice / 30000) * 100 >= 100
                      ? 100
                      : (totalPrice / 30000) * 100
                  }%`,
                }}
              >
                <div className="circle-move">
                  <StGuage>
                    <StGuagesm></StGuagesm>
                  </StGuage>
                </div>
              </div>
            ) : (
              <div
                className="percent"
                style={{
                  width: "0%",
                }}
              >
                <div className="circle-move">
                  <StGuage bgColor="#eee">
                    <StGuagesm animation="none"></StGuagesm>
                  </StGuage>
                </div>
              </div>
            )}
          </StGaugeBar>

          <StTopButton>
            {toggle ? (
              <StCheckIcon onClick={untoggleAll}></StCheckIcon>
            ) : (
              <StCheckIcon
                onClick={toggleAll}
                bgPosition="-160px -220px"
              ></StCheckIcon>
            )}
            <div style={{ fontSize: "14px" }}>
              전체<span style={{ fontWeight: "bold" }}>{filtered?.length}</span>
            </div>
          </StTopButton>

          <StBorder></StBorder>

          {carts &&
            carts.map((product) => {
              return (
                <div key={product.productId}>
                  <BasketCard
                    key={product.productId}
                    product={product}
                    fetchData={fetchData}
                    priceTotal={priceTotal}
                    setTotalPrice={setTotalPrice}
                    carts={carts}
                    handlerToggleChild={handlerToggleChild}
                    totalPrice={totalPrice}
                    setCarts={setCarts}
                  />
                </div>
              );
            })}

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <StProductPrice>
              <p>상품금액</p>
              <p>{priceToString(totalPrice)}원</p>
            </StProductPrice>
            {totalPrice >= 30000 ? (
              <StProductPrice>
                <p>배송비</p>
                <p>무료</p>
              </StProductPrice>
            ) : (
              <StProductPrice>
                <p>배송비</p>
                <p>{priceToString(deliveryFee)}원</p>
              </StProductPrice>
            )}

            {totalPrice >= 30000 ? (
              <StProductPrice>
                <p style={{ fontWeight: "bold" }}>총 결제금액</p>
                <p style={{ fontWeight: "bold" }}>
                  {priceToString(totalPrice)}원
                </p>
              </StProductPrice>
            ) : (
              <StProductPrice>
                <p style={{ fontWeight: "bold" }}>총 결제금액</p>
                <p style={{ fontWeight: "bold" }}>
                  {priceToString(deliveryFee + totalPrice)}원
                </p>
              </StProductPrice>
            )}

            <p
              style={{
                fontSize: "13px",
                padding: "0 10px",
                color: "#aeaeaf",
              }}
            >
              장바구니 상품은 최대 90일까지 보관됩니다.
            </p>
          </div>
        </StContainer>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "576px",
          }}
        >
          <img
            style={{ width: "192px", height: "192px" }}
            src={
              "https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221228/112611/assets/images/m960/ico_cart_empty.png"
            }
          />
          <p style={{ margin: "0 0 5px 0", color: "#aeaeaf" }}>
            아직 관심 상품이 없네요
          </p>
          <p style={{ margin: "0", color: "#aeaeaf" }}>
            귀여운 프렌즈 상품을 추천드릴게요
          </p>
        </div>
      )}

      <BuyButton onClick={purchaseItems} position="fixed" left="50%">
        구매하기
      </BuyButton>
    </div>
  );
};

export default Orderbasket;

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

const StCard = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;

  img {
    margin: 0 5px;
    width: 80px;
    height: 80px;
  }
`;

const StModalStyle = styled.div`
  width: 310px;
  height: 155px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;

  p {
    font-size: 16px;
    margin-top: 40px;
  }

  button {
    width: 155px;
    height: 51px;
    border: 1px solid #dedfe0;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
  }
`;

const StProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  padding: 0 10px;

  p {
    font-size: 15px;
    padding: 0;
    margin: 0;
  }
`;

const StGaugeBar = styled.div`
  height: 5px;
  width: 100%;
  background-color: #eee;
  border-radius: 5px;
  margin-bottom: 20px;
  height: "5px";

  .percent {
    height: 100%;
    background-color: #ff447f;
    transition: width 0.5s;
    border-radius: 5px;
  }

  .circle-move {
    margin: 0 0 0 100%;
    width: 100%;
  }
`;

const StTopButton = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 0 0 20px 0;
`;

const StCheckIcon = styled.div`
  display: block;
  overflow: hidden;
  font-size: 1px;
  line-height: 0;
  background: url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/ico_friends.png")
    0 0 no-repeat;
  background-size: 700px 1000px;
  color: transparent;
  width: 24px;
  height: 24px;
  background-position: ${(prop) => prop.bgPosition || "-120px -220px"};

  left: 0;
  bottom: 0;
  border: 1px solid white;
  border-radius: 100%;

  cursor: pointer;
`;

const StNumInput = styled.input`
  width: 26px;
  height: 18px;
  padding: 8px 15px;
  border-radius: 5px;
  border: 1px solid #eee;
  margin: 0 2px;
  text-align: center;

  -webkit-appearance: none;
`;

const StBorder = styled.div`
  position: relative;
  width: 100%;
  height: ${(prop) => prop.height || "3px"};
  background-color: #eee;

  top: -10px;
`;

const StContainer = styled.div`
  position: relative;
  margin: 30px 15px;

  .headerFont {
    font-size: 15px;
    margin: 0 0 5px 5px;
    color: ${(prop) => prop.color || "black"};
    margin-bottom: 10px;
    font-weight: bold;
  }
`;
const StGuage = styled.div`
  width: 16px;
  height: 16px;

  border-radius: 100%;
  background-color: ${(prop) => prop.bgColor || "#ff447f"};

  position: relative;

  top: -5px;
  right: 8px;
`;

const StGuagesm = styled.div`
  animation: ${(prop) => prop.animation || "blinker"} 0.5s linear infinite;

  width: 6px;
  height: 6px;

  border-radius: 100%;
  background-color: white;

  position: absolute;
  top: 50%;
  right: 50%;

  transform: translate(50%, -50%);

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

const StCloseIcon = styled.div`
  display: block;
  overflow: hidden;
  font-size: 1px;
  line-height: 0;
  background: url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/ico_friends.png")
    0 0 no-repeat;
  background-size: 700px 1000px;
  color: transparent;
  width: 16px;
  height: 16px;
  background-position: -120px 0;

  /* position: absolute; */
  /* left: 0;
  bottom: 0; */
  border: 1px solid white;
  border-radius: 100%;

  cursor: pointer;
`;
