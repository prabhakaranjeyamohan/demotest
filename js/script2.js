remote = {"allowExternalMembers": "false", "whoCanJoin": "CAN_REQUEST_TO_JOIN"};
local = {"whoCanJoin": "CAN_REQUEST_TO_JOIN", "allowExternalMembers": "false"};

alert( _.isEqual(remote, local) );
alert("hi");