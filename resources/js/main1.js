var barra1_responsive_part1 = document.getElementById('barra1_responsive_part1');
var barra1_responsive_part2 = document.getElementById('barra1_responsive_part2');
var barra2_responsive_part1 = document.getElementById('barra2_responsive_part1');
var barra2_responsive_part2 = document.getElementById('barra2_responsive_part2');

var form1 = document.getElementById('form1');

var form2_linea1 = document.getElementById('form2-linea1');
var form3_linea1 = document.getElementById('form3-linea1');
var form4_linea1 = document.getElementById('form4-linea1');
var form5_linea1 = document.getElementById('form5-linea1');

var form2_linea2 = document.getElementById('form2-linea2');
var form3_linea2 = document.getElementById('form3-linea2');
var form4_linea2 = document.getElementById('form4-linea2');
var form5_linea2 = document.getElementById('form5-linea2');
var form6_linea2 = document.getElementById('form6-linea2');
var form7_linea2 = document.getElementById('form7-linea2');

var next1 = document.getElementById('next1');

var next2_linea1 = document.getElementById('next2-linea1');
var next3_linea1 = document.getElementById('next3-linea1');
var next4_linea1 = document.getElementById('next4-linea1');

var next2_linea2 = document.getElementById('next2-linea2');
var next3_linea2 = document.getElementById('next3-linea2');
var next4_linea2 = document.getElementById('next4-linea2');
var next5_linea2 = document.getElementById('next5-linea2');
var next6_linea2 = document.getElementById('next6-linea2');


var back1_linea1 = document.getElementById('back1-linea1');
var back2_linea1 = document.getElementById('back2-linea1');
var back3_linea1 = document.getElementById('back3-linea1');
var back4_linea1 = document.getElementById('back4-linea1');


var back1_linea2 = document.getElementById('back1-linea2');
var back2_linea2 = document.getElementById('back2-linea2');
var back3_linea2 = document.getElementById('back3-linea2');
var back4_linea2 = document.getElementById('back4-linea2');
var back5_linea2 = document.getElementById('back5-linea2');
var back6_linea2 = document.getElementById('back6-linea2');

var progress1 = document.getElementById('progress1');
var progress2 = document.getElementById('progress2');

var step_img1 = document.getElementById('img-progress1');
var step_img2 = document.getElementById('img-progress2');

var step1_form1 = document.getElementById('step1-form1');
var step2_form1 = document.getElementById('step2-form1');
var step3_form1 = document.getElementById('step3-form1');
var step4_form1 = document.getElementById('step4-form1');
var step5_form1 = document.getElementById('step5-form1');

var step1_form2 = document.getElementById('step1-form2');
var step2_form2 = document.getElementById('step2-form2');
var step3_form2 = document.getElementById('step3-form2');
var step4_form2 = document.getElementById('step4-form2');
var step5_form2 = document.getElementById('step5-form2');
var step6_form2 = document.getElementById('step6-form2');
var step7_form2 = document.getElementById('step7-form2');

/* iconos */ 
var icon1_form1 = document.getElementsByClassName('icon1-form1');
var icon2_form1 = document.getElementsByClassName('icon2-form1');
var icon3_form1 = document.getElementsByClassName('icon3-form1');
var icon4_form1 = document.getElementsByClassName('icon4-form1');
var icon5_form1 = document.getElementsByClassName('icon5-form1');

var icon1_form2 = document.getElementsByClassName('icon1-form2');
var icon2_form2 = document.getElementsByClassName('icon2-form2');
var icon3_form2 = document.getElementsByClassName('icon3-form2');
var icon4_form2 = document.getElementsByClassName('icon4-form2');
var icon5_form2 = document.getElementsByClassName('icon5-form2');
var icon6_form2 = document.getElementsByClassName('icon6-form2');
var icon7_form2 = document.getElementsByClassName('icon7-form2');

var container = document.getElementsByClassName('container');

/* nexts de la linea 1 */


