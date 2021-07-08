// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./lib/TransferHelper.sol";

contract FirstYearTradeMining is Ownable {
    using SafeMath for uint256;

    IERC20 public token;

    /// @dev The max amount of assets this contract will hold.
    uint256 public DEFAULT_AMOUNT = 119_327_688_559_363_000_000_000_000;

    event InjectAssets(address sender, uint256 amount);

    constructor(address _token, address _owner) {
		require(_owner != address(0), "owner can not be 0 address.");
        require(_token != address(0), "_token can not be 0 address.");
        transferOwnership(_owner);
        token = IERC20(_token);
    }

    /// @dev Inject assets.
    function injectAsset() external {
        uint256 _balance = token.balanceOf(address(this));
        require(_balance == 0, "balance must be 0");
        TransferHelper.safeTransferFrom(
            address(token),
            msg.sender,
            address(this),
            DEFAULT_AMOUNT
        );
        emit InjectAssets(msg.sender, DEFAULT_AMOUNT);
    }
}
