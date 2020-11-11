import {act, renderHook} from '@testing-library/react-hooks';
import useRequest from '../../hooks/RequestHandler';
import mockAxios from 'jest-mock-axios';
import {BASE_URL} from '../../utils';

afterEach(() => {
  mockAxios.reset();
});

describe('Test request handler', () => {
  it('check the initial state', () => {
    const {
      result: {
        current: {data, error, handleRequest, isLoading},
      },
    } = renderHook(() => useRequest());

    expect(data).toBe(null);
    expect(error).toBe(null);
    expect(typeof handleRequest).toBe('function');
    expect(isLoading).toBe(false);
  });

  it('check get request', async () => {
    const {
      result: {
        current: {handleRequest},
      },
    } = renderHook(() => useRequest());

    await act(async () => {
      handleRequest({url: '/test', method: 'get'});
    });

    expect(mockAxios).toHaveBeenCalledWith({
      url: '/test',
      baseURL: BASE_URL,
      method: 'get',
      headers: {},
      data: undefined,
    });
  });

  it('check post request', async () => {
    const {
      result: {
        current: {handleRequest},
      },
    } = renderHook(() => useRequest());

    await act(async () => {
      handleRequest({url: '/test', method: 'post'});
    });

    expect(mockAxios).toHaveBeenCalledWith({
      url: '/test',
      baseURL: BASE_URL,
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      data: undefined,
    });
  });

  it('check get request with authorization token', async () => {
    const {
      result: {
        current: {handleRequest},
      },
    } = renderHook(() => useRequest());

    await act(async () => {
      handleRequest({url: '/test', method: 'get', token: '123456'});
    });

    expect(mockAxios).toHaveBeenCalledWith({
      url: '/test',
      baseURL: BASE_URL,
      method: 'get',
      headers: {Authorization: 'Bearer 123456'},
      data: undefined,
    });
  });

  it('check post request with data and authorization token', async () => {
    const {
      result: {
        current: {handleRequest},
      },
    } = renderHook(() => useRequest());

    await act(async () => {
      handleRequest({
        url: '/test',
        method: 'post',
        token: '123456',
        data: {value: 'toto'},
      });
    });

    expect(mockAxios).toHaveBeenCalledWith({
      url: '/test',
      baseURL: BASE_URL,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123456',
      },
      data: {value: 'toto'},
    });
  });

  it('check response when request work fine', async () => {
    const {result} = renderHook(() => useRequest());

    const wantedResult = {result: 'data'};
    await act(async () => {
      result.current.handleRequest({url: '/test', method: 'get'});
      mockAxios.mockResponse({data: wantedResult, status: 200});
    });

    expect(result.current.data).toEqual(wantedResult);
    expect(result.current.error).toBe(null);
    expect(result.current.isLoading).toBe(false);
  });

  it('check loading state', async () => {
    const {result} = renderHook(() => useRequest());

    await act(async () => {
      result.current.handleRequest({url: '/test', method: 'get'});
    });

    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);
    expect(result.current.isLoading).toBe(true);
  });

  it('check response when request failed', async () => {
    const {result} = renderHook(() => useRequest());
    await act(async () => {
      result.current.handleRequest({url: '/test', method: 'get'});
      mockAxios.mockError({response: {status: 403}});
    });

    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(403);
    expect(result.current.isLoading).toBe(false);
  });
});
