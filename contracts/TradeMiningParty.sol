// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./lib/TransferHelper.sol";

contract TrandeMiningParty {
    using SafeMath for uint256;

    // todo: Implement Airdrop

    IERC20 public token;

    constructor() {}
}
