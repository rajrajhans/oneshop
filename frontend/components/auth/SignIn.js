import React from 'react';
import useForm from '../../utils/useForm';
import StyledForm from '../helpers/StyledForm';
import { FormContainer, InnerFormContainer } from '../../pages/sell';
import CardBg from '../helpers/CardBg';
import PageInfoBar from '../helpers/PageInfoBar';
import styled from 'styled-components';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import ErrorMessage from '../helpers/ErrorMessage';
import { useLoadingContext } from '../helpers/LoadingContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const FormDetailsText = styled.div`
  margin-bottom: 40px;
  font-size: 1.1rem;
  font-weight: 400;
  text-align: justify;
`;

const SignIn = () => {
  const [inputs, onChangeHandler, resetForm] = useForm({
    email: 'demo@rajrajhans.com',
    password: 'password',
  });
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
  const { query } = router;

  useEffect(() => {
    loading ? toggleIsLoading(true) : toggleIsLoading(false);
  }, [loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(null);
    resetForm();
    const res = await signIn();

    if (res?.data?.authenticateUserWithPassword?.code === 'FAILURE') {
      setLoginError({
        message: 'Login Failed. Please try again.',
      });
    } else {
      router.push('/shop').catch((e) => console.log(e));
    }
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
            {query?.email ? (
              <>
                Welcome, {query.name}! Your account was successfully created.
                You can now sign in below.
              </>
            ) : (
              <>
                Please enter the email and password you used while signing up.
                If you just want to test out the platform, an email and password
                for a dummy account is already filled for you.
              </>
            )}
            <br />
            <br />
            Don't have an account? <Link href={'/sign-up'}>Sign Up here</Link>
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
                  required={true}
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
                  required={true}
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
