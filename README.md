# react-native-qr-code

A QR Code generator for React Native based on @react-native-community/art.


## Installing module

Please install @react-native-community/art first.

```sh
yarn add @react-native-community/art

or

npm install @react-native-community/art --save
```

and

```sh
yarn add @mudit_26/react-native-qr-code

or 

npm install @mudit_26/react-native-qr-code --save

```

## Linking module

### Mostly automatic linking

For `react-native >= 0.60` ReactNativeART should be autolinked and no additional action is required.

For `react-native < 0.60` you need to link ReactNative ART:

```js
react-native link @react-native-community/art
```
For any difficulty while linking `@react-native-community/art` follow https://github.com/react-native-community/art/blob/master/README.md


## Usage

```
import QRCode from '@mudit_26/react-native-qr-code';

render() {
  return (
    <QRCode
      value='Hello World!'
    />
  );
};

```

### Props

| Name | Type | Description | Default
| ------------ | ------------- | ------------ |------------ |
| `size` | Number  | Size of rendered image in pixels | 100
| ```value``` | String  | String Value of the QR codes | Hello World!
| ```color``` | String  | Color of the QR code | black
| ```style``` | Object  | Custom styling | {}
| ```backgroundColor``` | String  | Color of the background | white



## Dependencies

### PeerDependencies

* [@react-native-community/art](https://github.com/react-native-community/art)

### Dependencies

* [qr.js](https://github.com/defunctzombie/qr.js)

---