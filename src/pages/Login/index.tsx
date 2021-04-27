import React, { ReactElement, useCallback, useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import useAuth from '../../hooks/useAuth';
import AuthService from '../../services/AuthService';
import StorageService from '../../services/StorageService';

import { StyledContainer, StyledField, StyledForm, StyledWrapper } from './styles';

export default function LoginPage(): ReactElement {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setToken } = useAuth();

  const handleLogin = useCallback((e) => {
    e.preventDefault();

    setIsLoading(true);

    AuthService.login(username, password, {
      onError: message => {
        setIsLoading(false);Loading;
        window.alert(message);
      },
      onSuccess: ({ token }) => {
        StorageService.setToken(token);
        setIsLoading(true);
        setToken(token);
      }
    });
  }, [username, password, AuthService.login]);

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledForm onSubmit={handleLogin}>
          <StyledField>
            <Input value={username} onChange={setUsername} placeholder="E-mail" type="text" required />
          </StyledField>
          <StyledField>
            <Input value={password} onChange={setPassword} placeholder="Senha" type="password" required />
          </StyledField>
          <StyledField>
            <Button onClick={handleLogin}>
              {isLoading ? <Loading /> : 'Login'}
            </Button>
          </StyledField>
        </StyledForm>
      </StyledWrapper>
    </StyledContainer>
  );
}
