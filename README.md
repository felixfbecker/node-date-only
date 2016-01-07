
Useful when you get date-only values from you DB and want to have them as Date objects in your model, but stringify to YYYY-MM-DD for your JSON API consumers.

```js
const DateOnly = require('date-only');

const dateOnly = new DateOnly();
console.log(JSON.stringify(dateOnly)); // "2016-01-07"
console.log(dateOnly.toISOString()); // 2016-01-07

// pass DateOnly instance to Date to convert to normal date
const normalDate = new Date(dateOnly);
console.log(JSON.stringify(normalDate)); // 2016-01-07T12:34:13.769Z

// pass normal date to DateOnly to convert to DateOnly
dateOnly = new DateOnly(normalDate);
console.log(JSON.stringify(dateOnly)); // "2016-01-07"
```
