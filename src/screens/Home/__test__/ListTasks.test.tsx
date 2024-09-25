import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {useTasks} from '@src/hooks/useTask.hook';
import {useAppSelector} from '@src/hooks/store.hook';
import {jest} from '@jest/globals';
import {useModal} from '../context/ModalContext';
import HomeScreen from '../home.screen';

// Mock dependencies
jest.mock('@src/hooks/useTask.hook');
jest.mock('@src/hooks/store.hook');
jest.mock('../context/ModalContext');
jest.mock('@shopify/flash-list', () => {
  const React = require('react');
  return {
    __esModule: true,
    FlashList: ({
      data,
      renderItem,
    }: {
      data: any[];
      renderItem: ({item}: {item: any}) => JSX.Element;
    }) => {
      return (
        <div>
          {data.map((item, index) => (
            <div key={index}>{renderItem({item})}</div>
          ))}
        </div>
      );
    },
  };
});
jest.mock('../components/Swipeable/SwipeableBox', () => {
  const React = require('react');
  return ({item}: {item: {title: string}}) => (
    <div>
      <p>{item.title}</p>
    </div>
  );
});
jest.mock('@src/components/Layouts/StatusLayout', () => 'StatusLayout');
jest.mock('@src/components/Buttons/RoundButton', () => 'RoundButton');
jest.mock('../components/CreateUpdateTaskModal', () => 'CreateUpdateTaskModal');

describe('List of tasks OK', () => {
  const mockTasks = [
    {id: '1', title: 'Task 1', completed: false},
    {id: '2', title: 'Task 2', completed: true},
  ];

  beforeEach(() => {
    (useTasks as jest.Mock).mockReturnValue({tasks: mockTasks});
    (useAppSelector as jest.Mock).mockReturnValue({tasks: mockTasks});
    (useModal as jest.Mock).mockReturnValue({
      bottomSheetModalRef: {current: {present: jest.fn()}},
      editHandle: jest.fn(),
    });
  });

  it('renders correctly', () => {
    const {getByText} = render(<HomeScreen />);
    expect(getByText('Organize and Plan')).toBeTruthy();
    expect(getByText('Your Whole Day')).toBeTruthy();
    expect(getByText('Today you have to...')).toBeTruthy();
  });
});
