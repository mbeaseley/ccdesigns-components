export enum PlaceholderPosition {
  relative = 'relative',
  absolute = 'absolute',
}

export enum PlaceholderAlignment {
  topLeft = 'top-left',
  topRight = 'top-right',
  TopCenter = 'top-center',
  middleLeft = 'middle-left',
  middleRight = 'middle-right',
  middleCenter = 'middle-center',
  bottomLeft = 'bottom-left',
  bottomRight = 'bottom-right',
  bottomCenter = 'bottom-center',
}

export enum PlaceholderWidth {
  auto = 'auto',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export enum PlaceholderHeight {
  auto = 'auto',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export class Placeholder {
  // Defines css position property
  position: PlaceholderPosition;
  // Defines alignment on page
  positionAlignment: PlaceholderPosition;
  // defines container width
  width: PlaceholderWidth;
  // defines container width
  height: PlaceholderHeight;
}