next2_linea1.onclick = function(){
    form2_linea1.style.display = 'none';
    form3_linea1.style.display = 'flex';
    progress1.style.width = '50%';
    progress1_part1.style.width = '80%';
    step2_form1.style.background = '#F130D5';
    step3_form1.style.border = '1px solid #F130D5';

    icon2_form1[0].style.stroke = "#FFF";;
    icon3_form1[0].style.stroke = "#F130D5";
    icon3_form1[1].style.stroke = "#F130D5";
    icon3_form1[2].style.stroke = "#F130D5";

    container[0].style.height = "889px";
    form3_linea1.style.height = "472px"
}

next3_linea1.onclick = function(){
    form3_linea1.style.display = 'none';
    form4_linea1.style.display = 'flex';
    progress1.style.width = '71.27%';
    step3_form1.style.background = '#F130D5';
    step4_form1.style.border = '1px solid #F130D5';

    icon3_form1[0].style.stroke = "#FFF";
    icon3_form1[1].style.stroke = "#FFF";
    icon3_form1[2].style.stroke = "#FFF";
    icon4_form1[0].style.stroke = "#F130D5";
    icon4_form1[1].style.stroke = "#F130D5";
    icon4_form1[2].style.stroke = "#F130D5";

    container[0].style.height = "798px";
}

next4_linea1.onclick = function(){
    form4_linea1.style.display = 'none';
    form5_linea1.style.display = 'flex';
    progress1.style.width = '91.34%';
    step4_form1.style.background = '#F130D5';
    step5_form1.style.border = '1px solid #F130D5';

    icon4_form1[0].style.stroke = "#FFF";
    icon4_form1[1].style.stroke = "#FFF";
    icon4_form1[2].style.stroke = "#FFF";
    icon5_form1[0].style.stroke = "#F130D5";
    icon5_form1[1].style.stroke = "#F130D5";
}

/* backs de la linea 1 */

back1_linea1.onclick = function(){
    form1.style.display = 'flex';
    form2_linea1.style.display = 'none';
    progress1.style.width = '9.13%';
    step1_form1.style.background = '#FFF';
    step2_form1.style.border = '1px solid #FFF';

    //codigo que funciona pero dudo si se puede mejorar
    icon1_form1[0].style.stroke = "#F130D5";
    icon1_form1[1].style.stroke = "#F130D5";
    icon2_form1[0].style.stroke = "#AAA";
}

back2_linea1.onclick = function(){
    form2_linea1.style.display = 'flex';
    form3_linea1.style.display = 'none';
    progress1.style.width = '29.1%';
    step2_form1.style.background = '#FFF';
    step3_form1.style.border = '1px solid #FFF';

    icon2_form1[0].style.stroke = "#F130D5";
    icon3_form1[0].style.stroke = "#AAA";
    icon3_form1[1].style.stroke = "#AAA";
    icon3_form1[2].style.stroke = "#AAA";

    container[0].style.height = "798px";
}

back3_linea1.onclick = function(){
    form3_linea1.style.display = 'flex';
    form4_linea1.style.display = 'none';
    progress1.style.width = '50%';
    step3_form1.style.background = '#FFF';
    step4_form1.style.border = '1px solid #FFF';

    icon3_form1[0].style.stroke = "#F130D5";
    icon3_form1[1].style.stroke = "#F130D5";
    icon3_form1[2].style.stroke = "#F130D5";
    icon4_form1[0].style.stroke = "#AAA";
    icon4_form1[1].style.stroke = "#AAA";
    icon4_form1[2].style.stroke = "#AAA";

    container[0].style.height = "889px";
}

back4_linea1.onclick = function(){
    form4_linea1.style.display = 'flex';
    form5_linea1.style.display = 'none';
    progress1.style.width = '71.27%';
    step4_form1.style.background = '#FFF';
    step5_form1.style.border = '1px solid #FFF';

    icon4_form1[0].style.stroke = "#F130D5";
    icon4_form1[1].style.stroke = "#F130D5";
    icon4_form1[2].style.stroke = "#F130D5";
    icon5_form1[0].style.stroke = "#AAA";
    icon5_form1[1].style.stroke = "#AAA";
}

/* nexts de la linea 2 */

