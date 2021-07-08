// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./lib/TransferHelper.sol";

contract YesterdayReward is Ownable, ReentrancyGuard {
    using SafeMath for uint256;

    struct UserInfo {
        uint256 amount;
        bool exists;
        bool isClaimed;
        uint256 claimedBlock;
        uint256 claimedTime;
    }

    uint256 public rewardTime;

    IERC20 public token;

    mapping(address => UserInfo) public users;

    address[] public usersList;

    event InjectAssets(address sender, uint256 amount);
    event AddUser(address _user, uint256 _amount);
    event Claim(address _user, uint256 _amount);

    constructor(address _token, uint256 _rewardTime) {
        require(_token != address(0), "_token must not be 0 address");
        transferOwnership(msg.sender);
        token = IERC20(_token);
        rewardTime = _rewardTime;
    }

    /// @dev Inject assets.
    function injectAsset(uint256 amount) external {
        uint256 _balance = token.balanceOf(address(this));
        require(_balance == 0, "balance must be 0");
        TransferHelper.safeTransferFrom(
            address(token),
            msg.sender,
            address(this),
            amount
        );
        emit InjectAssets(msg.sender, amount);
    }

    function addUser(address _user, uint256 amt) public onlyOwner {
        require(_user != address(0), "user must not 0 address");
        require(!users[_user].exists, "dumpliated user");
        UserInfo memory _userInfo = users[_user];
        _userInfo.exists = true;
        _userInfo.amount = amt;
        _userInfo.isClaimed = false;
        _userInfo.claimedBlock = 0;
        users[_user] = _userInfo;
        usersList.push(_user);
        emit AddUser(_user, amt);
    }

    function getUserLength() public view returns (uint256) {
        return usersList.length;
    }

    function claim() external nonReentrant {
        require(users[msg.sender].exists, "user not found");
        require(!users[msg.sender].isClaimed, "user claimed already");
        uint256 _balance = token.balanceOf(address(this));
        require(_balance >= users[msg.sender].amount, "insufficient balance");
        users[msg.sender].isClaimed = true;
        users[msg.sender].claimedBlock = block.number;
        users[msg.sender].claimedTime = block.timestamp;
        TransferHelper.safeTransfer(
            address(token),
            msg.sender,
            users[msg.sender].amount
        );
        emit Claim(msg.sender, users[msg.sender].amount);
    }
}
