import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// components
import TfButton from '../../components/TfButton';
import TfTextInput from '../../components/TfTextInput';
import TfSelectInput from '../../components/TfSelectInput';

const Styled = {
  FormGroup: styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(5, 1fr);
  `,
  PrimaryActions: styled.div`
    margin-top: 16px;
    text-align: right;
  `,
};

const TfAddEditUserForm = ({ onAddUserClick = () => {} }) => {
  const [userId, setUserId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('REGISTERED');
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    setFormValues({
      userId,
      firstName,
      lastName,
      email,
      status,
    });
  });

  const handleValueChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'userId':
        setUserId(value);
        break;
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'status':
        setStatus(value);
        break;
      default:
        return false;
    }
  };

  return (
    <>
      <Styled.FormGroup>
        <TfTextInput
          label="User ID"
          name="userId"
          value={userId || ''}
          onValueChange={handleValueChange}
        />
        <TfTextInput
          label="First Name"
          name="firstName"
          value={firstName || ''}
          onValueChange={handleValueChange}
        />
        <TfTextInput
          label="Last Name"
          name="lastName"
          value={lastName || ''}
          onValueChange={handleValueChange}
        />
        <TfTextInput
          label="Email"
          name="email"
          value={email || ''}
          onValueChange={handleValueChange}
        />
        <TfSelectInput
          label="Status"
          name="status"
          options={['REGISTERED', 'INITIATED']}
          value={status || ''}
          onValueChange={handleValueChange}
        />
      </Styled.FormGroup>
      <Styled.PrimaryActions>
        <TfButton
          disabled={Object.values(formValues).some((value) => !value)}
          label="Add User"
          onButtonClick={() => onAddUserClick(formValues)}
        />
      </Styled.PrimaryActions>
    </>
  );
};

export default TfAddEditUserForm;
