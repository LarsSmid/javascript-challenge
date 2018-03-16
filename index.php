<!DOCTYPE html>
<html>
<title>De Smederij</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<body ng-app="myApp">
<div ng-view></div>
<!-- Navbar (sit on top) -->
<div class="w3-top">
  <div class="w3-bar w3-white w3-wide w3-padding w3-card">
    <a href="#home" class="w3-bar-item w3-button">De Smederij</a>
    <!-- Float links to the right. Hide them on small screens -->
    <div class="w3-right w3-hide-small">
      <a href="#Smidjes" class="w3-bar-item w3-button">Smidjes</a>
    </div>
  </div>
</div>

<!-- Header -->
<header class="w3-display-container w3-content w3-wide" style="max-width:1500px;" id="home">
	<div class="cycle-slideshow" style="z-index:0;">
		<img class="w3-image" src="http://smidjes.com/images/silverkamp.jpg" width="1500" height="800">
		<img class="w3-image" src="http://smidjes.com/images/background_beethovenlaan.jpg" width="1500" height="800">
	</div>
  <div class="w3-display-middle w3-margin-top w3-center" style="width:1000px;">
    <h1 class="w3-text-white" style="font-size: 45px; font-family: cursive; text-shadow: 0.1em 0.1em 0.05em #333;">Wij gaan verhuizen!</h1>
	<p class="w3-text-white" style="font-size: 60px; font-family: cursive; text-shadow: 0.1em 0.1em 0.05em #333;" id="countdown"></p>
  </div>
</header>

<!-- Page content -->
<div class="w3-content w3-padding" style="max-width:1564px">
  <!-- About Section -->
  <div class="w3-container w3-padding-32" id="Smidjes">
    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">De smidjes</h3>
    <p>Wij smidjes zijn een moderne familie die genieten van het leven. Alles eruit halen wat erin zit wordt hier altijd gezegd. Dus kortom een familie om gelukkig van te worden.</p>
  </div>

  <div class="w3-row-padding w3-grayscale">
    <div class="w3-col l3 m6 w3-margin-bottom">
      <img src="http://smidjes.com/images/jesse.jpg" alt="jesse" style="width:100%">
      <h3>Jesse Smid</h3>
      <p class="w3-opacity">14 Jaar</p>
      <p>3e jaar VMBO-T. <br>Volleyballer bij V.V.Vollido.</p>
      <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <img src="http://smidjes.com/images/lars.jpg" alt="lars" style="width:100%">
      <h3>Lars Smid</h3>
      <p class="w3-opacity">17 Jaar</p>
      <p>2e jaar applicatieontwikkelaar.<br>Volleyballer bij V.V.Vollido.</p>
      <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <img src="http://smidjes.com/images/peter.jpg" alt="peter" style="width:100%">
      <h3>Peter Smid</h3>
      <p class="w3-opacity">51 jaar</p>
      <p>Servicemanager bij <a href="https://www.logius.nl/">Logius</a><br><br></p>
      <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
    <div class="w3-col l3 m6 w3-margin-bottom">
      <img src="http://smidjes.com/images/ellen.jpg" alt="ellen" style="width:100%">
      <h3>Ellen Smid</h3>
      <p class="w3-opacity">53 jaar</p>
      <p>Overledenenverzorgster bij <a href="http://www.bozua.nl/">Baan overledenenzorg</a></p>
      <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
    </div>
  </div>
</div>
<!-- End page content -->

<!-- Google Map -->
<div class="w3-grayscale";"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.2571245855315!2d4.6066337162361695!3d51.81973327968767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c42e5bf2c4f521%3A0x77d536697ec46e88!2sBeethovenlaan+242%2C+3335+BC+Zwijndrecht!5e0!3m2!1snl!2snl!4v1517663495826" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe></div>

<!-- Footer -->
<footer class="w3-center w3-black w3-padding-16">
  <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">Lars Smid</a></p>
</footer>

<script>
// Set the date we're counting down to
var countDownDate = new Date("Mar 1, 2018 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
</script>
<script src="js/angular.js"></script>
<script src="js/angular-route.js"></script>
<script src="js/angular-sanitize.js"></script>
<script src="http://smidjes.com/js/jquery-3.2.1.js"></script>
<script src="http://malsup.github.io/min/jquery.cycle2.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>
