import React from 'react';
import useForm from '../../utils/useForm';
import StyledForm from '../StyledForm';
import { FormContainer, InnerFormContainer } from '../../pages/sell';
import CardBg from '../CardBg';
import PageInfoBar from '../PageInfoBar';
import styled from 'styled-components';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import ErrorMessage from '../ErrorMessage';
import { useLoadingContext } from '../LoadingContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const FormDetailsText = styled.div`
  margin-bottom: 40px;
  font-size: 1.1rem;
  font-weight: 400;
  text-align: justify;
`;

const SignIn = () => {
  const [inputs, onChangeHandler, resetForm] = useForm();
  const [loginError, setLoginError] = useState(null);
  const [signIn, { data, mutationError, loading }] = useMutation(
    SIGNIN_MUTATION,
    {
      variables: inputs,
      refetchQueries: ['CURRENT_USER_QUERY'],
    },
  );
  const { toggleIsLoading } = useLoadingContext();
  const router = useRouter();

  useEffect(() => {
    loading ? toggleIsLoading(true) : toggleIsLoading(false);
    if (data?.authenticateUserWithPassword.code === 'FAILURE') {
      setLoginError({
        message: 'Login Failed. Please try again.',
      });
    }
  }, [loading, data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(null);
    resetForm();
    await signIn();
    router.push('/shop').catch((e) => console.log(e));
  };

  return (
    <>
      <CardBg />
      <PageInfoBar
        leftText={null}
        middleText={'Sign In'}
        rightComponent={null}
      />
      <FormContainer>
        <InnerFormContainer>
          <ErrorMessage error={loginError || mutationError} />
          <FormDetailsText>
            Please enter the email and password you used while signing in. If
            you just want to test out the platform, an email and password for a
            dummy account is already filled for you. Don't have an account?{' '}
            <Link href={'/sign-up'}>Sign Up here</Link>
          </FormDetailsText>
          <StyledForm method={'POST'} onSubmit={handleSubmit}>
            <fieldset>
              <div className="form-input">
                <label htmlFor={'email'}>Email</label>
                <input
                  type={'email'}
                  autoComplete={'email'}
                  name={'email'}
                  id={'email'}
                  placeholder={'Your Email'}
                  onChange={onChangeHandler}
                  value={inputs.email}
                />
              </div>

              <div className="form-input">
                <label htmlFor={'password'}>Password</label>
                <input
                  type={'password'}
                  autoComplete={'password'}
                  name={'password'}
                  id={'password'}
                  placeholder={'Your Password'}
                  onChange={onChangeHandler}
                  value={inputs.password}
                />
              </div>

              <input type={'submit'} value={'Sign In'} />
            </fieldset>
          </StyledForm>
        </InnerFormContainer>
      </FormContainer>
    </>
  );
};

export default SignIn;

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;
