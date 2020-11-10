import 'react-native';
import React from 'react';
import App from '../App';
import {render, fireEvent} from '@testing-library/react-native';
import {act} from 'react-test-renderer';

jest.mock('../hooks/AuthenticationHandler', () => ({
  __esModule: true,
  default: () => ({
    token: 'a',
    error: null,
    isLoading: false,
    handleAuthentication: jest.fn(),
    handleDisconnection: jest.fn(),
  }),
}));

it('renders correctly', async () => {
  const {queryByTestId} = render(<App />);
  await checkAllTabScreenExists(queryByTestId);
});

describe('Check navigation', () => {
  it('When the app is launched, the default tab is the journal tab', async () => {
    const {queryByTestId} = render(<App />);
    await checkPageDisplayedByTestId(queryByTestId, 'journalHomePage');
  });

  it('When we click on "Session" tab, the session home page is displayed', async () => {
    const {queryByTestId, getByTestId} = render(<App />);
    await clickOnComponentFromTestId(getByTestId, 'tabScreenSession');
    await checkPageDisplayedByTestId(queryByTestId, 'sessionHomePage');
  });

  it('When we click on "Preparation" tab, the preparation home page is displayed', async () => {
    const {queryByTestId} = render(<App />);
    await clickOnComponentFromTestId(queryByTestId, 'tabScreenPreparation');
    await checkPageDisplayedByTestId(queryByTestId, 'preparationHomePage');
  });

  it('When we click on "Preparation" tab, then the "Journal" tab, the journal home page is displayed', async () => {
    const {queryByTestId} = render(<App />);
    await clickOnComponentFromTestId(queryByTestId, 'tabScreenPreparation');
    await clickOnComponentFromTestId(queryByTestId, 'tabScreenJournal');
    await checkPageDisplayedByTestId(queryByTestId, 'journalHomePage');
  });
});

async function checkAllTabScreenExists(queryByTestId: Function) {
  expect(queryByTestId('tabScreenJournal')).toBeTruthy();
  expect(queryByTestId('tabScreenSession')).toBeTruthy();
  expect(queryByTestId('tabScreenPreparation')).toBeTruthy();
  await act(async () => {});
}

async function checkPageDisplayedByTestId(
  queryByTestId: Function,
  testId: string,
) {
  expect(queryByTestId(testId)).toBeTruthy();
  await act(async () => {});
}

async function clickOnComponentFromTestId(
  getByTestId: Function,
  testId: string,
) {
  fireEvent.press(getByTestId(testId));
  await act(async () => {});
}
