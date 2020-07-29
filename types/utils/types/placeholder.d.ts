export declare enum PlaceholderPosition {
    relative = "relative",
    absolute = "absolute"
}
export declare enum PlaceholderAlignment {
    topLeft = "top-left",
    topRight = "top-right",
    TopCenter = "top-center",
    middleLeft = "middle-left",
    middleRight = "middle-right",
    middleCenter = "middle-center",
    bottomLeft = "bottom-left",
    bottomRight = "bottom-right",
    bottomCenter = "bottom-center"
}
export declare enum PlaceholderWidth {
    auto = "auto",
    minSmall = "min-small",
    small = "small",
    medium = "medium",
    large = "large"
}
export declare enum PlaceholderHeight {
    auto = "auto",
    small = "small",
    medium = "medium",
    large = "large"
}
export declare class Placeholder {
    position: PlaceholderPosition;
    positionAlignment: PlaceholderPosition;
    width: PlaceholderWidth;
    height: PlaceholderHeight;
}
