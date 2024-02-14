import { USER_ACTION_TYPES } from "./user.types";
import {
  checkUserSession,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutSuccess,
} from "./user.actions";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  createUserAuthWithEmailAndPassword,
  createUserDocFromAuth,
  getCurrentUser,
  signInAuthWithEmailAndPassword,
  signInWithGooglePopUp,
  signOutUser,
} from "../../utils/firebase/firebase.util";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocFromAuth,
      userAuth,
      additionalDetails
    );
    console.log(userSnapshot);
    console.log(userSnapshot.data());
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    // Get logged in user from firebase
    const userAuth = yield call(getCurrentUser);
    console.log(userAuth);
    if (!userAuth) return;
    // Get user document from firebase
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopUp);
    console.log(user);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail(action) {
  const { email, password } = action.payload;
  console.log(action);
  try {
    const { user } = yield call(
      signInAuthWithEmailAndPassword,
      email,
      password
    );
    console.log(user);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUp(action) {
  const { email, password, displayName } = action.payload;
  console.log(action);
  try {
    const { user } = yield call(
      createUserAuthWithEmailAndPassword,
      email,
      password
    );
    console.log(user);
    yield call(getSnapshotFromUserAuth, user, { displayName });
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signOut() {
  try {
    const user = yield call(signOutUser);
    console.log("signed out : user:", user)
    if (!user) yield put(signOutSuccess(user));
  } catch (error) {
    yield put(signOutFailed);
  }
}

export function* onSignInWithGoogleStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSigninWithEmailStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignoutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onSignInWithGoogleStart),
    call(onSigninWithEmailStart),
    call(onSignUpStart),
    call(onSignoutStart),
  ]);
}
