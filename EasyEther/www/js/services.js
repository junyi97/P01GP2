angular.module('app.services', [])

.factory("SQLService", function ($q) {

	var db;
	var task='';
	var deltask;
	
	function createDB() {
		try {
			db = window.openDatabase("EasyEtherDB", "1.0", "EasyEtherApp", 10*1024*1024);
			db.transaction(function(tx){
				tx.executeSql("CREATE TABLE IF NOT EXISTS tasks (task_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, task_name VARCHAR(100) )",[]);
			});
		} catch (err) {
			alert("Error processing SQL: " + err);
    	}
		console.log('database created');
	}
	
	function setTasks(tname){
		return promisedQuery("INSERT INTO tasks(task_name) VALUES ('" + tname + "')", defaultResultHandler, defaultErrorHandler);
	}
	
	function delTasks(tid){
		return promisedQuery("DELETE FROM tasks where task_id = " + tid, defaultResultHandler, defaultErrorHandler);
	}
	
	function UpdateTasks(tname, tid){
		return promisedQuery("UPDATE tasks SET task_name='" + tname + "' WHERE task_id = " + tid, defaultResultHandler, defaultErrorHandler);
	}

	function getTasks(){
		return promisedQuery('SELECT * FROM tasks', defaultResultHandler, defaultErrorHandler);
	}
	
	function defaultResultHandler(deferred) {
	  return function(tx, results) {
		var len = results.rows.length;
		var output_results = [];
		
		for (var i=0; i<len; i++){
			var t = {'task_id':results.rows.item(i).task_id,'task_name':results.rows.item(i).task_name};
			output_results.push(t);				
		}
		
		deferred.resolve(output_results);  
	  }  
	}
	
	function defaultErrorHandler(deferred) {
	  return function(tx, results) {
		var len = 0;
		var output_results = ''; 
		deferred.resolve(output_results);
	  } 
	}
	
	function promisedQuery(query, successCB, errorCB) {
	  var deferred = $q.defer();
	  db.transaction(function(tx){
		tx.executeSql(query, [], successCB(deferred), errorCB(deferred));      
	  }, errorCB);
	  return deferred.promise;  
	}
	
	return {
		setup: function() {
		  return createDB();
		},
		set: function(t_name) {
			return setTasks(t_name);
		},
		del: function(taskid) {
			return delTasks(taskid);
		},
		edit: function(t_name,taskid) {
			return UpdateTasks(t_name, taskid);
		},
		all: function() {
		  return getTasks();
		}
	}
	
})

.factory("UserService", function ($q) {

	var db;
	var task='';
	var deltask;
	
	function createDB() {
		try {
			db = window.openDatabase("UserDB", "1.0", "EEApp", 10*1024*1024);
			db.transaction(function(tx){
				tx.executeSql("CREATE TABLE IF NOT EXISTS user (user_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, mobileno VARCHAR(8), pass VARCHAR(100) )",[]);
			});
		} catch (err) {
			alert("Error processing SQL: " + err);
    	}
		console.log('database created');
	}
	
	function createUser(user, pass){
		return promisedQuery("INSERT INTO user(mobileno, pass) VALUES ('" + user + "','" + pass + "')", defaultResultHandler, defaultErrorHandler);
	}
		
	function defaultResultHandler(deferred) {
	  return function(tx, results) {
		var len = results.rows.length;
		var output_results = [];
		
		for (var i=0; i<len; i++){
			var t = {'user_id':results.rows.item(i).user_id,'mobileno':results.rows.item(i).mobileno};
			output_results.push(t);				
		}
		
		deferred.resolve(output_results);  
	  }  
	}
	
	function delUser(uid){
		return promisedQuery("DELETE FROM user where user_id = " + uid, defaultResultHandler, defaultErrorHandler);
	}
	
	function getMobileNo(mobilenum){
		return promisedQuery("SELECT mobileno FROM user where mobileno = " + mobileno, defaultResultHandler, defaultErrorHandler )
	}
	
	function getPass(pass){
		return promisedQuery("SELECT pass FROM user where pass = " + pass, defaultResultHandler, defaultErrorHandler )
	}
	
	function defaultErrorHandler(deferred) {
	  return function(tx, results) {
		var len = 0;
		var output_results = ''; 
		deferred.resolve(output_results);
	  } 
	}
		
	function promisedQuery(query, successCB, errorCB) {
	  var deferred = $q.defer();
	  db.transaction(function(tx){
		tx.executeSql(query, [], successCB(deferred), errorCB(deferred));      
	  }, errorCB);
	  return deferred.promise;  
	}
	
	function getTasks(){
		return promisedQuery('SELECT * FROM user', defaultResultHandler, defaultErrorHandler);
	}
		
	return {
		setup: function() {
		  return createDB();
		},
		set: function(user, pass) {
			return createUser(user, pass);
		},
		del: function(user_id) {
			return delUser(user_id);
		},
		all: function() {
		  return getTasks();
		},
		get: function(mobileno) {
			return getMobileNo(mobileno);
		},
		get2: function(pass) {
			return getPass(pass);
		}
	}
});
