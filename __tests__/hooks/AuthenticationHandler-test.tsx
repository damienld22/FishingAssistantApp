const mockHandleRequest = jest.fn();
jest.mock('../../hooks/RequestHandler.tsx', () => ({
  useRequest: () => {
    return {
      data: null,
      error: null,
      isLoading: false,
      handleRequest: mockHandleRequest,
    };
  },
}));

import {act, renderHook} from '@testing-library/react-hooks';
import useAuthentication from '../../hooks/AuthenticationHandler';

describe('Test authentication handler', () => {
  it('check the initial state', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useAuthentication());

    await waitForNextUpdate();

    expect(result.current.error).toBe(null);
    expect(result.current.token).toBe(null);
    expect(typeof result.current.handleAuthentication).toBe('function');
    expect(typeof result.current.handleDisconnection).toBe('function');
    expect(result.current.isLoading).toBe(false);
  });

  it('Check when we handleAuthentication', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useAuthentication());
    const authEntry = {
      username: 'username',
      password: 'password',
    };

    await act(async () => {
      result.current.handleAuthentication(authEntry as any);
      await waitForNextUpdate();
    });

    expect(mockHandleRequest).toHaveBeenCalledWith({
      method: 'post',
      url: '/login',
      data: authEntry,
    });
  });
});
