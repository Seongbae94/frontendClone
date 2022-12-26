import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../components/sub/Card";
import {
  toggleCheck,
  addAllSum,
  subAllSum,
  autoToggleAllTrue,
  autoToggleAllFalse,
} from "../redux/modules/basketSlice";

const Orderbasket = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const deliveryFee = 3000;
  const dispatch = useDispatch();
  const data = useSelector((store) => store.basket.dummyInfo);
  const toggle = useSelector((store) => store.basket.toggle);

  const Clicked = () => {
    dispatch(toggleCheck());
    dispatch(subAllSum());
    // dispatch(autoToggle());
    dispatch(autoToggleAllFalse());
  };

  const noClicked = () => {
    dispatch(toggleCheck());
    dispatch(addAllSum());
    dispatch(autoToggleAllTrue());
  };

  useEffect(() => {
    setPercentage(totalPrice);
  }, [totalPrice]);

  const [percentage, setPercentage] = useState(0);
  console.log(totalPrice);

  return (
    <StContainer>
      {totalPrice >= 30000 ? (
        <div
          className="headerFont"
          style={{ marginBottom: "10px", fontWeight: "bold", color: "#ff447f" }}
        >
          무료배송
        </div>
      ) : (
        <div
          className="headerFont"
          style={{ marginBottom: "10px", fontWeight: "bold" }}
        >
          3만원 이상 구매시 무료배송
        </div>
      )}

      <div
        style={{
          height: "5px",
          width: "100%",
          backgroundColor: "#eee",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${
              (percentage / 30000) * 100 >= 100
                ? 100
                : (percentage / 30000) * 100
            }%`,
            backgroundColor: "#ff447f",
            transition: "width 0.5s",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              margin: "0 0 0 100%",
              width: "100%",
            }}
          >
            <StGuage>
              <StGuagesm></StGuagesm>
            </StGuage>
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: "15px",
          display: "flex",
          alignItems: "center",
          padding: "10px",
          margin: "0 0 20px 0",
        }}
      >
        {toggle ? (
          <StCheckIcon onClick={Clicked}></StCheckIcon>
        ) : (
          <StCheckIcon
            bgPosition="-160px -220px"
            onClick={noClicked}
          ></StCheckIcon>
        )}
        <div style={{ fontSize: "14px" }}>
          전체<span style={{ fontWeight: "bold" }}>{data.length}</span>
        </div>
      </div>
      <StBorder></StBorder>
      {data.map((dat) => {
        return (
          <div key={dat.id}>
            <Card id={dat.id} toggle={toggle} setTotalPrice={setTotalPrice} />
          </div>
        );
      })}

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "30px",
            padding: "0 10px",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              padding: "0",
              margin: "0",
            }}
          >
            상품금액
          </p>
          <p style={{ fontSize: "15px" }}>{totalPrice}원</p>
        </div>
        {totalPrice >= 30000 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "30px",
              padding: "0 10px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                padding: "0",
                margin: "0",
              }}
            >
              배송비
            </p>
            <p>무료</p>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "30px",
              padding: "0 10px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                padding: "0",
                margin: "0",
              }}
            >
              배송비
            </p>
            <p>{deliveryFee}원</p>
          </div>
        )}

        {totalPrice >= 30000 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 10px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                padding: "0",
                margin: "0",
                height: "30px",
              }}
            >
              총 결제금액
            </p>
            <p>{totalPrice}원</p>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 10px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                padding: "0",
                margin: "0",
                height: "30px",
              }}
            >
              총 결제금액
            </p>
            <p>{deliveryFee + totalPrice}원</p>
          </div>
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

const StProgressBar = styled.div`
  animation-duration: 1s;
  animation-name: slide;

  @keyframes slide {
    from {
      margin-right: 100%;
      width: 300%;
    }

    to {
      margin-right: 0%;
      width: 100%;
    }
  }
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
  }

  .progressTag {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    width: 100%;
    height: 6px;
    border-radius: 7px;
    color: #35495e;
  }

  progress::-webkit-progress-bar {
    background-color: #eee;
    border-radius: 8px;
  }
  progress::-webkit-progress-value {
    background-color: #ff447f;
    border-radius: 8px;
  }
  progress::-moz-progress-bar {
    background-color: #eee;
    border-radius: 8px;
  }
`;
const StGuage = styled.div`
  width: 16px;
  height: 16px;

  border-radius: 100%;
  background-color: #ff447f;

  position: relative;
  /* top: 23px; */
  top: -5px;
  right: 8px;

  /* transform: translate(0, 0); */
  /* left: calc(var() / 30000 * 100%); */
`;

const StGuagesm = styled.div`
  width: 6px;
  height: 6px;

  border-radius: 100%;
  background-color: white;

  position: absolute;
  top: 50%;
  right: 50%;

  transform: translate(50%, -50%);
`;
