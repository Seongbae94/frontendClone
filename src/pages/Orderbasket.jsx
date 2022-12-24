import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../components/utils/Card";
import {
  toggleCheck,
  addAllSum,
  subAllSum,
} from "../redux/modules/basketSlice";

const Orderbasket = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const deliveryFee = 3000;
  const dispatch = useDispatch();
  const data = useSelector((store) => store.basket.dummyInfo);
  const toggle = useSelector((store) => store.basket.toggle);
  // const price = useSelector((store) => store.basket.totalPrice);
  // console.log(price);

  const baskets = useSelector((store) => store.basket.dummyInfo);
  console.log(baskets);

  function tagAdd() {
    let progress = document.querySelector(".progressTag");
    let interval = 1000;
    let updatesPerSecond = 1000 / 60;
    let end = totalPrice >= 30000 ? 30000 : totalPrice;

    function animator() {
      progress.value = progress.value + interval;
      if (progress.value + interval < end) {
        setTimeout(animator, updatesPerSecond);
      } else {
        progress.value = end;
      }
    }

    setTimeout(() => {
      animator();
    }, updatesPerSecond);
  }

  function tagSub() {
    let progress = document.querySelector(".progressTag");
    let interval = 1000;
    let updatesPerSecond = 1000 / 60;
    let start = totalPrice >= 30000 ? 30000 : totalPrice;

    function animator() {
      progress.value = progress.value - interval;
      if (progress.value - interval > start) {
        setTimeout(animator, updatesPerSecond);
      } else {
        progress.value = start;
      }
    }

    setTimeout(() => {
      animator();
    }, updatesPerSecond);
  }

  const Clicked = () => {
    dispatch(toggleCheck());
    dispatch(subAllSum());
  };

  const noClicked = () => {
    dispatch(toggleCheck());
    dispatch(addAllSum());
  };

  return (
    <StContainer>
      <div className="headerFont">3만원 이상 구매시 무료배송</div>
      <button onClick={tagAdd}>buttonAdd</button>
      <button onClick={tagSub}>buttonSub</button>
      <progress className="progressTag" value="0" max="30000" />

      <StGuage>
        <StGuagesm></StGuagesm>
      </StGuage>
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
        <div>전체</div>
      </div>
      <StBorder></StBorder>
      {data.map((dat) => {
        return (
          <div key={dat.id}>
            <Card
              id={dat.id}
              toggle={toggle}
              setTotalPrice={setTotalPrice}
              totalPrice={totalPrice}
              tagAdd={tagAdd}
              tagSub={tagSub}
            />
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
          <p>{totalPrice}원</p>
        </div>
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
  background-color: green;

  position: relative;
  transform: translate(0, 0);
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
