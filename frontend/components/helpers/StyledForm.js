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

  input,
  textarea {
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
    font-family: 'Mulish', --apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }

  input:focus,
  textarea:focus {
    border: none;
    border-radius: 2pt;
    box-shadow: 0 0 0 1pt var(--accent);
    outline: none;
    transition: 0.1s;
  }

  input[type='submit'] {
    background-color: var(--dark);
    box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
      rgba(0, 0, 0, 0.12) 0 1px 1px 0, var(--accent) 0 0 0 1px,
      rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0,
      rgba(60, 66, 87, 0.08) 0 2px 5px 0;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Mulish', --apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }

  input[type='submit']:hover {
    background-color: var(--accent);
  }

  input[type='submit']:focus {
    background-color: var(--dark);
  }

  textarea {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
  }

  fieldset {
    border: 0;
    padding: 0;
  }
`;

export default StyledForm;
