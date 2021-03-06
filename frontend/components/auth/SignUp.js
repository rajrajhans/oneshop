import React from 'react';
import useForm from '../../utils/useForm';
import StyledForm from '../helpers/StyledForm';
import { FormContainer, InnerFormContainer } from '../../pages/sell';
import CardBg from '../helpers/CardBg';
import PageInfoBar from '../helpers/PageInfoBar';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import ErrorMessage from '../helpers/ErrorMessage';
import { useLoadingContext } from '../helpers/LoadingContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FormDetailsText } from './SignIn';

const SignUp = () => {
  const [inputs, onChangeHandler, resetForm] = useForm();
  const [signUpError, setSignUpError] = useState(null);
  const [signUp, { data, mutationError, loading }] = useMutation(
    SIGNUP_MUTATION,
    {
      variables: inputs,
    },
  );

  const { toggleIsLoading } = useLoadingContext();
  const router = useRouter();

  useEffect(() => {
    loading ? toggleIsLoading(true) : toggleIsLoading(false);
  }, [loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    resetForm();
    setSignUpError(null);
    const res = await signUp().catch((e) => {
      setSignUpError(e);
    });

    if (res?.data?.createUser?.email) {
      router
        .push(
          `/sign-in?name=${res?.data?.createUser?.name}&email=${res?.data?.createUser?.email}`,
        )
        .catch((e) => console.log(e));
    }
  };

  return (
    <>
      <CardBg />
      <PageInfoBar
        leftText={null}
        middleText={'Sign Up'}
        rightComponent={null}
      />
      <FormContainer>
        <InnerFormContainer>
          <ErrorMessage error={mutationError || signUpError} />
          <FormDetailsText>
            Please fill the form below to sign up for a oneshop account.
            <br />
            Already have an account? <Link href={'/sign-in'}>Sign In here</Link>
          </FormDetailsText>

          <StyledForm method={'POST'} onSubmit={handleSubmit}>
            <fieldset>
              <div className="form-input">
                <label htmlFor={'name'}>Name</label>
                <input
                  type={'name'}
                  autoComplete={'name'}
                  name={'name'}
                  id={'name'}
                  placeholder={'Your Name'}
                  onChange={onChangeHandler}
                  value={inputs.name}
                  required={true}
                />
              </div>

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

              <input type={'submit'} value={'Sign Up'} />
            </fieldset>
          </StyledForm>
        </InnerFormContainer>
      </FormContainer>
    </>
  );
};

export default SignUp;

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      name
      email
    }
  }
`;
