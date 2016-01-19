# Install

```
npm i -S error-throwing-middleware
```

# Use

```javascript
var thrower = require('error-throwing-middleware');
app.use(thrower);
```
Now you randomly get errors! :)

You can also change the frequency (defaults to ~60% of the time.)

```javascript
var thrower = require('error-throwing-middleware');
app.use(thrower.frequency(0.9)); // throw ~90% of the time.
```
