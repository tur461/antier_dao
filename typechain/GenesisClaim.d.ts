/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface GenesisClaimInterface extends ethers.utils.Interface {
  functions: {
    "approve()": FunctionFragment;
    "circulatingSupply()": FunctionFragment;
    "claim(address,uint256)": FunctionFragment;
    "claimed(address)": FunctionFragment;
    "maximumAllocated()": FunctionFragment;
    "migrate(address[])": FunctionFragment;
    "owner()": FunctionFragment;
    "pullManagement()": FunctionFragment;
    "pullWalletChange(address)": FunctionFragment;
    "pushManagement(address)": FunctionFragment;
    "pushWalletChange(address)": FunctionFragment;
    "redeemableFor(address)": FunctionFragment;
    "renounceManagement()": FunctionFragment;
    "setTerms(address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "stake(address,uint256,bool,bool)": FunctionFragment;
    "terms(address)": FunctionFragment;
    "totalAllocated()": FunctionFragment;
    "treatAllAsStaked()": FunctionFragment;
    "useStatic()": FunctionFragment;
    "walletChange(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "approve", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "circulatingSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "claimed", values: [string]): string;
  encodeFunctionData(
    functionFragment: "maximumAllocated",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "migrate", values: [string[]]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pullManagement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pullWalletChange",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "pushManagement",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "pushWalletChange",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemableFor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceManagement",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setTerms",
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [string, BigNumberish, boolean, boolean]
  ): string;
  encodeFunctionData(functionFragment: "terms", values: [string]): string;
  encodeFunctionData(
    functionFragment: "totalAllocated",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "treatAllAsStaked",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "useStatic", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "walletChange",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "circulatingSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maximumAllocated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pullManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pullWalletChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pushManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pushWalletChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemableFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceManagement",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setTerms", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "terms", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAllocated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "treatAllAsStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "useStatic", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "walletChange",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipPulled(address,address)": EventFragment;
    "OwnershipPushed(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipPulled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipPushed"): EventFragment;
}

export type OwnershipPulledEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type OwnershipPushedEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class GenesisClaim extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: GenesisClaimInterface;

  functions: {
    approve(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    circulatingSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    claim(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimed(_address: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    maximumAllocated(overrides?: CallOverrides): Promise<[BigNumber]>;

    migrate(
      _addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pullManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pullWalletChange(
      _oldAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushManagement(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushWalletChange(
      _newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemableFor(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    renounceManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTerms(
      _address: string,
      _percent: BigNumberish,
      _claimed: BigNumberish,
      _gClaimed: BigNumberish,
      _max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      _to: string,
      _amount: BigNumberish,
      _rebasing: boolean,
      _claimFromStaking: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    terms(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        percent: BigNumber;
        claimed: BigNumber;
        gClaimed: BigNumber;
        max: BigNumber;
      }
    >;

    totalAllocated(overrides?: CallOverrides): Promise<[BigNumber]>;

    treatAllAsStaked(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    useStatic(overrides?: CallOverrides): Promise<[boolean]>;

    walletChange(arg0: string, overrides?: CallOverrides): Promise<[string]>;
  };

  approve(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

  claim(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimed(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

  maximumAllocated(overrides?: CallOverrides): Promise<BigNumber>;

  migrate(
    _addresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pullManagement(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pullWalletChange(
    _oldAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushManagement(
    newOwner_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushWalletChange(
    _newAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemableFor(
    _address: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceManagement(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTerms(
    _address: string,
    _percent: BigNumberish,
    _claimed: BigNumberish,
    _gClaimed: BigNumberish,
    _max: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    _to: string,
    _amount: BigNumberish,
    _rebasing: boolean,
    _claimFromStaking: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  terms(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      percent: BigNumber;
      claimed: BigNumber;
      gClaimed: BigNumber;
      max: BigNumber;
    }
  >;

  totalAllocated(overrides?: CallOverrides): Promise<BigNumber>;

  treatAllAsStaked(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  useStatic(overrides?: CallOverrides): Promise<boolean>;

  walletChange(arg0: string, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    approve(overrides?: CallOverrides): Promise<void>;

    circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claimed(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    maximumAllocated(overrides?: CallOverrides): Promise<BigNumber>;

    migrate(_addresses: string[], overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pullManagement(overrides?: CallOverrides): Promise<void>;

    pullWalletChange(
      _oldAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    pushManagement(newOwner_: string, overrides?: CallOverrides): Promise<void>;

    pushWalletChange(
      _newAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    redeemableFor(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceManagement(overrides?: CallOverrides): Promise<void>;

    setTerms(
      _address: string,
      _percent: BigNumberish,
      _claimed: BigNumberish,
      _gClaimed: BigNumberish,
      _max: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      _to: string,
      _amount: BigNumberish,
      _rebasing: boolean,
      _claimFromStaking: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    terms(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        percent: BigNumber;
        claimed: BigNumber;
        gClaimed: BigNumber;
        max: BigNumber;
      }
    >;

    totalAllocated(overrides?: CallOverrides): Promise<BigNumber>;

    treatAllAsStaked(overrides?: CallOverrides): Promise<void>;

    useStatic(overrides?: CallOverrides): Promise<boolean>;

    walletChange(arg0: string, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipPulled(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipPulled(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "OwnershipPushed(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipPushed(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    approve(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimed(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    maximumAllocated(overrides?: CallOverrides): Promise<BigNumber>;

    migrate(
      _addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pullManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pullWalletChange(
      _oldAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushManagement(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushWalletChange(
      _newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemableFor(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTerms(
      _address: string,
      _percent: BigNumberish,
      _claimed: BigNumberish,
      _gClaimed: BigNumberish,
      _max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      _to: string,
      _amount: BigNumberish,
      _rebasing: boolean,
      _claimFromStaking: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    terms(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocated(overrides?: CallOverrides): Promise<BigNumber>;

    treatAllAsStaked(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    useStatic(overrides?: CallOverrides): Promise<BigNumber>;

    walletChange(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    approve(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    circulatingSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimed(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maximumAllocated(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    migrate(
      _addresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pullManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pullWalletChange(
      _oldAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushManagement(
      newOwner_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushWalletChange(
      _newAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemableFor(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceManagement(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTerms(
      _address: string,
      _percent: BigNumberish,
      _claimed: BigNumberish,
      _gClaimed: BigNumberish,
      _max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      _to: string,
      _amount: BigNumberish,
      _rebasing: boolean,
      _claimFromStaking: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    terms(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalAllocated(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    treatAllAsStaked(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    useStatic(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    walletChange(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
