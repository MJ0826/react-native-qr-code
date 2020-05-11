import * as React from "react";

declare class QRCode extends React.PureComponent<QRCodeProps, any> {}

export interface QRCodeProps {
  /* the style of the surface view */
  style?: object;
  /* what the qr code stands for */
  value?: string;
  /* the whole component size */
  size?: number;
  /* the color of the cell */
  color?: string;
  /* the color of the background */
  backgroundColor?: string;
}

export default QRCode;