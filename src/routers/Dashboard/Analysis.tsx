import * as React from 'react';
import { Link } from 'react-router-dom';
import { connect, Dispatch } from 'react-redux';
import { increment, decrement, Action, asyncAction } from '../../actions';
import { StoreState } from '../../types';

export interface Props {
  count?: number;
  onAsyncAction?: () => void;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Analysis({ count, onIncrement, onDecrement, onAsyncAction }: Props) {
  return (
    <div>
      Analysis
      <Link to="/user">jump to user</Link>
      <div onClick={onIncrement}>+</div>
      <div onClick={onDecrement}>-</div>
      <div onClick={onAsyncAction}>~~</div>
      <div>{count}</div>
    </div>
  );
}

export function mapStateToProps({ counter }: StoreState) {
  return {
    count: counter.count,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onAsyncAction: () => dispatch(asyncAction()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Analysis);