// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./YesterdayRewardBox.sol";
import "./IYesterdayRewardBox.sol";
import "./lib/TransferHelper.sol";

contract TrandeMiningParty {
    using SafeMath for uint256;

    IERC20 public token;

    uint256 public periodDays = 90;

    /// @dev The max amount of assets this contract will hold.
    uint256 public DEFAULT_AMOUNT = 95_462_150_847_490_000_000_000_000;

    mapping(address => address[]) public usersRewards;

    address[] public rewardsBox;

    address public worker;

    event InjectAssets(address sender, uint256 amount);

    modifier onlyWorker() {
        require(msg.sender == worker, "only worker");
        _;
    }

    constructor(address _token, address _worker) {
        require(_token != address(0), "_token must not be 0 address");
        require(_worker != address(0), "_worker must not be 0 address");
        token = IERC20(_token);
        worker = _worker;
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

    function createRewardBox(
        uint256 dateTime,
        address[] memory _users,
        uint256[] memory _amts
    ) external onlyWorker {
        require(
            _users.length == _amts.length,
            "users' size must eq _amts' size"
        );
        YesterdayRewardBox box = new YesterdayRewardBox(
            address(token),
            dateTime
        );
        rewardsBox.push(address(box)); // never dumplicated.
        uint256 _balance = token.balanceOf(address(this));
        uint256 rewardsAmount = DEFAULT_AMOUNT.div(periodDays);
        require(rewardsAmount <= _balance, "insufficient balance");
        token.approve(address(box), rewardsAmount);
        box.injectAsset(rewardsAmount);
        uint256 totalAmt = 0;
        for (uint256 i = 0; i < _amts.length; i++) {
            totalAmt = totalAmt.add(_amts[i]);
            box.addUser(_users[i], _amts[i]);
            address[] storage userRewardBoxes = usersRewards[_users[i]];
            userRewardBoxes.push(address(box)); // never dumplicated
        }
        require(totalAmt == rewardsAmount, "sum amts must eq rewardsAmount");
    }

    function claim() external {
        address[] storage boxes = usersRewards[msg.sender];
        for (uint256 i = 0; i < boxes.length; i++) {
            (, , bool claimed, , ) = IYesterdayRewardBox(boxes[i]).getUserInfo(
                msg.sender
            );
            if (!claimed) {
                IYesterdayRewardBox(boxes[i]).claim(msg.sender);
            }
        }
    }

    function getRewardBoxesLength() public view returns (uint256) {
        return rewardsBox.length;
    }

    function transferWorkershipTo(address to) public onlyWorker {
        worker = to;
    }
}
