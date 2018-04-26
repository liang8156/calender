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
    var td = new Date();
    var today = new Date(td.getFullYear(), td.getMonth(), td.getDate());
    var dt = new Date(yr, mth - 1, 1);
    var wd = dt.getDay(); //week day

    s = '<table>';
    s += '<tr>';
    s += '<th onclick="drawCal(-1)"><<<th colspan=5>'
        + yr + '年' + mth + '月<th onclick="drawCal(1)">>>';
    s += '</tr>';
    s += '<tr>';
    s += '<th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th>'
    s += '</tr>';

    mth--;
    s += '<tr>';
    for (i = 1; i < 32;) {
        dt = new Date(yr, mth, i);
        wd = dt.getDay();

        if (wd == 0) {
            s += '<tr>';
        }
        s += '<td>' + i + '</td>';
        i++;
        if (wd == 6) {
            s += '</tr>';
        }
    }
    s += '</tr>';
    s += '</table>';
    document.getElementById('calendar').innerHTML = s;
}


var td = new Date();
var year = td.getFullYear();
var month = td.getMonth() + 1;
calendar(year, month);

