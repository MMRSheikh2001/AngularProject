import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {

  // Inject router which will redirect unauthorised users
  const router = inject(Router);

  //get logged in user data from local storage
  //local storage stores data as object
  const userData = localStorage.getItem('user');

  //Check if user data exist in local storage
  //if not, user is not logged in
  if (!userData) {
    // redirect user to login page
    router.navigate(['/login']);

    //Block route access
    return false;

  }
  //Convert string data into JS object
  const user = JSON.parse(userData);



  // ============================
  // ACCOUNT STATUS CHECKS
  // ============================

  // Check if email is verified
  if (user.isVerified !== true) {

    alert('Please verify your account first');

    router.navigate(['/login']);

    return false;
  }

  // Check if account is active
  if (user.isActive !== true) {

    alert('Your account is inactive');

    router.navigate(['/login']);

    return false;
  }

  // Check if account is suspended
  if (user.isSuspended === true) {

    alert('Your account has been suspended');

    router.navigate(['/login']);

    return false;
  }

  // ============================
  // ROLE CHECK
  // ============================

  // get the required role from route configuration
  const expectedRole = route.data?.['role'];

  //Check if Route has Role restriction
  //And user's role does not match require role

  if (expectedRole && user.role != expectedRole) {
    //Show warning message
    alert("Unauthorised Access");

    //redirect user to login page
    router.navigate(['/login']);

    //Deny access route
    return false;
  }
  //If Everything Is valid
  //User is logged in
  //User has correct role
  //Then allow route access
  return true;

};
