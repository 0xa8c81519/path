// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title Path token with Governance.
contract PathToken is ERC20, Ownable {
    uint256 public TOTAL_SUPPLY = 1_000_000_000 ether;

    constructor(address owner_) ERC20("Path Token", "PATH") {
        require(owner_ != address(0), "owner can not be 0 address.");
        transferOwnership(owner_);
        _mint(owner_, TOTAL_SUPPLY);
    }
}
