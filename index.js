var submit = $('.btn');
var schedule = $('.schedule');

submit.on("click", createSchedule);

function createSchedule() {
  var one = $('.pd1').val();
  var two = $('.pd2').val();
  var three = $('.pd3').val();
  var four = $('.pd4').val();
  var five = $('.pd5').val();
  var six = $('.pd6').val();
  var seven = $('.pd7').val();
  var eight = $('.pd8').val();
  var start1 = $('.time1').val();
  var start2 = $('.time2').val();
  var start3 = $('.time3').val();
  var start4 = $('.time4').val();
  var start5 = $('.time5').val();
  var start6 = $('.time6').val();
  var start7 = $('.time7').val();
  var start8 = $('.time8').val();
  var end1 = $('.1time').val();
  var end2 = $('.2time').val();
  var end3 = $('.3time').val();
  var end4 = $('.4time').val();
  var end5 = $('.5time').val();
  var end6 = $('.6time').val();
  var end7 = $('.7time').val();
  var end8 = $('.8time').val();

schedule.append(`
<p class="final">You have ${one} from ${start1} to ${end1}.</p>
<p class="final">You have ${two} from ${start2} to ${end2}.</p>
<p class="final">You have ${three} from ${start3} to ${end3}.</p>
<p class="final">You have ${four} from ${start4} to ${end4}.</p>
<p class="final">You have ${five} from ${start5} to ${end5}.</p>
<p class="final">You have ${six} from ${start6} to ${end6}.</p>
<p class="final">You have ${seven} from ${start7} to ${end7}.</p>
<p class="final">You have ${eight} from ${start8} to ${end8}.</p>
`);

$('.pd1').val("");
$('.pd2').val("");
$('.pd3').val("");
$('.pd4').val("");
$('.pd5').val("");
$('.pd6').val("");
$('.pd7').val("");
$('.pd8').val("");
$('.time1').val("");
$('.time2').val("");
$('.time3').val("");
$('.time4').val("");
$('.time5').val("");
$('.time6').val("");
$('.time7').val("");
$('.time8').val("");
$('.1time').val("");
$('.2time').val("");
$('.3time').val("");
$('.4time').val("");
$('.5time').val("");
$('.6time').val("");
$('.7time').val("");
$('.8time').val("");
}
