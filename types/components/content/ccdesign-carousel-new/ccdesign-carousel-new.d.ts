/// <reference types="react" />
export declare class CcdesignCarouselNew {
    readonly data: string;
    dataElement: any;
    readonly timeInterval = 3000;
    imageSelected: number;
    el: HTMLCcdesignCarouselNewElement;
    private items;
    /**
     * Converts carousel Data into JSX Elements
     * @param carouseData - Formatted carousel data
     */
    private getData;
    /**
     * component will fully load
     */
    componentWillLoad(): void;
    /**
     * Swap classes between elements
     * @param data - HTML Element
     * @param i - index
     */
    private sortClasses;
    /**
     * Trigger for carousel swapping
     * @param items - HTML elements
     */
    private timeTrigger;
    /**
     * on component first load
     * @param items - HTML elements
     */
    private componentLoadImages;
    /**
     * Component fully loaded
     */
    componentDidLoad(): void;
    /**
     * render
     */
    render(): JSX.Element;
}
