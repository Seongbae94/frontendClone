import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BasketCard from "../components/sub/BasketCard";
import { priceToString } from "../components/sub/utils/PriceToString";
import {
  autoToggleAllTrue,
  autoToggleAllFalse,
} from "../redux/modules/basketSlice";
import axios from "axios";
import Modal from "../components/modal/Modal";

const Orderbasket = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [carts, setCarts] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const deliveryFee = 3000;
  const dispatch = useDispatch();
  // const products = useSelector((store) => store.basket.dummyInfo);
  const products = useSelector((store) => store.basket.carts);
  const { count } = useSelector((store) => store.basket);
  const toggle = useSelector((store) => store.basket.toggle);

  const Clicked = () => {
    //carts에 있는 값 모두 false로 변경후 eachTotalPrice 업데이트 하지 않음.
    dispatch(autoToggleAllFalse());
  };

  const noClicked = () => {
    //carts에 있는 값 모두 true로 변경후 eachTotalPrice 업데이트
    //장바구니에 있는 물품들은 전부 basketSlice carts안에 이미 들어가 있기 때문에 eachTotalPrice만 업데이트
    //해주면 BasketCard에서 값들을 더해줌.
    dispatch(autoToggleAllTrue());
  };

  console.log(carts);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://dev.kimmand0o0.shop/api/users/carts"
    );
    //유저아이디가 2일 때 정보 저장.
    setCarts(data.Carts.products);
    // console.log(data.Carts);
  };

  console.log(carts);
  useEffect(() => {
    fetchData();
  }, []);

  const onClickCancelHandler = () => {
    setIsOpen(false);
  };

  const removeFromBasket = () => {
    setIsOpen(true);
  };

  const reduceAmount = async ({ productId, amount }) => {
    // console.log(productId, amount);
    // const reducedAmount = amount - 1;
    await axios.put(
      `https://dev.kimmand0o0.shop/api/users/carts/${productId}`,
      {
        amount: amount - 1,
      }
    );
    fetchData();
  };

  const increaseAmount = async ({ productId, amount }) => {
    await axios.put(
      `https://dev.kimmand0o0.shop/api/users/carts/${productId}`,
      {
        amount: amount + 1,
      }
    );
    fetchData();
  };

  return (
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
          <StCheckIcon onClick={Clicked}></StCheckIcon>
        ) : (
          <StCheckIcon
            bgPosition="-160px -220px"
            onClick={noClicked}
          ></StCheckIcon>
        )}
        <div style={{ fontSize: "14px" }}>
          전체<span style={{ fontWeight: "bold" }}>{count}</span>
        </div>
      </StTopButton>

      <StBorder></StBorder>

      {carts &&
        carts.map((product) => {
          return (
            // <div key={product.id}>
            //   <BasketCard
            //     product={product}
            //     toggle={toggle}
            //     setTotalPrice={setTotalPrice}
            //   />
            // </div>
            <div key={product.productId}>
              <StCard>
                <StCloseIcon
                  style={{
                    position: "absolute",
                    right: "0",
                  }}
                  onClick={() => removeFromBasket(product.id)}
                ></StCloseIcon>
                <Modal onClose={() => setIsOpen(false)} open={isOpen}>
                  <StModalStyle>
                    <p>선택하신 상품을 삭제하시겠습니까?</p>
                    <div>
                      <button onClick={onClickCancelHandler}>취소</button>
                      <button>확인</button>
                    </div>
                  </StModalStyle>
                </Modal>
                <StCheckIcon></StCheckIcon>
                {/* <StCheckIcon bgPosition="-160px -220px"></StCheckIcon> */}
                <img src={require("../amu.png")} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ margin: "0", fontSize: "15px" }}>깡총깡총인형</p>

                  <h3 style={{ margin: "10px 0", fontSize: "16px" }}>3000원</h3>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <StCheckIcon
                      bgPosition="-620px -220px"
                      onClick={() =>
                        reduceAmount({
                          productId: product.productId,
                          amount: product.amount,
                        })
                      }
                    ></StCheckIcon>
                    <StNumInput value={product.amount} disabled />
                    <StCheckIcon
                      bgPosition="-590px -220px"
                      onClick={() =>
                        increaseAmount({
                          productId: product.productId,
                          amount: product.amount,
                        })
                      }
                    ></StCheckIcon>
                    {/* <StCheckIcon bgPosition="-560px -220px"></StCheckIcon> */}
                  </div>
                </div>
              </StCard>
              <StBorder height="1px"></StBorder>
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
            <p style={{ fontWeight: "bold" }}>{priceToString(totalPrice)}원</p>
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
  );
};

export default Orderbasket;

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
