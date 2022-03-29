// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Array {
    string public array;

    function setArray(string memory _array) public {
       array = string(abi.encodePacked(array, ',', _array));
    }

    function getArray() public view returns (string memory) {
        return array;
    }  

}