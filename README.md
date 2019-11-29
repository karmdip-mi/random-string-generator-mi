# Random String Generator By Mindinventory

Javascript random string generator, it's also customize with prefix and suffix as per defined.

# Install                         

**By npm:**
```
npm install random-string-generator-mi --save
```

# Documentation
> Generate Random String
```
generateString('prefix','suffix')
```


> Decode your random string
```
decodeUniqueString('yourRandomString')
```

# Example

> Generate Random String 

**Use with node modules:**
```
var randStr = require('random-string-generator-mi');

console.log(randStr.generateString('prefix','suffix'))  

// output 
'prefix-pt56xf-suffix'

```

**Use with node modules:**
```
var randStr = require('random-string-generator-mi');

console.log(decodeUniqueString('prefix-pt56xf-suffix'))


// output
[ 
    { prefix: 'prefix' },
    { timestamp: 1560605523 },
    { suffix: 'suffix' } 
]

```

# Contributing

Instead of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

# License
MIT License

Copyright (c) 2019 Mindinventory

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
