# react-native-qr-code

A QR Code generator for React Native based on @react-native-community/art.


## Installing module

Please install @react-native-community/art first.

```sh
yarn add @react-native-community/art
```

or

```sh
npm install @react-native-community/art --save
```

## Linking module

### Mostly automatic linking

For `react-native >= 0.60` ReactNativeART should be autolinked and no additional action is required.

For `react-native < 0.60` you need to link ReactNative ART:

```js
react-native link @react-native-community/art
```
For any difficulty while linking `@react-native-community/art` follow https://github.com/react-native-community/art/blob/master/README.md


```sh
yarn add react-native-qr-code
```

or

```sh
npm install react-native-qr-code --save
```


## Usage

```
import QRCode from 'react-native-qr-code';

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
| `size` | Number  | Current position in steps | 100
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