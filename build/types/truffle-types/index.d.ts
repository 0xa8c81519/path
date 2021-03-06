/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />
import { BigNumber } from "bignumber.js";

export interface ERC20Contract extends Truffle.Contract<ERC20Instance> {
  "new"(
    name_: string,
    symbol_: string,
    meta?: Truffle.TransactionDetails
  ): Promise<ERC20Instance>;
}

export interface IERC20Contract extends Truffle.Contract<IERC20Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IERC20Instance>;
}

export interface IERC20MetadataContract
  extends Truffle.Contract<IERC20MetadataInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IERC20MetadataInstance>;
}

export interface MigrationsContract
  extends Truffle.Contract<MigrationsInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MigrationsInstance>;
}

export interface OwnableContract extends Truffle.Contract<OwnableInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<OwnableInstance>;
}

export interface PathTokenContract extends Truffle.Contract<PathTokenInstance> {
  "new"(
    owner_: string | BigNumber,
    meta?: Truffle.TransactionDetails
  ): Promise<PathTokenInstance>;
}

export interface TimeLockContract extends Truffle.Contract<TimeLockInstance> {
  "new"(
    _beneficiary: string | BigNumber,
    _token: string | BigNumber,
    _startTime: number | BigNumber | string,
    _delay: number | BigNumber | string,
    meta?: Truffle.TransactionDetails
  ): Promise<TimeLockInstance>;
}

export interface TreasuryVesterContract
  extends Truffle.Contract<TreasuryVesterInstance> {
  "new"(
    path_: string | BigNumber,
    recipient_: string | BigNumber,
    vestingAmount_: number | BigNumber | string,
    vestingBegin_: number | BigNumber | string,
    vestingCliff_: number | BigNumber | string,
    vestingEnd_: number | BigNumber | string,
    meta?: Truffle.TransactionDetails
  ): Promise<TreasuryVesterInstance>;
}

export interface ERC20Instance extends Truffle.ContractInstance {
  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

  decimals(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  balanceOf(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  transfer: {
    (
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve: {
    (
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transferFrom: {
    (
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  increaseAllowance: {
    (
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  decreaseAllowance: {
    (
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface IERC20Instance extends Truffle.ContractInstance {
  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  balanceOf(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  transfer: {
    (
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve: {
    (
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transferFrom: {
    (
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface IERC20MetadataInstance extends Truffle.ContractInstance {
  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve: {
    (
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  balanceOf(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  transfer: {
    (
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transferFrom: {
    (
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

  decimals(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface MigrationsInstance extends Truffle.ContractInstance {
  last_completed_migration(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  setCompleted: {
    (
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      completed: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface OwnableInstance extends Truffle.ContractInstance {
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  transferOwnership: {
    (
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface PathTokenInstance extends Truffle.ContractInstance {
  TOTAL_SUPPLY(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve: {
    (
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  balanceOf(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  decimals(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  decreaseAllowance: {
    (
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      subtractedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  increaseAllowance: {
    (
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      spender: string | BigNumber,
      addedValue: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  transfer: {
    (
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transferFrom: {
    (
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;
    sendTransaction(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      sender: string | BigNumber,
      recipient: string | BigNumber,
      amount: number | BigNumber | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  transferOwnership: {
    (
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface TimeLockInstance extends Truffle.ContractInstance {
  CYCLE_TIMES(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  PERIOD(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  beneficiary(txDetails?: Truffle.TransactionDetails): Promise<string>;

  cycle(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  delay(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  fixedQuantity(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  hasReward(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  name(txDetails?: Truffle.TransactionDetails): Promise<string>;

  startTime(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;

  token(txDetails?: Truffle.TransactionDetails): Promise<string>;

  getBalance(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  getReward(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  withdraw: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  setBeneficiary: {
    (
      _newBeneficiary: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      _newBeneficiary: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      _newBeneficiary: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _newBeneficiary: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };
}

export interface TreasuryVesterInstance extends Truffle.ContractInstance {
  lastUpdate(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  path(txDetails?: Truffle.TransactionDetails): Promise<string>;

  recipient(txDetails?: Truffle.TransactionDetails): Promise<string>;

  vestingAmount(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  vestingBegin(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  vestingCliff(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  vestingEnd(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;

  setRecipient: {
    (
      recipient_: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse>;
    call(
      recipient_: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      recipient_: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      recipient_: string | BigNumber,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  claim: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };
}
