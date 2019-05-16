var forbidden = [];
function submit() {
  var numbs = range(0, 10);
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
    if (eval(get(['answer'], 0, ['.value'], 0).toString()).toString() === "24") {
      document.getElementById('answer').value = "";
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
      document.getElementsByClassName('one')[0].value = randomnum[0];
      document.getElementsByClassName('two')[0].value = randomnum[1];
      document.getElementsByClassName('three')[0].value = randomnum[2];
      document.getElementsByClassName('four')[0].value = randomnum[3];
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
