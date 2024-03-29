import React, { ReactElement, useCallback, useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Loading from '../../components/Loading';
import { routes } from '../../config/constants';
import useAuth from '../../hooks/useAuth';
import useRouter from '../../hooks/useRouter';
import AuthService from '../../services/AuthService';
import StorageService from '../../services/StorageService';

import { StyledContainer, StyledField, StyledForm, StyledWrapper } from './styles';

export default function LoginPage(): ReactElement {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setToken } = useAuth();
  const { setRoute } = useRouter();

  const handleLogin = useCallback((e) => {
    e.preventDefault();

    setIsLoading(true);

    AuthService.login(username, password, {
      onError: message => {
        setIsLoading(false);
        window.alert(message);
      },
      onSuccess: ({ token }) => {
        StorageService.setToken(token);
        setIsLoading(true);
        setToken(token);
      }
    });
  }, [username, password, AuthService.login]);

  const handleRegister = useCallback(() => setRoute(routes.NEW_USER), [setRoute]);

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledForm onSubmit={handleLogin}>
          <StyledField>
            <Input dataInput="username" value={username} onChange={setUsername} placeholder="Username" type="text" required />
          </StyledField>
          <StyledField>
            <Input dataInput="password" value={password} onChange={setPassword} placeholder="Password" type="password" required />
          </StyledField>
          <StyledField>
            <Button onClick={handleLogin}>
              {isLoading ? <Loading /> : 'Login'}
            </Button>
          </StyledField>
          <StyledField>
            <Button onClick={handleRegister}>
              Register
            </Button>
          </StyledField>
        </StyledForm>
      </StyledWrapper>
    </StyledContainer>
  );
}
