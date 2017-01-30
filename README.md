# vivify

A simple tool to set/get nested objects through a clean API.

---

### 1) use case

Before describing how to install and use vivify, we need a small introduction for the best usage: you need to retrieve or set a key deep inside an object.

The purpose of this tool is helping you avoiding:

    // get
    var readValue = object['key1']['key2']..['keyN'];

    var readValue = object.key1.key2...keyN

    // set
    object.key1 = {
        ...
        key2: {
            ...
            key3: {
                ..
                keyN: myValue
            }
        }
    };


A similar approach will force you to check wether the keys/objects you're looking for are existing or not, and provide a valid solution if necessary. Vivify will try to solve this "problem".

### 2) installation

Simply run:

    npm install -g vivifyjs

### 3) usage

Set a value:

    var vivify = require('vivify');
    // import vivify from 'vivify';

    var guy = vivify.set('job.position.salary', 25000);

this will create an object with this structure

    {
        job: {
            position: {
                salary: 25000
            }
        }
    }

Read a value:

    var position = vivify.get('job.position', guy);

And guess what? you will have this object in return:

    {
        position: {
            salary: 25000
        }
    }

Vivify can be used on already existing objects while setting values, but will create a new object if it's not passed as parameter. So, if you want to set a value inside the location object of window, you can simply do:

    vivify.set('location.newKey', newValue, window);

#### 4) about

Vivify is written in Javascript by [Marco Stagni](http://marcostagni.com), and it's licensed under [BSD-3-Clause](https://en.wikipedia.org/wiki/BSD_licenses#3-clause_license_.28.22Revised_BSD_License.22.2C_.22New_BSD_License.22.2C_or_.22Modified_BSD_License.22.29).
