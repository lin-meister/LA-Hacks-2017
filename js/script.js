$(document).ready(function() {
    $('#seller-switch-btn').on('click', function() {
        $('#plus-btn').attr('data-target', '#postProvider');
        console.log($('#plus-btn'));
    })

    $('#buyer-switch-btn').on('click', function() {
        $('#plus-btn').attr('data-target', '#postDemander');
    })

    $('#postProvider').on('click', '.modal-footer button', function() {
        var newProviderName = $('#provider-name')[0].value;
        var newProviderDiningHall = $('#provider-dining-hall')[0].value;
        var newProviderTime = $('#provider-time')[0].value;
        var newProviderContactInfo = $('#provider-contact-info')[0].value;
        console.log(newProviderName);
        console.log(newProviderDiningHall);
        console.log(newProviderTime);
        console.log(newProviderContactInfo);

        var newProviderJson = {
            'name': newProviderName,
            'diningHall': newProviderDiningHall,
            'time': newProviderDiningTime,
            'contact': newProviderContactInfo,
        };
    });
});
