# Random

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
Licensed under the MIT license.
