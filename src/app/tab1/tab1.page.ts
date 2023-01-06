import { Component } from '@angular/core';
import { AppRate } from '@awesome-cordova-plugins/app-rate/ngx';
import { SafariViewController } from '@awesome-cordova-plugins/safari-view-controller/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private appRate: AppRate,
    private safariViewController: SafariViewController) { }

  rateApp(){
    this.appRate.setPreferences({
      usesUntilPrompt: 1,
      simpleMode: true,
      customLocale: {
        title: 'Would you mind rating %@?',
        message: 'It won’t take more than a minute and helps to promote our app. Thanks for your support!',
        cancelButtonLabel: 'No, Thanks',
        laterButtonLabel: 'Remind Me Later',
        rateButtonLabel: 'Rate It Now',
        yesButtonLabel: 'Yes!',
        noButtonLabel: 'Not really',
        appRatePromptTitle: 'Do you like using %@',
        feedbackPromptTitle: 'Mind giving us some feedback?',
      },
      storeAppURL: {
        ios: '1586742271',
        //android: 'market://details?id=com.jugglestreet.app',
        android: 'market://details?id=cap.android',
      },
      openUrl: (url) => {
        this.safariViewController.show(
          {
            url,
            barColor: '#299C4A',
            controlTintColor: '#00ffff',
            tintColor: '#00ffff',
          }
        );
      },
    });
    this.appRate.promptForRating(true);
  }

}
