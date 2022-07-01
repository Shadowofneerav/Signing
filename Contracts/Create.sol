// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract signed{

    struct doc{
        string contenu;
        bytes32 ha;
        address initiator;
    }

    address private owner;
    mapping(address=>doc) docs;
    mapping(address=>address) parties;

    event tosign(address indexed initiator,address indexed cossigne);

    modifier isOwner(){
        require(msg.sender==owner,"Caller is not owner");
        _;
    }
    constructor() {
        owner=msg.sender;
    }
    
    function depot(string memory _text,address _dest) public{
        doc memory docum;
        docum.contenu=_text;
        docum.ha=sha256(bytes(_text));
        docum.initiator=msg.sender;
        docs[_dest]=docum;
    }
    function isdepot(address _coassignee) public view returns(string memory){
        require(docs[_coassignee].initiator!=address(0));
        return docs[_coassignee].contenu;
    }

    function signit() public{
        if(docs[msg.sender].initiator!=address(0))
        {
            doc memory docum;
            docum=docs[msg.sender];
            parties[docum.initiator]=msg.sender;
        }
    }
    function checkinitiator(address _init) public view returns(bool){
        if(parties[_init]==address(0)) return false;
        if(docs[parties[_init]].initiator!=_init) return false;
        return true;
    }
    function checkcosignee(address _coassignee) public view returns (bool)
    {
        if(docs[_coassignee].initiator==address(0)) return false;
        if(parties[docs[_coassignee].initiator]!=_coassignee) return false;
        return true;
    }
}   