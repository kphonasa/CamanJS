$(function() {
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


    /*$('input[type=range]').change(applyFilters());

    function applyFilters(img) {
        var br = parseInt($('#br').val());
        var vb = parseInt($('#vb').val());
        var h = parseInt($('#h').val());
        var gam = parseInt($('#gam').val());
        var cli = parseInt($('#cli').val());
        var ct = parseInt($('#ct').val());
        var saturate = parseInt($('#saturate').val());
        var ex = parseInt($('#ex').val());
        var sep = parseInt($('#sep').val());
        var n = parseInt($('#n').val());

        Caman('#canvas', function () {
            this.revert(false);
            /*this.brightness(br);
            this.vibrance(vb);
            this.hue(h);
            this.gamma(gam);
            this.clip(cli);
            this.contrast(ct);
            this.saturation(saturate);
            this.exposure(ex);
            this.sepia(sep);
            this.noise(n);
            this.render();
            this.brightness(br).vibrance(vb).hue(h).gamma(gam).clip(cli).contrast(ct).saturation(saturate).exposure(ex).sepia(sep).noise(n).render();
        });
    }*/


    $("#resetbtn").click(function(img) {
        $('input[type=range]').val(0);
        Caman('#canvas', img, function () {
            this.revert();
            this.render();
        });
    });

    /*$('#savebtn').click(function(img){
        Caman('#canvas', img, function () {
            this.render(function () {
                this.save('jpg');
            });
        });

    });

    function download() {
        var dt = canvas.toDataURL('image/jpeg');
        this.href = dt;
    }
    downloadLnk.addEventListener('click', download, false);*/
});