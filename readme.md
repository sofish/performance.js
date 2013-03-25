## Page Performance

### 1. Usage:

Install the `performance.js` file in the page, and listen to the `perf` event:

```html
<script src="./performance.js"></script>
<script>
window.addEventListener('perf', function(perf) {
  console.log(perf.detail);
})
</script>
```

### 2. the `perf.detail` object

#### 2.1 properties

<table><tbody>
<tr><th>lookup</th><td>dns, domain lookup for the source</td></tr>
<tr><th>waiting</th><td>network latency, waiting before page request start</td></tr>
<tr><th>receiving</th><td>period between request start and request end</td></tr>
<tr><th>parsing</th><td>dom parsing, from dom loading to dom complete</td></tr>
<tr><th>contentLoaded</th><td>we used to call it dom ready </td></tr>
<tr><th>pageLoaded</th><td>from user agent start a lookup to load event start</td></tr>
</tbody></table>

#### 2.2 code to calculate out the properties

```js
[ 'lookup'        , ['requestStart', 'navigationStart']],
[ 'waiting'       , ['responseStart', 'requestStart']],
[ 'receiving'     , ['responseEnd', 'responseStart']],
[ 'parsing'       , ['domComplete', 'domLoading']],
[ 'contentLoaded' , ['domContentLoadedEventStart', 'navigationStart']],
[ 'pageLoaded'    , ['loadEventStart', 'navigationStart']] 
```

#### 2.3 performance life cycle chart

![performance life cycle chart](http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/NavigationTiming/timing-overview.png)

### 3. Testcase

run the `testcase.html` file, please!

### 4. License

(c) MIT License

