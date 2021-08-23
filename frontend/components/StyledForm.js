import styled from 'styled-components';

const StyledForm = styled.form`
  .form-input {
    padding-bottom: 24px;
  }

  label {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 12px;
    display: block;
  }

  input {
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    width: 100%;
    min-height: 44px;
    border: unset;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
      rgba(0, 0, 0, 0) 0 0 0 0, rgba(60, 66, 87, 0.16) 0 0 0 1px,
      rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
      rgba(0, 0, 0, 0) 0 0 0 0;
  }

  input:focus {
    border: none;
    border-radius: 2pt;
    box-shadow: 0 0 0 1pt var(--accent);
    outline: none;
    transition: 0.1s;
  }

  input[type='submit'] {
    background-color: rgb(84, 105, 212);
    box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
      rgba(0, 0, 0, 0.12) 0 1px 1px 0, rgb(84, 105, 212) 0 0 0 1px,
      rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
      rgba(60, 66, 87, 0.08) 0 2px 5px 0;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default StyledForm;
