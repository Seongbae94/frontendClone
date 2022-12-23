import styled from "styled-components";

const Footer = () => {
  return (
    <Wrap>
      <div className="padding">
        <TopList>
          <li>제휴문의</li>
          <li>고객문의</li>
          <li>이용약관</li>
          <li>
            <strong>개인정보처리방침</strong>
          </li>
          <li>지식재산권보호센터</li>
        </TopList>
        <Middle>
          <div className="kakaoImg"></div>
          <div className="sponsorImg"></div>
        </Middle>
        <Bottom>
          <div className="tr">
            <div className="th">(주)카카오</div>
            <div className="td">대표이사 홍은택</div>
          </div>
          <div className="tr">
            <div className="th">주소</div>
            <div className="td">제주특별자치도 제주시 첨단로 242</div>
          </div>
          <div className="tr">
            <div className="th">사업자등록번호</div>
            <div className="td">
              120-81-47521 <span>등록정보확인</span>
            </div>
          </div>
          <div className="tr">
            <div className="th">통신판매업신고번호</div>
            <div className="td">제2015 - 제주아라 - 0032호</div>
          </div>
          <div className="tr">
            <div className="th">호스팅서비스사업자</div>
            <div className="td">(주)카카오</div>
          </div>
          <div className="tr">
            <div className="th">구매안전서비스</div>
            <div className="td">
              <span>신한은행 구매안전서비스 확인</span>
            </div>
          </div>
          <div className="tr">
            <div className="th">이메일</div>
            <div className="td">friends.cs@kakaocorp.com </div>
          </div>
          <div className="tr">
            <div className="th">고객센터</div>
            <div className="td">
              1577-6263 (통화료발생) <br />
              전화상담 (평일 09:00~18:00) <br />
              카카오톡 상담 (평일 09:00~18:00){" "}
            </div>
          </div>
        </Bottom>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 76px;
  width: 100%;
  height: 364px;
  background-color: #fafafa;
  .padding {
    padding: 25px 16px 64px;
  }
`;
const TopList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding-right: 6px;
    margin-right: 6px;
    font-size: 12px;
    line-height: 21px;
    color: #666;
    letter-spacing: -0.04em;
    position: relative;
    cursor: pointer;
  }
  li::after {
    content: "";
    width: 1px;
    height: 10px;
    background-color: rgba(216, 216, 216, 0.69);
    position: absolute;
    right: 0;
    top: 5px;
  }
  li:last-child::after {
    display: none;
  }
`;
const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  height: 28px;
  width: 100%;
  .kakaoImg {
    background-image: Url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/assets/images/m960/logo_foot_kakao.png");
    background-size: cover;
    background-position: center;
    width: 36px;
    height: 12px;
  }
  .sponsorImg {
    background-image: Url("https://st.kakaocdn.net/commerce_ui/front-friendsshop/real/20221216/130751/assets/images/m960/familymark.png");
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 28px;
  }
`;
const Bottom = styled.div`
  padding: 10px 0 8px;
  font-size: 11px;
  letter-spacing: -0.045em;
  line-height: 18px;
  color: #999;
  .tr {
    display: flex;
  }
  .th {
    width: 107px;
  }
  .td span {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Footer;
