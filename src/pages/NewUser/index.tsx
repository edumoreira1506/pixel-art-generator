import React, { ReactElement, useCallback, useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import { routes } from '../../config/constants';
import useRouter from '../../hooks/useRouter';
import AuthService from '../../services/AuthService';
import UserService from '../../services/UserService';

import { StyledContainer, StyledField, StyledForm, StyledWrapper } from './styles';

export default function NewUserPage(): ReactElement {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setRoute } = useRouter();

  const handleSaveUser = useCallback((e) => {
    e.preventDefault();

    setIsLoading(true);

    UserService.store(username, password, confirmPassword, {
      onError: message => {
        setIsLoading(false);
        window.alert(message);
      },
      onSuccess: () => {
        window.alert('Registered! You need to just login to enjoy :D');
        setRoute(routes.LOGIN);
      }
    });
  }, [username, password, confirmPassword, AuthService.login]);

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledForm onSubmit={handleSaveUser}>
          <StyledField>
            <Input dataInput="username" value={username} onChange={setUsername} placeholder="Username" type="text" required />
          </StyledField>
          <StyledField>
            <Input dataInput="password" value={password} onChange={setPassword} placeholder="Password" type="password" required />
          </StyledField>
          <StyledField>
            <Input dataInput="confirmPassword" value={confirmPassword} onChange={setConfirmPassword} placeholder="Confirm password" type="password" required />
          </StyledField>
          <StyledField>
            <Button onClick={handleSaveUser}>
              {isLoading ? <Loading /> : 'Save'}
            </Button>
          </StyledField>
        </StyledForm>
      </StyledWrapper>
    </StyledContainer>
  );
}
