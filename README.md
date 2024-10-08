# EK Assessment

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start
```

## Step 2: Start the Metro Server
First install all npm packages
```bash
# using npm
npm install
```
then install all pod files
```bash
cd .. & pod install
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see the application running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 4: Troubleshoot

For ios:
clean project
remove derived data 
bundle install

For android:
./gradlew clean

or
Try reinstalling node_modules and pods

## Details

 React native 0.75.3 is used for this assignment.
 
 React navigation is used for navigating across the screen.
 
 React Redux Toolkit is being used to maintaining the store across the app along with async storage and Redux Persist.
 
 React Native Paper is used for maintaining the theeme and other components across the application.
 
 Shopify Flashlist is used for better performance when rendering media.

## Issue with the the ts extention Video files not working on iOS



