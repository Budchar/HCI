window.onload = function () {
    for (var i = 1; i < 8; i++) {
        document.querySelector("#content" + i).style.display = "none";
    }
}

function showcontent(num) {
    for (var i = 1; i < 8; i++) {
        if (i == num) {
            continue;
        }
        document.querySelector("#content" + i).style.display = "none";
    }
    document.querySelector("#content" + num).style.display = "block";
}

function myprint() {
    var name = document.getElementById("lname").value + " " + document.getElementById("mname").value + " " + document.getElementById("fname").value;
    var adrs = document.getElementById("address").value;
    var call_no = document.getElementById("call").value;
    var obj = document.getElementById("career").value;
    var mail = document.getElementById("mail_id").value;
    document.getElementById("out_name").innerText = name;
    document.getElementById("out_call").innerText = call_no;
    document.getElementById("out_career").innerText = obj;
    document.getElementById("out_adrs").innerText = adrs;
    document.getElementById('out_mail').innerText = mail;

    function ul_print(ul) {
        var value = document.getElementById(ul);
        var value_copy = value.cloneNode(true);
        var value_input = value_copy.getElementsByTagName('input');
        var value_li = value_copy.getElementsByTagName('li');
        var length = value_input.length;
        for (var i = length - 1; i > -1; i--) {
            value_li[i].innerHTML = value_input[i].value;
        }
        document.getElementById('out_' + ul + '_ul').innerHTML = value_copy.innerHTML;
    }

    ul_print("edu");
    ul_print("exp");
    ul_print("etc");

    function table_print(table) {
        var skill = document.getElementById(table);
        var skill_copy = skill.cloneNode(true);
        var skill_input = skill_copy.getElementsByTagName('input');
        var skill_td = skill_copy.getElementsByTagName('td');
        for (var i = skill_input.length - 1; i > -1; i--) {
            skill_td[i].innerHTML = skill_input[i].value;
        }
        document.getElementById("out_skill_table").innerHTML = skill_copy.innerHTML;
    }
    table_print("Skill_table");
}

var loadImg = function (event) {
    var output = document.getElementById('out_image');
    output.src = URL.createObjectURL(event.target.files[0]);
}

var Add = {
    Add_li_edu: function () {
        var li = document.createElement('li');
        li.innerHTML = '<input type="text">';
        document.getElementById('edu').appendChild(li);
    },
    Add_li_exp: function () {
        var li = document.createElement('li');
        li.innerHTML = '<input type="text">';
        document.getElementById('exp').appendChild(li);
    },
    Add_li_etc: function () {
        var li = document.createElement('li');
        li.innerHTML = '<input type="text">';
        document.getElementById('etc').appendChild(li);
    },
    Add_tr: function () {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        td1.innerHTML = '<input type="text">'
        td2.innerHTML = '<input type="text">'
        td3.innerHTML = '<input type="text">'
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        document.getElementById('Skill_table_body').appendChild(tr);
    },
}

var Change_font = {
    Title: function () {
        var option_title = document.getElementById('font_title').value;
        change_title = function (font) {
            document.querySelector('#output>h3').style.fontFamily = font;
            var h4 = document.querySelectorAll('#output>div>h4');
            for (var i = 0; i < h4.length; i++) {
                h4[i].style.fontFamily = font;
            }
        };

        if (option_title === '1') {
            change_title("Courier New");
        } else if (option_title === '2') {
            change_title("Lucida Console");
        } else if (option_title === '3') {
            change_title("impact");
        } else(change_title("Time New Roman"))
    },

    Content: function () {
        var option_content = document.getElementById('font_content').value;
        change_content = function (font) {
            document.querySelector('#out_NC').style.fontFamily = font;
            document.querySelector('#out_career').style.fontFamily = font;
            document.querySelector('#out_edu_ul').style.fontFamily = font;
            document.querySelector('#out_skill_table').style.fontFamily = font;
            document.querySelector('#out_etc_ul').style.fontFamily = font;

        };

        if (option_content === '1') {
            change_content("Times New Roman");
        } else if (option_content === '2') {
            change_content("arial");
        } else if (option_content === '3') {
            change_content("Georgia");
        }
    },
}

var Change_size = {
    Title: function () {
        var option_title = document.getElementById('size_title').value;
        change_size = function (font) {
            document.querySelector('#output>h3').style.fontSize = font;
        };

        if (option_title == "1") {
            change_size('24px');
        } else if (option_title == '2') {
            change_size('28px');
        } else if (option_title == '3') {
            change_size('36px');
        }
    },

    Subtitle: function () {
        var option_title = document.getElementById('size_subtitle').value;
        change_size = function (font) {
            var h4 = document.querySelectorAll('#output>div>h4');
            for (var i = 0; i < h4.length; i++) {
                h4[i].style.fontSize = font;
            }
        };

        if (option_title === '1') {
            change_size("16px");
        } else if (option_title === '2') {
            change_size("20px");
        } else if (option_title === '3') {
            change_size("28px");
        }
    },

    Content: function () {
        var option_content = document.getElementById('size_content').value;
        change_content = function (font) {
            document.querySelector('#out_NC').style.fontSize = font;
            document.querySelector('#out_career').style.fontSize = font;
            document.querySelector('#out_edu_ul').style.fontSize = font;
            document.querySelector('#out_exp_ul').style.fontSize = font;
            document.querySelector('#out_skill_table').style.fontSize = font;
            document.querySelector('#out_etc_ul').style.fontSize = font;
        };

        if (option_content === '1') {
            change_content("12px");
        } else if (option_content === '2') {
            change_content("16px");
        } else if (option_content === '3') {
            change_content("20px");
        }
    },
}

var Change_bgc = {
    bgc: function () {
        var option = document.getElementById('bgc');
        var value = option.value;
        var output = document.querySelector("#output");

        if (value == 1) {
            output.style.backgroundImage = "";
            output.style.backgroundColor = "#ffccff";
        } else if (value == 2) {
            output.style.backgroundColor = "transparent";
            output.style.opacity = "1";
            output.style.backgroundImage = "url('oDDUgi.jpg')";
        } else {
            alert('bgc_problem');
        };
    },
}