// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./lib/TransferHelper.sol";

contract AirdropReward is Ownable {
    using SafeMath for uint256;

    IERC20 public token;

    address[] users;

    mapping(address => bool) userExists;

    uint256 public DEFAULT_AMOUNT = 23_865_537_711_872_500_000_000;

    event AddUser(address _user);
    event InjectAssets(address sender, uint256 amount);
    event Withdraw(address to, uint256 amount);

    constructor(address _token, address _owner) {
        require(_owner != address(0), "owner can not be 0 address.");
        require(_token != address(0), "_token can not be 0 address.");
        transferOwnership(_owner);
        token = IERC20(_token);
    }

    function injectAssets() external {
        uint256 _balance = token.balanceOf(address(this));
        require(_balance == 0, "AiredropReward: balance must be 0");
        TransferHelper.safeTransferFrom(
            address(token),
            msg.sender,
            address(this),
            DEFAULT_AMOUNT
        );
        emit InjectAssets(msg.sender, DEFAULT_AMOUNT);
    }

    function addUser(address _user) external onlyOwner {
        require(!userExists[_user], "user must not exists.");
        userExists[_user] = true;
        users.push(_user);
        emit AddUser(_user);
    }

    function withdraw(uint256 amount) external onlyOwner {
        require(
            amount <= token.balanceOf(address(this)),
            "insufficient balance"
        );
        TransferHelper.safeTransfer(address(token), msg.sender, amount);
        emit Withdraw(msg.sender, amount);
    }

    function airdrop() external onlyOwner {
        uint256 _balance = token.balanceOf(address(this));
        uint256 amt = _balance.div(users.length);
        for (uint256 i = 0; i < users.length; i++) {
            TransferHelper.safeTransfer(address(this), users[i], amt);
        }
    }
}
