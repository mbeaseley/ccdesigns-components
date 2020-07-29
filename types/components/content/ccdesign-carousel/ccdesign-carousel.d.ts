import { JSX } from '../../../stencil-public-runtime';
export declare class CcdesignCarousel {
    readonly data: string;
    dataElement: JSX.Element;
    readonly timeInterval = 3000;
    imageSelected: number;
    el: HTMLCcdesignCarouselElement;
    private timeTrigger;
    private componentLoadImages;
    private getData;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): any;
}
