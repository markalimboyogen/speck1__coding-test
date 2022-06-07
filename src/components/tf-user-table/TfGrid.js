import React from 'react';
import styled from "styled-components";

const Styled = {
  TableCell: styled.div`
    padding: 12px 16px;
    border-right: 1px solid var(--tf-black--lighter);
    border-top: 1px solid var(--tf-black--lighter);
    :nth-child(${({ cellCount }) => cellCount}n+0) {
      border-right: none;
    }
  `,
};

const TfGrid = ({
  cellCount,
  canSelect,
  data,
  index,
  onSelect = () => {},
}) => {
  const { id, isSelected, ...cells } = data;

  return (
    <>
      {canSelect
        ? <Styled.TableCell cellCount={ cellCount }>
            <input
              type="checkbox"
              onChange={ (e) => onSelect(e.target.checked, index) }
              checked={ data.isSelected }
            />
          </Styled.TableCell>
        : ''
      }
      {Object.values(cells).map((cellValue) => {
        return (
          <Styled.TableCell cellCount={ cellCount } key={ Math.random() }>
            { cellValue.toString() }
          </Styled.TableCell>
        )
      })}
    </>
  );
}

export default TfGrid;