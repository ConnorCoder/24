var forbidden = [];
function submit() {
  var numbs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var numbers = [];
  var ans = document.getElementById('answer').value;
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
  var all = [];
  all.push(document.getElementsByClassName('one')[0].value);
  all.push(document.getElementsByClassName('two')[0].value);
  all.push(document.getElementsByClassName('three')[0].value);
  all.push(document.getElementsByClassName('four')[0].value);
  all = gr(all).join('');
  if (all === numbers) {
    if (eval(document.getElementById('answer').value) === 24) {
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
    var random = [];
    for (x=0;x<4;x++) {
      random.push(Math.floor(Math.random() * 11));
    }
    if (forbidden.indexOf(gr(random).join('')) == -1) {
      document.getElementsByClassName('one')[0].value = random[0];
      document.getElementsByClassName('two')[0].value = random[1];
      document.getElementsByClassName('three')[0].value = random[2];
      document.getElementsByClassName('four')[0].value = random[3];
      not_found = false;
    }
  }
}
function forbid() {
  var cur = [];
  cur.push(document.getElementsByClassName('one')[0].value);
  cur.push(document.getElementsByClassName('two')[0].value);
  cur.push(document.getElementsByClassName('three')[0].value);
  cur.push(document.getElementsByClassName('four')[0].value);
  cur = gr(cur).join('');
  console.log("Forbidded: " + cur);
  forbidden.push(cur);
  reload();
}
