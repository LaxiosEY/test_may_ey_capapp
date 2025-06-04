sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'avinash/po/managepo/test/integration/FirstJourney',
		'avinash/po/managepo/test/integration/pages/POsList',
		'avinash/po/managepo/test/integration/pages/POsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('avinash/po/managepo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage
                }
            },
            opaJourney.run
        );
    }
);