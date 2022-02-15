/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AaveAllocator, AaveAllocatorInterface } from "../AaveAllocator";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IOlympusAuthority",
        name: "_authority",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IOlympusAuthority",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "aTokenInfo",
    outputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "aToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deployed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limitChangeTimelockEnd",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "aTokens",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "aToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "max",
        type: "uint256",
      },
    ],
    name: "addToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract IOlympusAuthority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "exceedsLimit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_aTokens",
        type: "address[]",
      },
    ],
    name: "harvestFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newMax",
        type: "uint256",
      },
    ],
    name: "lowerLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newMax",
        type: "uint256",
      },
    ],
    name: "queueRaiseLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "raiseLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "referralCode",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardsPending",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "rewardsPendingFor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOlympusAuthority",
        name: "_newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "code",
        type: "uint16",
      },
    ],
    name: "setReferralCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timelockInBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalValueDeployed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610140604052600c6101008190526b15539055551213d49256915160a21b61012090815262000032916000919062000137565b507fd784927ff2f95ba542bfc824c8a8a98f3495f6b50000000000000000000000006080527f7d2768de32b0b80b7a3454c06bdac94a69ddc7a900000000000000000000000060a0527f9a315bdf513367c0377fb36545857d12e85813ef00000000000000000000000060c0526119c860e052348015620000b257600080fd5b50604051620020753803806200207583398181016040526020811015620000d857600080fd5b5051600180546001600160a01b0319166001600160a01b0383169081179091556040518291907f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a250506005805461ffff19169055620001e3565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200016f5760008555620001ba565b82601f106200018a57805160ff1916838001178555620001ba565b82800160010185558215620001ba579182015b82811115620001ba5782518255916020019190600101906200019d565b50620001c8929150620001cc565b5090565b5b80821115620001c85760008155600101620001cd565b60805160601c60a05160601c60c05160601c60e051611e1262000263600039806104c4528061101a52508061058d52806107df52806109b5528061150552806118ab52806119405280611a0252508061087d528061094c52806116df528061178f5250806105545280610a90528061109c52806114ca5250611e126000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80638f512a2d116100cd578063d710951a11610081578063f3fef3a311610066578063f3fef3a314610435578063f8ff9a4914610461578063fa43b69c146104a157610151565b8063d710951a146103a6578063d8b6d2521461041657610151565b8063bf7e214f116100b2578063bf7e214f14610370578063c087cdf414610378578063c901761d1461039e57610151565b80638f512a2d1461033c57806398c606121461034457610151565b806347e7ef24116101245780636daa9850116101095780636daa9850146102b45780637a9e5e4b146102ea578063895a02931461031057610151565b806347e7ef241461021857806369b421781461024457610151565b80632f15f45e14610156578063324e4b57146101705780633a49ef2f146101a95780634641257d1461020e575b600080fd5b61015e6104c2565b60408051918252519081900360200190f35b61018d6004803603602081101561018657600080fd5b50356104e6565b604080516001600160a01b039092168252519081900360200190f35b6101cf600480360360208110156101bf57600080fd5b50356001600160a01b0316610510565b604080516001600160a01b039788168152959096166020860152848601939093526060840191909152608083015260a082015290519081900360c00190f35b610216610552565b005b6102166004803603604081101561022e57600080fd5b506001600160a01b03813516906020013561065b565b61015e6004803603602081101561025a57600080fd5b81019060208101813564010000000081111561027557600080fd5b82018360208201111561028757600080fd5b803590602001918460208302840111640100000000831117156102a957600080fd5b509092509050610a5f565b610216600480360360608110156102ca57600080fd5b506001600160a01b03813581169160208101359091169060400135610b31565b6102166004803603602081101561030057600080fd5b50356001600160a01b0316610de5565b6102166004803603604081101561032657600080fd5b506001600160a01b038135169060200135610f28565b61015e611067565b6102166004803603604081101561035a57600080fd5b506001600160a01b038135169060200135611151565b61018d61133c565b6102166004803603602081101561038e57600080fd5b50356001600160a01b031661134b565b61015e6114c2565b610216600480360360208110156103bc57600080fd5b8101906020810181356401000000008111156103d757600080fd5b8201836020820111156103e957600080fd5b8035906020019184602083028401116401000000008311171561040b57600080fd5b5090925090506114c8565b61041e6115bb565b6040805161ffff9092168252519081900360200190f35b6102166004803603604081101561044b57600080fd5b506001600160a01b0381351690602001356115c5565b61048d6004803603604081101561047757600080fd5b506001600160a01b038135169060200135611a77565b604080519115158252519081900360200190f35b610216600480360360208110156104b757600080fd5b503561ffff16611ac6565b7f000000000000000000000000000000000000000000000000000000000000000081565b600281815481106104f657600080fd5b6000918252602090912001546001600160a01b0316905081565b60036020819052600091825260409091208054600182015460028301549383015460048401546005909401546001600160a01b03938416959390921693909186565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633111e7b3600261058b611067565b7f00000000000000000000000000000000000000000000000000000000000000006040518463ffffffff1660e01b81526004018080602001848152602001836001600160a01b03168152602001828103825285818154815260200191508054801561061f57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610601575b5050945050505050600060405180830381600087803b15801561064157600080fd5b505af1158015610655573d6000803e3d6000fd5b50505050565b600160009054906101000a90046001600160a01b03166001600160a01b0316630505c8c96040518163ffffffff1660e01b815260040160206040518083038186803b1580156106a957600080fd5b505afa1580156106bd573d6000803e3d6000fd5b505050506040513d60208110156106d357600080fd5b50516000906001600160a01b031633146107805760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156107715780601f1061074657610100808354040283529160200191610771565b820191906000526020600020905b81548152906001019060200180831161075457829003601f168201915b50509250505060405180910390fd5b5061078b8282611a77565b156107dd576040805162461bcd60e51b815260206004820152601560248201527f45786365656473206465706f736974206c696d69740000000000000000000000604482015290519081900360640190fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630b0eee3083836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561085457600080fd5b505af1158015610868573d6000803e3d6000fd5b50505050816001600160a01b031663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000836040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156108e357600080fd5b505af11580156108f7573d6000803e3d6000fd5b505050506040513d602081101561090d57600080fd5b50506005546040805163e8eda9df60e01b81526001600160a01b0385811660048301526024820185905230604483015261ffff909316606482015290517f00000000000000000000000000000000000000000000000000000000000000009092169163e8eda9df9160848082019260009290919082900301818387803b15801561099657600080fd5b505af11580156109aa573d6000803e3d6000fd5b50505050610a5b82827f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f182178386866040518363ffffffff1660e01b815260040180836001600160a01b031681526020018281526020019250505060206040518083038186803b158015610a2857600080fd5b505afa158015610a3c573d6000803e3d6000fd5b505050506040513d6020811015610a5257600080fd5b50516001611bca565b5050565b604080516345accf9360e11b8152306024820181905260048201928352604482018490526000926001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001692638b599f2692879287928190606401856020860280828437600083820152604051601f909101601f1916909201965060209550909350505081840390508186803b158015610afe57600080fd5b505afa158015610b12573d6000803e3d6000fd5b505050506040513d6020811015610b2857600080fd5b50519392505050565b600160009054906101000a90046001600160a01b03166001600160a01b0316630505c8c96040518163ffffffff1660e01b815260040160206040518083038186803b158015610b7f57600080fd5b505afa158015610b93573d6000803e3d6000fd5b505050506040513d6020811015610ba957600080fd5b50516000906001600160a01b03163314610c1c5760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156107715780601f1061074657610100808354040283529160200191610771565b506001600160a01b038316610c78576040805162461bcd60e51b815260206004820152601360248201527f546f6b656e3a205a65726f206164647265737300000000000000000000000000604482015290519081900360640190fd5b6001600160a01b038216610cd3576040805162461bcd60e51b815260206004820152601460248201527f61546f6b656e3a205a65726f2061646472657373000000000000000000000000604482015290519081900360640190fd5b6001600160a01b03831660009081526003602052604090206002015415610d41576040805162461bcd60e51b815260206004820152600b60248201527f546f6b656e206164646564000000000000000000000000000000000000000000604482015290519081900360640190fd5b6040805160c0810182526001600160a01b0394851680825293851660208083019182526000838501818152606085019687526080850182815260a08601838152988352600393849052959091209351845490891673ffffffffffffffffffffffffffffffffffffffff199182161785559251600185018054919099169316929092179096555160028201559151938201939093559151600483015551600590910155565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b158015610e3357600080fd5b505afa158015610e47573d6000803e3d6000fd5b505050506040513d6020811015610e5d57600080fd5b50516000906001600160a01b03163314610ed05760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156107715780601f1061074657610100808354040283529160200191610771565b506001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040517f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a250565b600160009054906101000a90046001600160a01b03166001600160a01b0316630505c8c96040518163ffffffff1660e01b815260040160206040518083038186803b158015610f7657600080fd5b505afa158015610f8a573d6000803e3d6000fd5b505050506040513d6020811015610fa057600080fd5b50516000906001600160a01b031633146110135760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156107715780601f1061074657610100808354040283529160200191610771565b5061103e437f0000000000000000000000000000000000000000000000000000000000000000611cd0565b6001600160a01b0390921660009081526003602052604090206005810192909255600490910155565b604080516345accf9360e11b815230602482018190526004820192835260028054604484018190526000946001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001694638b599f2694928291606401908590801561110157602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116110e3575b5050935050505060206040518083038186803b15801561112057600080fd5b505afa158015611134573d6000803e3d6000fd5b505050506040513d602081101561114a57600080fd5b5051905090565b600160009054906101000a90046001600160a01b03166001600160a01b0316630505c8c96040518163ffffffff1660e01b815260040160206040518083038186803b15801561119f57600080fd5b505afa1580156111b3573d6000803e3d6000fd5b505050506040513d60208110156111c957600080fd5b50516000906001600160a01b0316331461123c5760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156107715780601f1061074657610100808354040283529160200191610771565b506001600160a01b0382166000908152600360208190526040909120015481106112ad576040805162461bcd60e51b815260206004820152600d60248201527f4d757374206265206c6f77657200000000000000000000000000000000000000604482015290519081900360640190fd5b6001600160a01b038216600090815260036020526040902060020154811161131c576040805162461bcd60e51b815260206004820152601a60248201527f4d757374206265206c657373207468616e206465706c6f796564000000000000604482015290519081900360640190fd5b6001600160a01b0390911660009081526003602081905260409091200155565b6001546001600160a01b031681565b600160009054906101000a90046001600160a01b03166001600160a01b0316630505c8c96040518163ffffffff1660e01b815260040160206040518083038186803b15801561139957600080fd5b505afa1580156113ad573d6000803e3d6000fd5b505050506040513d60208110156113c357600080fd5b50516000906001600160a01b031633146114365760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156107715780601f1061074657610100808354040283529160200191610771565b506001600160a01b038116600090815260036020526040902060058101544310156114a8576040805162461bcd60e51b815260206004820152601460248201527f54696d656c6f636b206e6f742065787069726564000000000000000000000000604482015290519081900360640190fd5b600481018054600383015560009081905560059091015550565b60045481565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633111e7b383836115038686610a5f565b7f00000000000000000000000000000000000000000000000000000000000000006040518563ffffffff1660e01b81526004018080602001848152602001836001600160a01b031681526020018281038252868682818152602001925060200280828437600081840152601f19601f82011690508083019250505095505050505050600060405180830381600087803b15801561159f57600080fd5b505af11580156115b3573d6000803e3d6000fd5b505050505050565b60055461ffff1681565b600160009054906101000a90046001600160a01b03166001600160a01b0316630505c8c96040518163ffffffff1660e01b815260040160206040518083038186803b15801561161357600080fd5b505afa158015611627573d6000803e3d6000fd5b505050506040513d602081101561163d57600080fd5b50516000906001600160a01b031633146116b05760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156107715780601f1061074657610100808354040283529160200191610771565b506001600160a01b03808316600090815260036020908152604080832060010154815163095ea7b360e01b81527f00000000000000000000000000000000000000000000000000000000000000008616600482015260248101879052915194169363095ea7b393604480840194938390030190829087803b15801561173457600080fd5b505af1158015611748573d6000803e3d6000fd5b505050506040513d602081101561175e57600080fd5b505060408051631a4ca37b60e21b81526001600160a01b0384811660048301526024820184905230604483015291517f0000000000000000000000000000000000000000000000000000000000000000909216916369328dec916064808201926020929091908290030181600087803b1580156117da57600080fd5b505af11580156117ee573d6000803e3d6000fd5b505050506040513d602081101561180457600080fd5b5050604080516370a0823160e01b815230600482015290516000916001600160a01b038516916370a0823191602480820192602092909190829003018186803b15801561185057600080fd5b505afa158015611864573d6000803e3d6000fd5b505050506040513d602081101561187a57600080fd5b50516040805163f182178360e01b81526001600160a01b0386811660048301526024820184905291519293506000927f00000000000000000000000000000000000000000000000000000000000000009092169163f182178391604480820192602092909190829003018186803b1580156118f457600080fd5b505afa158015611908573d6000803e3d6000fd5b505050506040513d602081101561191e57600080fd5b5051905061192f8483836000611bca565b836001600160a01b031663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156119a657600080fd5b505af11580156119ba573d6000803e3d6000fd5b505050506040513d60208110156119d057600080fd5b50506040805163bc157ac160e01b8152600481018490526001600160a01b0386811660248301526044820184905291517f00000000000000000000000000000000000000000000000000000000000000009092169163bc157ac1916064808201926020929091908290030181600087803b158015611a4d57600080fd5b505af1158015611a61573d6000803e3d6000fd5b505050506040513d60208110156115b357600080fd5b6001600160a01b0382166000908152600360205260408120600201548190611a9f9084611cd0565b6001600160a01b038516600090815260036020819052604090912001541091505092915050565b600160009054906101000a90046001600160a01b03166001600160a01b0316630505c8c96040518163ffffffff1660e01b815260040160206040518083038186803b158015611b1457600080fd5b505afa158015611b28573d6000803e3d6000fd5b505050506040513d6020811015611b3e57600080fd5b50516000906001600160a01b03163314611bb15760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156107715780601f1061074657610100808354040283529160200191610771565b506005805461ffff191661ffff92909216919091179055565b8015611c27576001600160a01b038416600090815260036020526040902060020154611bf69084611cd0565b6001600160a01b038516600090815260036020526040902060020155600454611c1f9083611cd0565b600455610655565b6001600160a01b038416600090815260036020526040902060020154831015611c91576001600160a01b038416600090815260036020526040902060020154611c709084611d31565b6001600160a01b038516600090815260036020526040902060020155611cae565b6001600160a01b0384166000908152600360205260408120600201555b600454821015611cc557600454611c1f9083611d31565b600060045550505050565b600082820183811015611d2a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000611d2a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060008184841115611dfd5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611dc2578181015183820152602001611daa565b50505050905090810190601f168015611def5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fea164736f6c6343000705000a";

export class AaveAllocator__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _authority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AaveAllocator> {
    return super.deploy(_authority, overrides || {}) as Promise<AaveAllocator>;
  }
  getDeployTransaction(
    _authority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_authority, overrides || {});
  }
  attach(address: string): AaveAllocator {
    return super.attach(address) as AaveAllocator;
  }
  connect(signer: Signer): AaveAllocator__factory {
    return super.connect(signer) as AaveAllocator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AaveAllocatorInterface {
    return new utils.Interface(_abi) as AaveAllocatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveAllocator {
    return new Contract(address, _abi, signerOrProvider) as AaveAllocator;
  }
}
