import { AnyHTMLElement } from '../../../stencil-public-runtime';
export declare class CcdesignLazyImage {
    el: HTMLCcdesignLazyImageElement;
    readonly imgSrc: string;
    readonly alt: string;
    readonly classNames: string;
    private observer;
    private img;
    /**
     * component did render
     */
    componentDidRender(): void;
    /**
     * asynchronousily swaps data-src to src
     */
    private onIntersection;
    /**
     * render
     */
    render(): AnyHTMLElement;
}
