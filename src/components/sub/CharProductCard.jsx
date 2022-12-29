import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { priceToString } from "./utils/PriceToString";

const CharProductCard = ({ product, fetchCartData, includeGroup }) => {
  const navigate = useNavigate();

  const accesstoken = localStorage.getItem("accesstoken");
  const refreshtoken = localStorage.getItem("refreshtoken");

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

  const addToBasket = async (productId) => {
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

  return (
    <Wrap>
      <StProduct
        key={product.productId}
        onClick={() => {
          gotoDetail(product.productId);
        }}
      >
        <img style={{ width: "100%" }} src={product.imageUrl} />
        <div className="flex">
          <p className="title">{product.productName}</p>
        </div>
        <p className="price">{priceToString(product.productPrice)}원</p>
        <ToastContainer />
      </StProduct>
      {includeGroup.includes(product.productId) ? (
        <StIcon
          location="-320px -220px"
          onClick={() => addToBasket(product.productId)}
        ></StIcon>
      ) : (
        <StIcon onClick={() => addToBasket(product.productId)}></StIcon>
      )}
    </Wrap>
  );
};

export default CharProductCard;
const Wrap = styled.div`
  position: relative;
`;

const StProduct = styled.div`
  max-width: 188px;
  margin-bottom: 40px;

  cursor: pointer;

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .title {
    color: #747475;
    margin: 0;
    width: 160px;
  }

  .price {
    margin: 10px 0 0 0;
    font-weight: bold;
  }

  @media screen and (max-width: 630px) {
    max-width: 283px;
  }
`;

const StIcon = styled.div`
  position: absolute;
  right: 20px;
  bottom: 80px;
  display: block;
  overflow: hidden;
  cursor: pointer;
  font-size: 1px;
  line-height: 0;
  background: url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/ico_friends.png")
    0 0 no-repeat;
  background-size: 700px 1000px;
  color: transparent;

  width: 24px;
  height: 24px;
  background-position: ${(prop) => prop.location || "-280px -220px"};
  margin: 0;
`;
