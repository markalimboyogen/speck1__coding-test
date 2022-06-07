import React, { useEffect, useState } from 'react';
import styled from "styled-components";

// components
import TfHeader from './TfHeader';
import TfGrid from './TfGrid';

const Styled = {
  NoResults: styled.div`
    padding: 20px;
  `,
  Table: styled.div`
    border: 1px solid var(--tf-black--lighter);
    border-radius: 4px;
    overflow: hidden;
  `,
  TableGrid: styled.div`
    display: grid;
    grid-template-columns:
      ${({ canSelect }) => canSelect ? 'auto' : ''}
      repeat(${({ cellCount }) => cellCount }, minmax(auto, 1fr));
  `,
};

const TfTable = ({
  data,
  filteredData,
  gridConfig,
  hasNoResults,
  onItemSelect = () => {},
}) => {
  const tableCellCount = gridConfig.canSelect
    ? gridConfig.headers.length + 1
    : gridConfig.headers.length;

  const handleItemSelect = (newVal, index) => {
    let newItemArr = data;

    if (index === undefined) {
      newItemArr.forEach((item) => {
        item.isSelected = newVal;
      });
    } else {
      newItemArr[index].isSelected = newVal;
    }

    onItemSelect([...newItemArr]);
  }

  const items = filteredData.length ? filteredData : data;

  return (
    <>
      {items.length && !hasNoResults
        ? <Styled.Table>
          <Styled.TableGrid
            canSelect={ gridConfig.canSelect }
            cellCount={ gridConfig.headers.length }
          >
            <TfHeader
              canSelect={ gridConfig.canSelect }
              cellCount={ tableCellCount }
              headers={ gridConfig.headers }
              onSelect={ handleItemSelect }
            />
            {items.map((row, index) => {
              return (
                <TfGrid
                  canSelect={ gridConfig.canSelect }
                  cellCount={ tableCellCount }
                  data={ row }
                  index={ index }
                  key={ `${row.userId} - ${Math.random()}` }
                  onSelect={ handleItemSelect }
                />
              )})
            }
          </Styled.TableGrid>
          </Styled.Table>
        : <p>No results found.</p>
      }
    </>
  );
}

export default TfTable;