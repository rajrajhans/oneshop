import React from 'react';
import SignOutIcon from '../../public/assets/log-out-icon.svg';
import IconWithTooltip from '../helpers/IconWithTooltip';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';

const SignOut = () => {
  const router = useRouter();
  const [signOut] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: ['CURRENT_USER_QUERY'],
  });

  const handleClick = () => {
    signOut().catch((e) => {
      console.log(e);
    });
    router.push('/sign-in').catch((e) => {
      console.log(e);
    });
  };

  return (
    <div onClick={handleClick}>
      <IconWithTooltip
        top={'60px'}
        right={'5px'}
        arrowDirection={'top'}
        arrowBottom={'100%'}
        arrowLeft={'100px'}
      >
        <div className="tooltip">Sign Out</div>

        <SignOutIcon />
      </IconWithTooltip>
    </div>
  );
};

export default SignOut;

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    endSession
  }
`;
