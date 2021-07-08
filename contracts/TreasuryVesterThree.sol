// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./lib/TransferHelper.sol";

contract TreasuryVesterThree {
    using SafeMath for uint256;

    address public path;
    address public recipient;

    uint256 public vestingAmount;
    uint256 public vestingBegin;
    uint256 public vestingCliff;
    uint256 public vestingEnd;

    uint256 public lastUpdate;

    uint256 public DEFAULT_AMOUNT = 168_754_835_528_055_000_000_000_000;

    event InjectAssets(address sender, uint256 amount);

    constructor(
        address path_,
        address recipient_,
        uint256 vestingAmount_,
        uint256 vestingBegin_,
        uint256 vestingCliff_,
        uint256 vestingEnd_
    ) {
        require(
            vestingBegin_ >= block.timestamp,
            "TreasuryVester::constructor: vesting begin too early"
        );
        require(
            vestingCliff_ >= vestingBegin_,
            "TreasuryVester::constructor: cliff is too early"
        );
        require(
            vestingEnd_ > vestingCliff_,
            "TreasuryVester::constructor: end is too early"
        );

        path = path_;
        recipient = recipient_;

        vestingAmount = vestingAmount_;
        vestingBegin = vestingBegin_;
        vestingCliff = vestingCliff_;
        vestingEnd = vestingEnd_;

        lastUpdate = vestingBegin;
    }

    function setRecipient(address recipient_) public {
        require(
            msg.sender == recipient,
            "TreasuryVester::setRecipient: unauthorized"
        );
        recipient = recipient_;
    }

    function claim() public {
        require(
            block.timestamp >= vestingCliff,
            "TreasuryVester::claim: not time yet"
        );
        uint256 amount;
        if (block.timestamp >= vestingEnd) {
            amount = IERC20(path).balanceOf(address(this));
        } else {
            amount = vestingAmount.mul(block.timestamp - lastUpdate).div(
                vestingEnd - vestingBegin
            );
            lastUpdate = block.timestamp;
        }
        TransferHelper.safeTransfer(path, recipient, amount);
    }

/// @dev Inject assets.
    function injectAsset() external {
        uint256 _balance = IERC20(path).balanceOf(address(this));
        require(_balance == 0, "balance must be 0");
        TransferHelper.safeTransferFrom(
            path,
            msg.sender,
            address(this),
            DEFAULT_AMOUNT
        );
        emit InjectAssets(msg.sender, DEFAULT_AMOUNT);
    }
}
