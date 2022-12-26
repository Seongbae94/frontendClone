import styled from "styled-components";
import characters from "../sub/db/data.json";
import { useNavigate } from "react-router-dom";

const CaractorCategory = () => {
  const navigate = useNavigate();
  return (
    <CharectorCategory>
      <ul>
        {characters.character.map((char) => {
          return (
            <li key={char.id} onClick={() => navigate(`/profile/${char.id}`)}>
              <img src={char.imageUrl} />
              <div className="listName">{char.nameKor}</div>
            </li>
          );
        })}
      </ul>
    </CharectorCategory>
  );
};

const CharectorCategory = styled.div`
  height: 74px;
  margin: 20px auto;
  ul {
    display: flex;
    gap: 14px;
    margin: 0 14px;
    list-style: none;
    padding: 0;
  }
  li {
    width: 55px;
    height: 100%;
    cursor: pointer;
  }

  img {
    width: 55px;
    height: 55px;
  }
  /* .listImg {
    width: 55px;
    height: 55px;
    margin-bottom: 6px;
    background-image: url("https://img1.kakaocdn.net/thumb/R55x55@2x.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Ffriends%2Fnew_store%2Fprod%2Fhome_tab%2Flink-shortcut%2Flink_shortcut_20221213234338_9a00ec6a44f34e109179115c14f3f2dc.jpg");
    background-size: cover;
    background-position: center;
  } */
  .listName {
    color: #757575;
    text-align: center;
    font-size: 11px;
    line-height: 13px;
  }
`;

export default CaractorCategory;
