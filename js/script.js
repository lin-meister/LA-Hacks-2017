$(document).ready(function() {
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
    }

    var timeMapper = function(letter) {
        var start = new Date(), end = new Date();
        switch (letter) {
            case 'A':
                start.setHours(11);
                end.setHours(12);
            case 'B':
                start.setHours(12);
                end.setHours(13);
            case 'C':
                start.setHours(13);
                end.setHours(14);
            case 'D':
                start.setHours(14);
                end.setHours(15);
            case 'E':
                start.setHours(17);
                end.setHours(18);
            case 'F':
                start.setHours(18);
                end.setHours(19);
            case 'G':
                start.setHours(19);
                end.setHours(20);
            case 'H':
                start.setHours(20);
                end.setHours(21);
        }
        return {start, end};
    }
    $('#seller-switch-btn').on('click', function() {
        $('#plus-btn').attr('data-target', '#postProvider');
    })

    $('#buyer-switch-btn').on('click', function() {
        $('#plus-btn').attr('data-target', '#postDemander');
    })

    $('#postDemander').on('click', '.modal-footer button', function(event) {
        var newDemanderName = $('#demander-name')[0].value;
        var newDemanderDiningHall = diningHallMapper($('#demander-dining-hall')[0].value);
        var newDemanderTime = timeMapper($('#provider-time')[0].value);
        var newDemanderContactInfo = $('#demander-contact-info')[0].value;

        var newDemanderJson = {
            'name': newDemanderName,
            'diningHall': newDemanderDiningHall,
            'startTime': newDemanderTime.start,
            'endTime': newDemanderTime.end,
            'contact': newDemanderContactInfo,
        };
        console.log(newDemanderJson);

        var buyerTableBody = $('#buyer-table table tbody');
        buyerTableBody.append(`<tr>
          <th scope="row">${buyerTableBody[0].childElementCount+1}</th>
          <td>${newDemanderJson.name}</td>
          <td>Thornton</td>
          <td>${newDemanderJson.startTime.toLocaleString('en-US', { hour: 'numeric', hour12: true})}-${newDemanderJson.endTime.toLocaleString('en-US', { hour: 'numeric', hour12: true})}</td>
          <td>${newDemanderJson.contact}</td>
        </tr>`);
    });

    $('#postProvider').on('click', '.modal-footer button', function(event) {
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
        console.log(newProviderJson);

        var sellerTableBody = $('#seller-table table tbody');
        sellerTableBody.append(`<tr>
          <th scope="row">${sellerTableBody[0].childElementCount+1}</th>
          <td>${newProviderJson.name}</td>
          <td>Thornton</td>
          <td>${newProviderJson.contact}</td>
          <td>${newProviderJson.startTime.toLocaleString('en-US', { hour: 'numeric', hour12: true})}-${newProviderJson.endTime.toLocaleString('en-US', { hour: 'numeric', hour12: true})}</td>
          <td>${newProviderJson.diningHall}</td>
        </tr>`);
    });
});
