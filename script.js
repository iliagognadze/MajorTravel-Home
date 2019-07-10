
	$( document ).ready(function() {
    	$('.holidayNav-link').on('click', function(){
    		$(this).addClass('holidayLink-active').siblings().removeClass('holidayLink-active');
    	});

    	$('.categoriesNav-link').on('click', function(){
    		$(this).addClass('categoriesLink-active').siblings().removeClass('categoriesLink-active');
    	});

        $('.formNav-link').on('click', function(){
            $(this).addClass('formnavLink-active').siblings().removeClass('formnavLink-active');
        });

        $('#offer1').hover(function(){
            $('#readMore1 ').slideDown(500);
        }, function(){
            $('#readMore1 ').slideUp(500);
        });

        $('#offer2').hover(function(){
            $('#readMore2 ').slideDown(500);
        }, function(){
            $('#readMore2 ').slideUp(500);
        });

        $('#offer3').hover(function(){
            $('#readMore3 ').slideDown(500);
        }, function(){
            $('#readMore3 ').slideUp(500);
        });

        $('#offer4').hover(function(){
            $('#readMore4 ').slideDown(500);
        }, function(){
            $('#readMore4 ').slideUp(500);
        });

    	$('#blogLink1').hover(function(){
            $('#blogContent1').slideDown(500);
        }, function(){
            $('#blogContent1').slideUp(500);
        });

        $('#blogLink2').hover(function(){
            $('#blogContent2').slideDown(500);
        }, function(){
            $('#blogContent2').slideUp(500);
        });

        $('#blogLink3').hover(function(){
            $('#blogContent3').slideDown(500);
        }, function(){
            $('#blogContent3').slideUp(500);
        });

        $('#blogLink4').hover(function(){
            $('#blogContent4').slideDown(500);
        }, function(){
            $('#blogContent4').slideUp(500);
        });

        $('#blogLink5').hover(function(){
            $('#blogContent5').slideDown(500);
        }, function(){
            $('#blogContent5').slideUp(500);
        });

        $('#blogLink6').hover(function(){
            $('#blogContent6').slideDown(500);
        }, function(){
            $('#blogContent6').slideUp(500);
        });

        $('#blogLink7').hover(function(){
            $('#blogContent7').slideDown(500);
        }, function(){
            $('#blogContent7').slideUp(500);
        });

        $('#blogLink8').hover(function(){
            $('#blogContent8').slideDown(500);
        }, function(){
            $('#blogContent8').slideUp(500);
        });

        
        function beachHolidaysIcon() {

            let beachLink = document.getElementById('beachHolidays-link');
            let beachImage = document.getElementById('beachHolidays-icon')
            beachImage.src = 'images/beachHolidays-icon.svg';

            if (beachLink.classList.contains('holidayLink-active')) {
                beachImage.src = 'images/ActivebeachHolidays-icon.png';
                console.log();
            }

            let familyLink = document.getElementById('familyHolidays-link');
            let familyImage = document.getElementById('familiyHolidays-icon');
            familyImage.src = 'images/familyHolidays-icon.svg';

            if (familyLink.classList.contains('holidayLink-active')) {
                familyImage.src = 'images/ActivefamilyHolidays-icon.svg';
                console.log();
            }

            let cityLink = document.getElementById('cityHolidays-link');
            let cityImage = document.getElementById('cityHolidays-icon');
            cityImage.src = 'images/cityBreaks-icon.svg';

            if (cityLink.classList.contains('holidayLink-active')) {
                cityImage.src = 'images/ActivecityBreaks-icon.svg';
                console.log();
            }

            let haulLink = document.getElementById('longHolidays-link');
            let haulImage = document.getElementById('longHolidays-icon');
            haulImage.src = 'images/longHaul-icon.svg';

            if (haulLink.classList.contains('holidayLink-active')) {
                haulImage.src = 'images/ActivelongHaul-icon.svg';
                console.log();
            }

            let romanticLink = document.getElementById('romanticHolidays-link');
            let romanticImage = document.getElementById('romanticHolidays-icon');
            romanticImage.src = 'images/romantic.svg';

            if (romanticLink.classList.contains('holidayLink-active')) {
                romanticImage.src = 'images/Activeromantic.svg';
                console.log();
            }


            let europeLink = document.getElementById('europeHolidays-link');
            let europeImage = document.getElementById('europeHolidays-icon');
            europeImage.src = 'images/europe-icon.svg';

            if (europeLink.classList.contains('holidayLink-active')) {
                europeImage.src = 'images/Activeeurope-icon.svg';
                console.log();
            }

        }

        // function familiHolidaysIcon() {

        //     let link = document.getElementById('familyHolidays-link');
        //     let image = document.getElementById('familiyHolidays-icon')
        //     image.src == 'images/familyHolidays-icon.svg';

        //     if (link.classList.contains('holidayLink-active')) {
        //         image.src == 'images/ActivebeachHolidays-icon.png';
        //         console.log();
        //     }

        // }

        var holidayImg = document.getElementsByClassName('holidayImg');

        for(let i = 0; i < holidayImg.length; i++) {
          holidayImg[i].parentElement.addEventListener("click", function() {
                
           
            beachHolidaysIcon();
            
          });
        }


	});