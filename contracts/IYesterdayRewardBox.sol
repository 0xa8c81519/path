// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IYesterdayRewardBox {
    function injectAsset(uint256 amount) external;

    function addUser(address _user, uint256 amt) external;

    function getUserLength() external view returns (uint256);

    function claim(address _user) external;

    function getUserInfo(address _user)
        external
        view
        returns (
            uint256,
            bool,
            bool,
            uint256,
            uint256
        );
}