next2_linea2.onclick = function(){
    form2_linea2.style.display = 'none';
    form3_linea2.style.display = 'flex';
    progress2.style.width = '36.2%';
    step2_form2.style.background = '#F130D5';
    step3_form2.style.border = '1px solid #F130D5';

    icon2_form2[0].style.stroke = "#FFF";
    icon2_form2[1].style.stroke = "#FFF";
    icon2_form2[2].style.stroke = "#FFF";
    icon2_form2[3].style.stroke = "#FFF";
    icon2_form2[4].style.stroke = "#FFF";
    icon3_form2[0].style.stroke = "#F130D5";
    icon3_form2[1].style.stroke = "#F130D5";
    icon3_form2[2].style.stroke = "#F130D5";

    container[0].style.height = "980px";
    form3_linea2.style.height = "561px"
}

var checkbox_form1 = document.getElementsByName('checkbox_form1');
var total = document.getElementById('total');

next3_linea2.onclick = function(){
    form3_linea2.style.display = 'none';
    form4_linea2.style.display = 'flex';
    progress2.style.width = '50.8%';
    step3_form2.style.background = '#F130D5';
    step4_form2.style.border = '1px solid #F130D5';

    icon3_form2[0].style.stroke = "#FFF";
    icon3_form2[1].style.stroke = "#FFF";
    icon3_form2[2].style.stroke = "#FFF";
    icon4_form2[0].style.stroke = "#F130D5";
    icon4_form2[1].style.stroke = "#F130D5";
    icon4_form2[2].style.stroke = "#F130D5";

    container[0].style.height = "798px";
    
    if(checkbox_form1[0].checked == true){
        total.innerHTML = '1'
    }
}

next4_linea2.onclick = function(){
    form4_linea2.style.display = 'none';
    form5_linea2.style.display = 'flex';
    progress2.style.width = '64.3%';
    step4_form2.style.background = '#F130D5';
    step5_form2.style.border = '1px solid #F130D5';

    icon4_form2[0].style.stroke = "#FFF";
    icon4_form2[1].style.stroke = "#FFF";
    icon4_form2[2].style.stroke = "#FFF";
    icon5_form2[0].style.stroke = "#F130D5";
    icon5_form2[1].style.stroke = "#F130D5";
    icon5_form2[2].style.stroke = "#F130D5";
    icon5_form2[3].style.stroke = "#F130D5";
}

next5_linea2.onclick = function(){
    form5_linea2.style.display = 'none';
    form6_linea2.style.display = 'flex';
    progress2.style.width = '78%';
    step5_form2.style.background = '#F130D5';
    step6_form2.style.border = '1px solid #F130D5';

    icon5_form2[0].style.stroke = "#FFF";
    icon5_form2[1].style.stroke = "#FFF";
    icon5_form2[2].style.stroke = "#FFF";
    icon5_form2[3].style.stroke = "#FFF";
    icon6_form2[0].style.stroke = "#F130D5";
    icon6_form2[1].style.stroke = "#F130D5";
    icon6_form2[2].style.stroke = "#F130D5";
}

next6_linea2.onclick = function(){
    form6_linea2.style.display = 'none';
    form7_linea2.style.display = 'flex';
    progress2.style.width = '91.3%';
    step6_form2.style.background = '#F130D5';
    step7_form2.style.border = '1px solid #F130D5';

    icon6_form2[0].style.stroke = "#FFF";
    icon6_form2[1].style.stroke = "#FFF";
    icon6_form2[2].style.stroke = "#FFF";
    icon7_form2[0].style.stroke = "#F130D5";
    icon7_form2[1].style.stroke = "#F130D5";
}

/* backs de la linea 2 */

back1_linea2.onclick = function(){
    form1.style.display = 'flex';
    form2_linea2.style.display = 'none';
    progress2.style.width = '9%';
    step1_form2.style.background = '#FFF';
    step2_form2.style.border = '1px solid #FFF';

    icon1_form2[0].style.stroke = "#F130D5";
    icon1_form2[1].style.stroke = "#F130D5";
    icon2_form2[0].style.stroke = "#AAA";
    icon2_form2[1].style.stroke = "#AAA";
    icon2_form2[2].style.stroke = "#AAA";
    icon2_form2[3].style.stroke = "#AAA";
    icon2_form2[4].style.stroke = "#AAA";
}

