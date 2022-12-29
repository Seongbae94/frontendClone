import { useState } from "react";
import styled from "styled-components";
import characters from "../sub/db/data.json";

const CaractorCategory = ({ onClick, clickCategoryId }) => {
  const [activeBg, setActiveBg] = useState(false);

  return (
    <CharectorCategory>
      <ul>
        {characters.character.map((char) => {
          return (
            <CategoryList
              isActive={char.id === clickCategoryId ? true : false}
              key={char.id}
              onClick={() => {
                onClick(char.id);
              }}
            >
              <img
                src={
                  char.id === clickCategoryId ? char.bgImageUrl : char.imageUrl
                }
              />
              <div className="listName">{char.nameKor}</div>
            </CategoryList>
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
`;
const CategoryList = styled.li`
  width: 55px;
  height: 100%;
  position: relative;
  cursor: pointer;
  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }
  &::after {
    content: "";
    display: ${({ isActive }) => (isActive ? "block" : "none")};
    position: absolute;
    left: -2px;
    top: -2px;
    width: 57px;
    height: 57px;
    border: 1px solid #ff6644;
    border-radius: 50%;
  }
  .listName {
    color: #757575;
    text-align: center;
    font-size: 11px;
    line-height: 13px;
  }
`;

export default CaractorCategory;
