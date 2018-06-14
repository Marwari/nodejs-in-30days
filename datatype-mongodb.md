=> Datatype use in mongodb

it supports many datatypes. some of them are
- string : must be UTF-8 valid
- integer : numberical, can be 32 bit or 64 bit depending on server
- boolean : true/false
- double : floating values
- min/max keys : compare values against lowest and highest BSON elements.

- Arrays : use to store array or list or multiple values into one key.

- Timestamps : ctimestamp, to recorading add or modification
- Object : data type for embedded docs.
- Null : to store null values
- Symbol : identify string; reserved for languages that use a specific symbol values.\
- Date : Current time and date unix style
- Object ID : to store documents id.
- Binary data : for binary data
- Code : used to store js dtata
- Regular Expression : to store regex