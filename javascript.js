var forbidden = [];
function submit() {
  var numbs = range(0, 10, 1);
  var numbers = [];
  var ans = get(['answer'], 0, ['.value'], 0).toString();
  for (x=0;x<ans.length;x++) {
    for (y=0;y<numbs.length;y++) {
      if (ans[x] === numbs[y]) {
        if (numbs[y] === "1") {
          if (ans[x + 1] === "0") {
            numbers.push("10");
            x++;
            break;
          }
        }
        numbers.push(ans[x]);
        break;
      }
    }
  }
  numbers = gr(numbers).join('');
  var all = gr(get(['one', 'two', 'three', 'four'], [0, 0, 0, 0], ['.value', '.value', '.value', '.value'], 1)).join('');
  if (all === numbers) {
    if (eval(ans).toString() === "24") {
      set(['answer'], 0, ['.value'], [''], 0);
      forbid();
    }
  }
}

function gr(x) {
  return x.sort(function(a, b) {return b - a;});
}
function reload() {
  var not_found = true;
  while (not_found) {
    var randomnum = [];
    for (x=0;x<4;x++) {
      randomnum.push(random(0, 10));
    }
    if (forbidden.indexOf(gr(randomnum).join('')) == -1) {
      set(['one', 'two', 'three', 'four'], [0, 0, 0, 0], ['.value', '.value', '.value', '.value'], [randomnum[0], randomnum[1], randomnum[2], randomnum[3]], 1);
      not_found = false;
    }
  }
}
function forbid() {
  var cur = gr(get(['one', 'two', 'three', 'four'], [0, 0, 0, 0], ['.value', '.value', '.value', '.value'], 1)).join('')
  console.log("Forbidded: " + cur);
  forbidden.push(cur);
  reload();
}
