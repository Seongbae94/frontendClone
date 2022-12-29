import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { priceToString } from "../components/sub/utils/PriceToString";

const BestPage = () => {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);

  const accesstoken = localStorage.getItem("accesstoken");
  const refreshtoken = localStorage.getItem("refreshtoken");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL}/api/products/hot`
      );
      setBestProducts(data.products);
    })();
    fetchCartData();
  }, []);

  const notify = () => {
    toast.success("장바구니에 담겼습니다", {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const addBasket = async (productId) => {
    await axios.post(
      `https://dev.kimmand0o0.shop/api/users/carts`,
      {
        productId: productId,
        amount: 1,
      },
      {
        headers: {
          accesstoken: accesstoken,
          refreshtoken: refreshtoken,
        },
      }
    );
    notify();
    fetchCartData();
  };

  const gotoDetail = (id) => {
    navigate(`/products/${id}`);
  };

  const fetchCartData = async () => {
    const { data } = await axios.get(
      "https://dev.kimmand0o0.shop/api/users/carts",
      {
        headers: {
          accesstoken: accesstoken,
          refreshtoken: refreshtoken,
        },
      }
    );
    setCartProducts(data.Carts);
  };

  //베스트 페이지에서 productId 모음
  const productIdGroup = [];
  bestProducts?.map((product) => productIdGroup.push(product.productId));

  //장바구니 페이지에서 productId
  const includeGroup = [];
  cartProducts?.products?.map((product) =>
    productIdGroup.includes(product.productId)
      ? includeGroup.push(product.productId)
      : null
  );

  return (
    <StContainer>
      <StPopular>
        <div className="popular">지금 인기 있는</div>
        <StBasketIcon bgPosition="-270px -550px"></StBasketIcon>
      </StPopular>
      <StCards>
        {bestProducts.slice(0, 50).map((list) => (
          <CardWrap key={list.productId}>
            <StCard
              onClick={() => {
                gotoDetail(list.productId);
              }}
              rank={bestProducts.indexOf(list) + 1}
            >
              <p className="rank">{bestProducts.indexOf(list) + 1}</p>
              <StCardImage src={list.imageUrl} />
              <StFlexStrech>
                <p className="card-title" mr="5px">
                  {list.productName}
                </p>
              </StFlexStrech>
              <ToastContainer />
              <p className="price">{priceToString(list.productPrice)}원</p>
            </StCard>
            {includeGroup.includes(list.productId) ? (
              <StBasketIcon
                bgPosition="-320px -220px"
                onClick={() => addBasket(list.productId)}
              >
                장바구니 담기
              </StBasketIcon>
            ) : (
              <StBasketIcon onClick={() => addBasket(list.productId)}>
                장바구니 담기
              </StBasketIcon>
            )}
          </CardWrap>
        ))}
      </StCards>
    </StContainer>
  );
};

export default BestPage;

//그리드로 해보자
const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .popular {
    font-size: 20px;
    font-weight: bold;

    margin: 40px 4px;
  }
`;

const StPopular = styled.div`
  display: flex;
  align-items: center;
`;

const StCards = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  :nth-of-type(2n) {
    margin-right: 10px;
  }
`;

const StCardImage = styled.img`
  min-width: 100px;
  width: 100%;
`;

const StFlexStrech = styled.div`
  color: #747475;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StCard = styled.div`
  /* z-index: 0; */
  position: relative;
  border-radius: 10px;
  border-radius: 5px;
  width: 300px;
  height: 300px;

  cursor: pointer;

  margin: 0 0 80px 10px;

  .rank {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border-radius: 5px;
    background-color: ${({ rank }) => (rank <= 3 ? "#222" : "#aeaeaf")};
    position: absolute;
    color: white;

    top: -5px;
    left: 10px;
  }

  .price {
    font-weight: bold;
    margin: 5px 0;
  }

  .card-title {
    margin: 5px 0 0;
  }

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.04);
    content: "";
    border-radius: 10px;
  }
`;
const CardWrap = styled.div`
  position: relative;
`;

const StBasketIcon = styled.span`
  position: absolute;
  right: 0;
  bottom: 50px;
  /* z-index: 1; */
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
  background-position: ${(prop) => prop.bgPosition || "-280px -220px"};

  cursor: pointer;
`;