back2_linea2.onclick = function(){
    form2_linea2.style.display = 'flex';
    form3_linea2.style.display = 'none';
    progress2.style.width = '21.35%';
    step2_form2.style.background = '#FFF';
    step3_form2.style.border = '1px solid #FFF';

    icon3_form2[0].style.stroke = "#AAA";
    icon3_form2[1].style.stroke = "#AAA";
    icon3_form2[2].style.stroke = "#AAA";
    icon2_form2[0].style.stroke = "#F130D5";
    icon2_form2[1].style.stroke = "#F130D5";
    icon2_form2[2].style.stroke = "#F130D5";
    icon2_form2[3].style.stroke = "#F130D5";
    icon2_form2[4].style.stroke = "#F130D5";

    container[0].style.height = "798px";
}

back3_linea2.onclick = function(){
    form3_linea2.style.display = 'flex';
    form4_linea2.style.display = 'none';
    progress2.style.width = '36.2%';
    step3_form2.style.background = '#FFF';
    step4_form2.style.border = '1px solid #FFF';

    icon3_form2[0].style.stroke = "#F130D5";
    icon3_form2[1].style.stroke = "#F130D5";
    icon3_form2[2].style.stroke = "#F130D5";
    icon4_form2[0].style.stroke = "#AAA";
    icon4_form2[1].style.stroke = "#AAA";
    icon4_form2[2].style.stroke = "#AAA";

    container[0].style.height = "980px";
}

back4_linea2.onclick = function(){
    form4_linea2.style.display = 'flex';
    form5_linea2.style.display = 'none';
    progress2.style.width = '50.8%';
    step4_form2.style.background = '#FFF';
    step5_form2.style.border = '1px solid #FFF';

    icon4_form2[0].style.stroke = "#F130D5";
    icon4_form2[1].style.stroke = "#F130D5";
    icon4_form2[2].style.stroke = "#F130D5";
    icon5_form2[0].style.stroke = "#AAA";
    icon5_form2[1].style.stroke = "#AAA";
    icon5_form2[2].style.stroke = "#AAA";
    icon5_form2[3].style.stroke = "#AAA";
}

back5_linea2.onclick = function(){
    form5_linea2.style.display = 'flex';
    form6_linea2.style.display = 'none';
    progress2.style.width = '64.3%';
    step5_form2.style.background = '#FFF';
    step6_form2.style.border = '1px solid #FFF';

    icon5_form2[0].style.stroke = "#F130D5";
    icon5_form2[1].style.stroke = "#F130D5";
    icon5_form2[2].style.stroke = "#F130D5";
    icon5_form2[3].style.stroke = "#F130D5";
    icon6_form2[0].style.stroke = "#AAA";
    icon6_form2[1].style.stroke = "#AAA";
    icon6_form2[2].style.stroke = "#AAA";
}

back6_linea2.onclick = function(){
    form6_linea2.style.display = 'flex';
    form7_linea2.style.display = 'none';
    progress2.style.width = '78%';
    step6_form2.style.background = '#FFF';
    step7_form2.style.border = '1px solid #FFF';

    icon6_form2[0].style.stroke = "#F130D5";
    icon6_form2[1].style.stroke = "#F130D5";
    icon6_form2[2].style.stroke = "#F130D5";
    icon7_form2[0].style.stroke = "#AAA";
    icon7_form2[1].style.stroke = "#AAA";
}

/* ULTIMO FORMULARIO */

var lastform = document.getElementById('lastForm');

var btn_envairme1 = document.getElementById('btn-enviarme1');
var btn_envairme2 = document.getElementById('btn-enviarme2');

var sombra = document.getElementById('sombra');

btn_envairme1.onclick = function(){
    lastform.style.display = 'block';
    sombra.style.display = 'block';
}

btn_envairme2.onclick = function(){
    lastform.style.display = 'block';
    sombra.style.display = 'block';
}

sombra.onclick = function(){
    lastform.style.display = 'none';
    sombra.style.display = 'none';
}
