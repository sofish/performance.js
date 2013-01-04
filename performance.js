/* (c) MIT License sofish https://github.com/sofish */

// caculate performance timing of a web page
(function(win) {

  if(typeof win.performance === 'undefined') return;

  var Perf = {};

  Perf.refer = win.performance;

  // fire a custom event
  Perf.fireEvent = function(detail) {
    win.dispatchEvent(new CustomEvent('perf', {
        detail: detail
      , bubbles: true
      , cancelable: true
    }));
  };

  // calculate performance timing
  Perf.calculate = function(e) {

    var detail = {}, time, table;

    time = function(end, start) {
      return this[end] - this[start];
    };

    table = [
      [ 'lookup'        , ['requestStart', 'navigationStart']                 ],
      [ 'waiting'       , ['responseStart', 'requestStart']                   ],
      [ 'receiving'     , ['responseEnd', 'responseStart']                    ],
      [ 'parsing'       , ['domComplete', 'domLoading']                       ],
      [ 'contentLoaded' , ['domContentLoadedEventStart', 'navigationStart']   ],
      [ 'pageLoaded'    , ['loadEventStart', 'navigationStart']               ]
    ];

    table.forEach(function(item) {
      detail[item[0]] = time.apply(Perf.refer.timing, item[1]);
    })

    Perf.fireEvent(detail);
  }

  win.addEventListener('load', Perf.calculate);

})(window);
