angular.module('app.controllers', [])
  
.controller('loginPageCtrl', function($scope, UserService) {

	UserService.setup();
		
	$scope.ValidateCred = function(cred) {
		var mn = document.loginform.mobileno.value;
        var pw = document.loginform.pass.value;
        var mobilenum = "81266890"; 
        var pass = "password";
        if ((mn == mobilenum) && (pw == pass)) {
            window.location.href = "#/page3"
            return false;
        }
        else 
		{
            alert ("Login was unsuccessful, please check your mobile number and password");
        }
  };
})
   
.controller('forgetPasswordCtrl', function($scope) {

})
   
.controller('forgetPassword2Ctrl', function($scope) {

})
   
.controller('signUpCtrl', function($scope, $ionicPopup, UserService) {

	UserService.setup();
	
	$scope.loadUsers = function() {
		UserService.all().then(function (results) {
			$scope.users = results;
		});	
	}
	
	$scope.loadUsers();
	
	$scope.createUser = function(user) {
		UserService.set(user.mobileno);
		UserService.set(user.pass);
		$scope.loadUsers
		window.location.href= "/#/page10"
		user.mobileno = "";
		user.pass = "";
	};
	
    $scope.onUserDelete = function(user_id) {
	$ionicPopup.confirm({
	  title: 'Confirm Delete',
	  content: 'Are you sure you want to delete this reminder?'
	}).then(function(res) {
	  if(res) {
		UserService.del(user_id);
		$scope.loadUsers();
	  } 
	});
  };
  
})
   
.controller('signUpSuccessfulCtrl', function($scope) {

})
   
.controller('homePageCtrl', function($scope) {

})
   
.controller('viewMyProfileCtrl', function($scope) {

})
   
.controller('automationPaymentCtrl', function($scope) {

})
   
.controller('automationPaymentConfirmedCtrl', function($scope) {

})
   
.controller('paymentCtrl', function($scope) {

})
   
.controller('paymentConfirmationCtrl', function($scope) {

})
   
.controller('automationConfirmationCtrl', function($scope) {

})
   
.controller('topUpConfirmationCtrl', function($scope) {

})
   
.controller('paymentConfirmedCtrl', function($scope) {

})
   
.controller('topUpConfirmedCtrl', function($scope) {

})
   
.controller('purchaseEtherCurrencyCtrl', function($scope) {

})
   
.controller('currentMonthBillPageCtrl', function($scope) {

})
   
.controller('pastTransactionPageCtrl', function($scope) {

})
   
.controller('pastTransactionPage1Ctrl', function($scope) {

})
   
.controller('pastTransactionPage2Ctrl', function($scope) {

})
   
.controller('pastTransactionPage3Ctrl', function($scope) {

})
   
.controller('pastTransactionPage4Ctrl', function($scope) {

})
   
.controller('setCalendarReminderCtrl', function($scope, $ionicModal, $ionicPopup, SQLService) {

	SQLService.setup();
		
	$scope.loadTask = function() {
		SQLService.all().then(function (results) {
			$scope.tasks = results;
		});	
	}

	$scope.loadTask(); 

	  // Create and load the Modal
	  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
		$scope.taskModal = modal;
	  }, {
		scope: $scope,
		animation: 'slide-in-up'
	  });

	  // Open our new task modal
	  $scope.newTask = function() {
		$scope.taskModal.show();
	  };

	  // Close the new task modal
	  $scope.closeNewTask = function() {
		$scope.taskModal.hide();
	  };

	  // Called when the form is submitted
	  $scope.createTask = function(task) {
		SQLService.set(task.title);
		$scope.loadTask();
		$scope.taskModal.hide();
		task.title = "";
	  };
	  
	  $scope.onItemDelete = function(taskid) {
		$ionicPopup.confirm({
		  title: 'Confirm Delete',
		  content: 'Are you sure you want to delete this reminder?'
		}).then(function(res) {
		  if(res) {
			SQLService.del(taskid);
			$scope.loadTask();
		  } 
		});
	  };
	  
	  $scope.onItemEdit = function(taskid) {
		$ionicPopup.prompt({
		  title: 'Update Reminder',
		  subTitle: 'Enter new Reminder'
		}).then(function(res) {
			SQLService.edit(res, taskid);
			$scope.loadTask();
		});
	  };
	  
})
 