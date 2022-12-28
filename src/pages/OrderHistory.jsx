import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const OrderHistory = () => {
  const [orderlist, setOrderlist] = useState([]);
  const accesstoken = localStorage.getItem("accesstoken");
  const refreshtoken = localStorage.getItem("refreshtoken");

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://dev.kimmand0o0.shop/api/users/orderLists",
      {
        headers: {
          accesstoken: accesstoken,
          refreshtoken: refreshtoken,
        },
      }
    );
    //유저아이디가 1인 정보를 저장한다.
    setOrderlist(data.OrderLists);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StContainer>
      <StCards>
        {orderlist &&
          orderlist.reverse().map((products) => {
            const day = products.createdAt;
            const splited = day.split("T");

            return (
              <StCard key={products.orderListId}>
                <h1>{splited[0]}</h1>
                {products.products.map((product) => {
                  return (
                    <StCombinedBg key={product.productId}>
                      <StBg>
                        <img src={product.imageUrl} />
                        <div className="contents">
                          <p>
                            {product.productName} x {product.amount}
                          </p>
                          {/* <p>{product.quantityPrice}</p> */}
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <StIcon className="icon"></StIcon>
                            <p>구매확정</p>
                          </div>
                        </div>
                      </StBg>
                      <StCircleL></StCircleL>
                      <StCircleR></StCircleR>
                    </StCombinedBg>
                  );
                })}
              </StCard>
            );
          })}
      </StCards>
      <ul>
        <li style={{ margin: "30px 0 0 0" }}>
          최근 5년 내역만 확인 가능합니다.
        </li>
        <li style={{ padding: "10px 0 20px 0" }}>
          취소/교환/반품신청은 상세 주문내역에서 가능합니다.
        </li>
      </ul>
    </StContainer>
  );
};

export default OrderHistory;

const StContainer = styled.div`
  width: 100%;
  background-color: #f2f2f2;

  ul {
    font-size: 13px;
    color: #909092;
  }
`;

const StCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StCard = styled.div`
  margin-top: 15px;
  cursor: pointer;

  h1 {
    font-weight: bold;
    font-size: 16px;
  }
`;

const StBg = styled.div`
  border-radius: 10px;

  width: 600px;
  height: 120px;
  background-color: white;

  display: flex;

  img {
    background-color: yellow;
    width: 100px;
    height: 100px;

    margin: 10px;
    border-radius: 5px;
  }

  .contents {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const StCircleL = styled.div`
  border-radius: 100%;
  width: 15px;
  height: 15px;
  background-color: #f2f2f2;

  position: absolute;

  transform: translate(-50%, -50%);
  top: 50%;
`;

const StCircleR = styled.div`
  border-radius: 100%;
  width: 15px;
  height: 15px;
  background-color: #f2f2f2;

  position: absolute;

  transform: translate(50%, -50%);
  top: 50%;
  right: 0;
`;

const StCombinedBg = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

const StIcon = styled.div`
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
  background-position: -615px -76px;
  margin: 0;
`;
