//initiate
$(document).ready(init());

function init(){
    addTooltip();
    emailSentPop();
    addPost();
}

//add toolstips to all table rows
function addTooltip(){
    $('[data-toggle="tooltip"]').tooltip();
}

//popover email sent notification modal
function emailSentPop(){
    $(".sentMail").click(function(){
        $("#sentMail").modal();
    });
}

//initiate plus button
function addPost() {
    var diningHallMapper = function(letter) {
        switch (letter) {
            case 'A':
                return 'De Neve';
            case 'B':
                return 'Covel';
            case 'C':
                return 'Bruin Plate';
            case 'D':
                return 'Feast at Rieber';
        }
        return '';
    };

    var timeMapper = function(letter) {
        var start = new Date(), end = new Date();
        switch (letter) {
            case 'A':
                start.setHours(11);
                end.setHours(12);
                break;
            case 'B':
                start.setHours(12);
                end.setHours(13);
                break;
            case 'C':
                start.setHours(13);
                end.setHours(14);
                break;
            case 'D':
                start.setHours(14);
                end.setHours(15);
                break;
            case 'E':
                start.setHours(17);
                end.setHours(18);
                break;
            case 'F':
                start.setHours(18);
                end.setHours(19);
                break;
            case 'G':
                start.setHours(19);
                end.setHours(20);
                break;
            case 'H':
                start.setHours(20);
                end.setHours(21);
                break;
        }
        return {start, end};
    };

    $('#seller-switch-btn').on('click', function() {
        $('#plus-btn').attr('data-target', '#postProvider');
    });

    $('#buyer-switch-btn').on('click', function() {
        $('#plus-btn').attr('data-target', '#postDemander');
    });

    $('#postDemander').on('click', '#post-demander-btn', function() {
        var newDemanderName = $('#demander-name')[0].value;
        var newDemanderDiningHall = diningHallMapper($('#demander-dining-hall')[0].value);
        var newDemanderTime = timeMapper($('#demander-time')[0].value);
        var newDemanderContactInfo = $('#demander-contact-info')[0].value;

        var newDemanderJson = {
            'name': newDemanderName,
            'diningHall': newDemanderDiningHall,
            'startTime': newDemanderTime.start,
            'endTime': newDemanderTime.end,
            'contact': newDemanderContactInfo,
        };

        var buyerTableBody = $('#buyer-table table tbody');
        buyerTableBody.append(`<tr>
          <td>${newDemanderJson.name}</td>
          <td>${newDemanderJson.diningHall}</td>
          <td>${newDemanderJson.startTime.toLocaleString('en-US', { hour: 'numeric', hour12: true})}-${newDemanderJson.endTime.toLocaleString('en-US', { hour: 'numeric', hour12: true})}</td>
          <td>${newDemanderJson.contact}</td>
        </tr>`);
    });

    $('#postProvider').on('click', '#post-provider-btn', function() {
        var newProviderName = $('#provider-name')[0].value;
        var newProviderDiningHall = diningHallMapper($('#provider-dining-hall')[0].value);
        var newProviderTime = timeMapper($('#provider-time')[0].value);
        var newProviderContactInfo = $('#provider-contact-info')[0].value;

        var newProviderJson = {
            'name': newProviderName,
            'diningHall': newProviderDiningHall,
            'startTime': newProviderTime.start,
            'endTime': newProviderTime.end,
            'contact': newProviderContactInfo,
        };

        var sellerTableBody = $('#seller-table table tbody');
        sellerTableBody.append(`<tr>
          <td>${newProviderJson.name}</td>
          <td>${newProviderJson.diningHall}</td>
          <td>${newProviderJson.startTime.toLocaleString('en-US', { hour: 'numeric', hour12: true})}-${newProviderJson.endTime.toLocaleString('en-US', { hour: 'numeric', hour12: true})}</td>
          <td>${newProviderJson.contact}</td>
        </tr>`);
    });
}
