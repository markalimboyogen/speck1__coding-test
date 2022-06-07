import React, { useState } from 'react';
import styled from 'styled-components';
import {
  IoIosAdd,
  IoIosCloudDownload,
  IoIosCreate,
  IoIosRefresh,
  IoIosTrash,
} from 'react-icons/io';

// components
import TfAddEditUserForm from './TfAddEditUserForm';
import TfTextInput from '../../components/TfTextInput';
import TfTable from '../../components/tf-user-table/TfTable';

const Styled = {
  Section: styled.div`
    margin-bottom: 32px;
  `,
  Header: styled.div`
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
  `,
  IconGroup: styled.div`
    display: flex;
    font-size: 1.5rem;
    margin-right: 24px;
  `,
  Icon: styled.div`
    align-items: center;
    color: ${({ disabled }) =>
      disabled ? 'var( --tf-black--lighter)' : 'initial'};
    border-right: 1px solid var(--tf-black--lightest);
    display: flex;
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'initial')};

    &:hover {
      cursor: pointer;
      color: var(--tf-cyan);
    }

    span {
      display: inline-block;
      margin: 0 16px;
    }
  `,
};

const TfUserList = () => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);

  const gridConfig = {
    canSelect: true,
    headers: [
      'User ID',
      'First Name',
      'Last Name',
      'Email',
      'Status',
      'Created On',
    ],
  };

  const deleteUsers = () => {
    const updatedUsers = users.filter((user) => !user.isSelected);

    setUsers([...updatedUsers]);
  };

  const handleAddUserClick = (userDetails) => {
    const { userId, firstName, lastName, status, email } = userDetails;

    setSearchQuery('');
    setFilteredUsers([]);
    setUsers([
      ...users,
      {
        userId,
        firstName,
        lastName,
        email,
        status,
        createdOn: new Date(),
        isSelected: false,
        id: Math.random(),
      },
    ]);
  };

  const handleItemSelect = (items) => {
    setUsers([...items]);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    filterUsers(e.target.value);
  };

  const filterUsers = (query) => {
    const userList = users.filter((item) => {
      return query
        .toLowerCase()
        .split(' ')
        .every(
          (query) =>
            item.userId.toLowerCase().includes(query) ||
            item.firstName.toLowerCase().includes(query) ||
            item.lastName.toLowerCase().includes(query) ||
            item.email.toLowerCase().includes(query) ||
            item.status.toLowerCase().includes(query)
        );
    });

    setFilteredUsers(userList);
  };

  const actions = [
    {
      actionFunc: () => {
        setIsAdding(!isAdding);
      },
      active: true,
      icon: <IoIosAdd />,
      name: 'add',
    },
    {
      actionFunc: () => {},
      active: true,
      icon: <IoIosCreate />,
      name: 'edit',
    },
    {
      actionFunc: () => {},
      active: false,
      icon: <IoIosRefresh />,
      name: 'refresh',
    },
    {
      actionFunc: deleteUsers,
      active: users.filter((user) => user.isSelected).length,
      icon: <IoIosTrash />,
      name: 'delete',
    },
    {
      actionFunc: () => {},
      active: false,
      icon: <IoIosCloudDownload />,
      name: 'export',
    },
  ];

  return (
    <>
      <Styled.Section>
        <Styled.Header>
          <TfTextInput
            name="searchUser"
            onValueChange={handleSearchInputChange}
            placeholder="Search user..."
            value={searchQuery}
          />
          <Styled.IconGroup>
            {actions.map(({ actionFunc, active, icon, name }) => {
              return (
                <Styled.Icon disabled={!active} onClick={actionFunc} key={name}>
                  <span>{icon}</span>
                </Styled.Icon>
              );
            })}
          </Styled.IconGroup>
        </Styled.Header>
      </Styled.Section>
      {isAdding ? (
        <Styled.Section>
          <TfAddEditUserForm onAddUserClick={handleAddUserClick} />
        </Styled.Section>
      ) : (
        ''
      )}
      <Styled.Section>
        <TfTable
          data={users}
          filteredData={filteredUsers}
          gridConfig={gridConfig}
          hasNoResults={!users.length || (searchQuery && !filteredUsers.length)}
          onItemSelect={handleItemSelect}
        />
      </Styled.Section>
    </>
  );
};

export default TfUserList;
