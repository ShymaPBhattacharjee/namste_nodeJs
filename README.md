# namste_nodeJs
NodeJs projects 

Episode: 05 : 

    require("./path");

    All the code of the module is wrapped inside the IIFE 

    IIFE : Immediately invoked function expression 

     function() {

        // All the codes run here 
    })()

Advantage :

    1. When we add require any module, nodeJS immediately invokes the code.
    2. Privacy - keep vriables and functions safe.


Episode 07 :

 1. Crypto is a library For generating the key
 2. PBKDF 2 means Password based derivative function
 3. Arguments are : password -> keyname, salt -> encryption, 50000 -> iteration length i.e the bigger it, the tougher, 50 -> keylength, sha512 -> keylength.
 4. Crypto is a CPU intensive job.

Episode 08: 

Episode - 09 : AZbout event loop internals :

Episode - 10 : about thread pools :

Episode 13: About creating a server and onnect to mongoDb
    
    find in mongoDb:
        -  find returns cursor in mongoDb.
        - We should always use toArray method with the find method to get human readable JSON array format.
        - As find method returns cursor, we can method chain like promise chaining.



