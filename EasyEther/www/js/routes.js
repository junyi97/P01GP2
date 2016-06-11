angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('loginPage', {
    url: '/page1',
    templateUrl: 'templates/loginPage.html',
    controller: 'loginPageCtrl'
  })

  .state('forgetPassword', {
    url: '/page14',
    templateUrl: 'templates/forgetPassword.html',
    controller: 'forgetPasswordCtrl'
  })

  .state('forgetPassword2', {
    url: '/page15',
    templateUrl: 'templates/forgetPassword2.html',
    controller: 'forgetPassword2Ctrl'
  })

  .state('signUp', {
    url: '/page13',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('signUpSuccessful', {
    url: '/page10',
    templateUrl: 'templates/signUpSuccessful.html',
    controller: 'signUpSuccessfulCtrl'
  })

  .state('homePage', {
    url: '/page3',
    templateUrl: 'templates/homePage.html',
    controller: 'homePageCtrl'
  })

  .state('viewMyProfile', {
    url: '/page11',
    templateUrl: 'templates/viewMyProfile.html',
    controller: 'viewMyProfileCtrl'
  })

  .state('automationPayment', {
    url: '/page20',
    templateUrl: 'templates/automationPayment.html',
    controller: 'automationPaymentCtrl'
  })

  .state('automationPaymentConfirmed', {
    url: '/page19',
    templateUrl: 'templates/automationPaymentConfirmed.html',
    controller: 'automationPaymentConfirmedCtrl'
  })

  .state('payment', {
    url: '/page21',
    templateUrl: 'templates/payment.html',
    controller: 'paymentCtrl'
  })

  .state('paymentConfirmation', {
    url: '/page9',
    templateUrl: 'templates/paymentConfirmation.html',
    controller: 'paymentConfirmationCtrl'
  })

  .state('automationConfirmation', {
    url: '/page24',
    templateUrl: 'templates/automationConfirmation.html',
    controller: 'automationConfirmationCtrl'
  })

  .state('topUpConfirmation', {
    url: '/page25',
    templateUrl: 'templates/topUpConfirmation.html',
    controller: 'topUpConfirmationCtrl'
  })

  .state('paymentConfirmed', {
    url: '/page22',
    templateUrl: 'templates/paymentConfirmed.html',
    controller: 'paymentConfirmedCtrl'
  })

  .state('topUpConfirmed', {
    url: '/page23',
    templateUrl: 'templates/topUpConfirmed.html',
    controller: 'topUpConfirmedCtrl'
  })

  .state('purchaseEtherCurrency', {
    url: '/page8',
    templateUrl: 'templates/purchaseEtherCurrency.html',
    controller: 'purchaseEtherCurrencyCtrl'
  })

  .state('currentMonthBillPage', {
    url: '/page4',
    templateUrl: 'templates/currentMonthBillPage.html',
    controller: 'currentMonthBillPageCtrl'
  })

  .state('pastTransactionPage', {
    url: '/page5',
    templateUrl: 'templates/pastTransactionPage.html',
    controller: 'pastTransactionPageCtrl'
  })

  .state('pastTransactionPage1', {
    url: '/page7',
    templateUrl: 'templates/pastTransactionPage1.html',
    controller: 'pastTransactionPage1Ctrl'
  })

  .state('pastTransactionPage2', {
    url: '/page16',
    templateUrl: 'templates/pastTransactionPage2.html',
    controller: 'pastTransactionPage2Ctrl'
  })

  .state('pastTransactionPage3', {
    url: '/page17',
    templateUrl: 'templates/pastTransactionPage3.html',
    controller: 'pastTransactionPage3Ctrl'
  })

  .state('pastTransactionPage4', {
    url: '/page18',
    templateUrl: 'templates/pastTransactionPage4.html',
    controller: 'pastTransactionPage4Ctrl'
  })

  .state('setCalendarReminder', {
    url: '/page12',
    templateUrl: 'templates/setCalendarReminder.html',
    controller: 'setCalendarReminderCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});