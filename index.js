$(function() {
    //creating uploaded img on canvas from
    var imgInput = document.getElementById('imgInput');
    imgInput.addEventListener('change', handleImage, false);
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    function handleImage(e) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var img = new Image();
            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    //filter buttons functions
    var $brightness = $('#brightnessbtn');
    var $noise = $('#noisebtn');
    var $sepia = $('#sepiabtn');
    var $contrast = $('#contrastbtn');
    var $color = $('#colorbtn');

    var $vintage = $('#vintagebtn');
    var $lomo = $('#lomobtn');
    var $emboss = $('#embossbtn');
    var $tiltshift = $('#tiltshiftbtn');
    var $radialblur = $('#radialblurbtn');
    var $edgeenhance = $('#edgeenhancebtn');

    var $posterize = $('#posterizebtn');
    var $clarity = $('#claritybtn');
    var $orangepeel = $('#orangepeelbtn');
    var $sincity = $('#sincitybtn');
    var $sunrise = $('#sunrisebtn');
    var $crossprocess = $('#crossprocessbtn');

    var $hazydays = $('#hazydaysbtn');
    var $love = $('#lovebtn');
    var $grungy = $('#grungybtn');
    var $jarques = $('#jarquesbtn');
    var $pinhole = $('#pinholebtn');
    var $oldboot = $('#oldbootbtn');
    var $glowingsun = $('#glowingsunbtn');

    var $hdr = $('#hdrbtn');
    var $oldpaper = $('#oldpaperbtn');
    var $pleasant = $('#pleasantbtn');

    /* Creating custom filters */
    Caman.Filter.register("oldpaper", function() {
        this.pinhole();
        this.noise(10);
        this.orangePeel();
        this.render();
    });

    Caman.Filter.register("pleasant", function() {
        this.colorize(60, 105, 218, 10);
        this.contrast(10);
        this.sunrise();
        this.hazyDays();
        this.render();
    });

    /* In built filters */
    $brightness.on('click', function() {
        Caman('#canvas', function() {
            this.brightness(30).render();
        });
    });

    $noise.on('click', function() {
        Caman('#canvas', function() {
            this.noise(10).render();
        });
    });

    $contrast.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.contrast(10).render();
        });
    });

    $sepia.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.sepia(20).render();
        });
    });

    $color.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.colorize(60, 105, 218, 10).render();
        });
    });

    $vintage.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.vintage().render();
        });
    });

    $lomo.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.lomo().render();
        });
    });

    $emboss.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.emboss().render();
        });
    });

    $tiltshift.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.tiltShift({
                angle: 90,
                focusWidth: 600
            }).render();
        });
    });

    $radialblur.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.radialBlur().render();
        });
    });

    $edgeenhance.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.edgeEnhance().render();
        });
    });

    $posterize.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.posterize(8, 8).render();
        });
    });

    $clarity.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.clarity().render();
        });
    });

    $orangepeel.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.orangePeel().render();
        });
    });

    $sincity.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.sinCity().render();
        });
    });

    $sunrise.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.sunrise().render();
        });
    });

    $crossprocess.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.crossProcess().render();
        });
    });

    $love.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.love().render();
        });
    });

    $grungy.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.grungy().render();
        });
    });

    $jarques.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.jarques().render();
        });
    });

    $pinhole.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.pinhole().render();
        });
    });

    $oldboot.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.oldBoot().render();
        });
    });

    $glowingsun.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.glowingSun().render();
        });
    });

    $hazydays.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.hazyDays().render();
        });
    });

    /* Calling multiple filters inside same function */
    $hdr.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.contrast(10);
            this.contrast(10);
            this.jarques();
            this.render();
        });
    });

    /* Custom filters that we created */
    $oldpaper.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.oldpaper();
            this.render();
        });
    });

    $pleasant.on('click', function(img) {
        Caman('#canvas', img, function() {
            this.pleasant();
            this.render();
        });
    });

    //slider functions

    var $br = $('#br');
    var $vb = $('#vb');
    var $h = $('#h');
    var $gam = $('#gam');
    var $cli = $('#cli');
    var $ct = $('#ct');
    var $saturate = $('#saturate');
    var $ex = $('#ex');
    var $sep = $('#sep');
    var $n = $('#n');

    $br.on('change', function(img) {
        var brval = parseInt($('#br').val());
        brFunction();
        Caman('#canvas', img, function() {
            this.brightness(brval);
            this.render();
        });
    });

    function brFunction() {
        var x = document.getElementById("br").value;
        document.getElementById("br-label").innerHTML = "Brightness:" + x;
    }

    $vb.on('change', function(img) {
        var vbval = parseInt($('#vb').val());
        vbFunction();
        Caman('#canvas', img, function() {
            this.vibrance(vbval);
            this.render();
        });
    });

    function vbFunction() {
        var x = document.getElementById("vb").value;
        document.getElementById("vb-label").innerHTML = "Vibrance:" + x;
    }

    $h.on('change', function(img) {
        var hval = parseInt($('#h').val());
        hFunction();
        Caman('#canvas', img, function() {
            this.hue(hval);
            this.render();
        });
    });

    function hFunction() {
        var x = document.getElementById("h").value;
        document.getElementById("h-label").innerHTML = "Hue:" + x;
    }

    $gam.on('change', function(img) {
        var gamval = parseInt($('#gam').val());
        gamFunction();
        Caman('#canvas', img, function() {
            this.gamma(gamval);
            this.render();
        });
    });

    function gamFunction() {
        var x = document.getElementById("gam").value;
        document.getElementById("gam-label").innerHTML = "Gamma:" + x;
    }

    $cli.on('change', function(img) {
        var clival = parseInt($('#cli').val());
        cliFunction();
        Caman('#canvas', img, function() {
            this.clip(clival);
            this.render();
        });
    });

    function cliFunction() {
        var x = document.getElementById("cli").value;
        document.getElementById("cli-label").innerHTML = "Clip:" + x;
    }

    $ct.on('change', function(img) {
        var ctval = parseInt($('#ct').val());
        ctFunction();
        Caman('#canvas', img, function() {
            this.contrast(ctval);
            this.render();
        });
    });

    function ctFunction() {
        var x = document.getElementById("ct").value;
        document.getElementById("ct-label").innerHTML = "Contrast:" + x;
    }

    $saturate.on('change', function(img) {
        var saturateval = parseInt($('#saturate').val());
        saturateFunction();
        Caman('#canvas', img, function() {
            this.saturation(saturateval);
            this.render();
        });
    });

    function saturateFunction() {
        var x = document.getElementById("saturate").value;
        document.getElementById("saturate-label").innerHTML = "Saturation:" + x;
    }

    $ex.on('change', function(img) {
        var exval = parseInt($('#ex').val());
        exFunction();
        Caman('#canvas', img, function() {
            this.exposure(exval);
            this.render();
        });
    });

    function exFunction() {
        var x = document.getElementById("ex").value;
        document.getElementById("ex-label").innerHTML = "Exposure:" + x;
    }

    $sep.on('change', function(img) {
        var sepval = parseInt($('#sep').val());
        sepFunction();
        Caman('#canvas', img, function() {
            this.sepia(sepval);
            this.render();
        });
    });

    function sepFunction() {
        var x = document.getElementById("sep").value;
        document.getElementById("sep-label").innerHTML = "Sepia:" + x;
    }

    $n.on('change', function(img) {
        var nval = parseInt($('#n').val());
        nFunction();
        Caman('#canvas', img, function() {
            this.noise(nval);
            this.render();
        });
    });

    function nFunction() {
        var x = document.getElementById("n").value;
        document.getElementById("n-label").innerHTML = "Noise:" + x;
    }

    //Reset and save buttons

    $("#resetbtn").click(function(img) {
        $('input[type=range]').val(0);
        brFunction();
        vbFunction();
        hFunction();
        gamFunction();
        cliFunction();
        ctFunction();
        saturateFunction();
        exFunction();
        sepFunction();
        nFunction();
        Caman('#canvas', img, function () {
            this.revert();
            this.render();
        });
    });

    function download() {
        var dt = canvas.toDataURL('image/jpeg');
        this.href = dt;
        var fileName = prompt("What would you like to name this photo?", "Harry Potter");
        this.download = fileName + ".jpg";
    }
    downloadLnk.addEventListener('click', download, false);
});