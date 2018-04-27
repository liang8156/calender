function select_value() {
    year = Number(document.getElementById("selectYear").value)
    month = Number(document.getElementById("selectMonth").value)
    calendar(year, month);
}

function drawCal(inc) {
    month += inc;
    if (month == 0) {
        month = 12;
        year--;
    }
    else if (month == 13) {
        month = 1;
        year++;
    }
    calendar(year, month);
}

function calendar(yr, mth) {

    var dt = new Date(yr, mth - 1, 1);
    var wd = dt.getDay();               //判斷是星期幾 於39行用來畫月曆


    cal = '<table>';
    cal += '<tr class=calendarTitle>';
    cal += '<th  colspan=5>' + yr + '年' + mth + '月' +
        '<th onclick="drawCal(-1)">∧<th onclick="drawCal(1)">∨';
    cal += '</tr>';
    cal += '<tr>';
    cal += '<th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th>'
    cal += '</tr>';

    mth--;
    cal += '<tr>';
    for (; wd > 0; wd--) {
        cal += '<td/>'; //用來補月數剛開始的空格
    }
    for (i = 1; i < 32;) {
        dt = new Date(yr, mth, i);
        wd = dt.getDay();
        if (dt.getMonth() != mth) {
            //判斷月數 若不符合跳出(例如4/31會變成5/1 此時4!=5 就會跳出) 
            break;
        }
        if (wd == 0) {
            cal += '<tr>';
        }
        cal += '<td>' + i + '</td>';
        i++;
        if (wd == 6) {
            cal += '</tr>';        //wd==0 和wd==6之間由<tr></tr>刮起來 由此循環
        }
    }
    cal += '</tr>';
    cal += '</table>';
    document.getElementById('calendar').innerHTML = cal;
}

a = '<select  id="selectYear" onchange="select_value();">'
for (i = 2000; i < 2030; i++) {
    a += '<option value="' + i + '">' + i + '</option>';
}
a += '</select>'

a += '<select  id="selectMonth" onchange="select_value();">'
for (i = 1; i <= 12; i++) {
    a += '<option value="' + i + '">' + i + '</option>';
}
a += '</select>'

document.getElementById('selectYM').innerHTML = a;
var td = new Date();           //初始值,剛加入未調的得到的初始日期
var year = td.getFullYear();
var month = td.getMonth() + 1; //因為1月時是從0開始算 故給值時月數+1
calendar(year, month);


