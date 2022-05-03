import React from "react";
/*styles*/
//import styled from "styled-components";
import styled from "styled-components";

const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];
function ProjectFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <ProjectFilterList>
      <Nav>
        {filterList &&
          filterList.map((item) => (
            <FilterButton
              className={currentFilter === item ? "active" : ""}
              key={item}
              onClick={() => handleClick(item)}
            >
              {item}
            </FilterButton>
          ))}
      </Nav>
    </ProjectFilterList>
  );
}

export default ProjectFilter;

const ProjectFilterList = styled.div`
  margin: 30px auto;
`;

const Nav = styled.nav`
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  justify-content: center;
  border-radius: 25px;
`;
const FilterButton = styled.button`
  background: transparent;
  border: 0;
  font-family: inherit;
  font-weight: bold;
  color: var(--text-color);
  cursor: pointer;
  border-right: 1px solid #e4e4e4;
  font-size: 1em;
  font-weight: 500;
  text-transform: capitalize;
  margin: 0 2rem 0 1rem;

  &:last-child {
    border: 0;
  }
  &.active {
    color: var(--primary-color);
  }
`;
