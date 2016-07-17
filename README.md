# Firebase 3, Ionic 2 Demo

This project serves as a demo for how I integrated Firebase 3 into an Ionic 2 project.  It includes basic database syncing, as well as Firebase user authentication.  The goal was to create a demo app that could accompany [a blog post I wrote](https://webcake.co/using-firebase-3-in-angular-2-and-ionic-2/).

## Download and Installation

### Firebase Setup

In order to set up this project, I had to previously create a Firebase app, following the steps outlined in their guide.  Those steps are beyond the scope of the tutorial I wrote, and this demo begins at the point when:

- [the Firebase app has been set up](https://console.firebase.google.com/)
- [some data has been seeded](https://firebase.google.com/docs/database/web/structure-data)
- [database rules have been revised](https://firebase.google.com/docs/database/security/)
- [a demo user has been created](https://firebase.google.com/docs/auth/web/manage-users)

You can find information on all of these topics in the [Web guide in the Firebase docs](https://firebase.google.com/docs/web/setup).

### Repo Download

When you pull this branch, it will come with nothing but the app files.  You'll need to run through the installation process for building an Ionic project, which is normally done for you in `ionic start`.

#### Environment

Here's the output from my `ionic info` that allows me to run simulators and build appropriately for iOS:
```
Ionic Framework Version: 2.0.0-beta.7
Ionic CLI Version: 2.0.0-beta.29
Ionic App Lib Version: 2.0.0-beta.16
ios-deploy version: 1.8.6 
ios-sim version: 4.1.1 
OS: Mac OS X El Capitan
Node Version: v5.11.1
Xcode version: Xcode 7.3.1 Build version 7D1014
```
Keep in mind that - for whatever reason - this doesn't display any information about my Android stuff.  Which, I mean, I dunno why.  Anyway, here they are:

- Android Studio 1.5.1
- Android 5.1.1, API Level 22, Rev 2
- Android SDK Build Tools
- Android SDK Tools 24.3.3
- Android SDK Platform-Tools 23.1

**Note that at the time of this writing, Ionic won't build on Node 6.x.  It looks like it's a bug with the SASS module.**


#### Install Node Modules:
```
$ npm install
```

#### Add the iOS Platform (Mac only)
```
$ ionic platform add ios
```

#### Add the Android Platform
```
$ ionic platform add android
```

## Running the Project

Provided you've followed the instructions above, and have an internet connection, you should be able to run the app, and see the stuffs.  It's all coming from a demo app that I have set up on my Firebase dashboard, which has two seeded records, and one dummy user.

### iOS
```
# for some reason, I had to run this twice on the first go
# maybe once to build, and once to serve?
$ ionic run ios
```

### Android
```
$ ionic run android
```

## To Replace My Firebase App With Your Firebase App:

- Seed the app with data that matches the following interface:
```
{
	static: string,
	private: string
}
```
- Enable your application to use Email/Password authentication, on the **Sign In Method** tab of the Auth link in your app dashboard.
- In the **Users** tab of the Auth link in your app dashboard, create a dummy user.
- In the **Rules** tab of the Database link in your app dashboard, revise the default rules to match the following JSON:
```
{
  "rules": {
    ".read": "true",
    ".write": "auth != null",
    "private": {
      ".read": "auth != null"
    }
  }
}
```
- In the app dashboard Home screen, click on the **Add Firebase to your web app** link, and copy the contents of the modal; then replace lines 24-34 of `www/index.html` with the contents of that modal.

Cake and grief counseling will be available at the conclusion of the test.