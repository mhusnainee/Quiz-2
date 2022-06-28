//SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 <0.9.0;

contract Box
{
    uint private userCount;
    struct person
    {
        string name;
        string adress;
        uint cnic;
        uint dob;
        uint treeNumber;   
    }

    mapping(uint => person) public user;

    function addDetails(string memory _name, string memory _adress, uint _cnic, uint _dob, uint _treeN) public
    {
        userCount++;
        user[userCount] = person(_name, _adress, _cnic, _dob, _treeN);
    }

    function DetailsById(uint _id) public view returns(person memory)
    {
        return user[_id];
    }

    function getAllDetails() public view returns(person[] memory)
    {
    person[] memory getDetails = new person[](userCount);

    for(uint i = 0; i < userCount; i++)
    {
        getDetails[i] = user[i+1];
    }
    return getDetails;
    }
}