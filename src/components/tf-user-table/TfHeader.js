import React from 'react';
import styled from "styled-components";

const Styled = {
  TableCell: styled.div`
    background: var(--tf-black--lightest);
    border-right: 1px solid var(--tf-black--lighter);
    padding: 12px 16px;
    :nth-child(${({ cellCount }) => cellCount}n+0) {
      border-right: none;
    }
  `,
};

const TfHeader = ({
  canSelect,
  headers,
  cellCount,
  onSelect = () => {},
}) => {
  return (
    <>
      {canSelect
        ? <Styled.TableCell cellCount={ cellCount }>
            <input
              type="checkbox"
              onChange={ (e) => onSelect(e.target.checked) }
            />
          </Styled.TableCell>
        : ''
      }
      {headers.map((header) => {
        return (
          <Styled.TableCell cellCount={ cellCount } key={ header }>
            { header }
          </Styled.TableCell>
        )
      })}
    </>
  );
}

export default TfHeader;