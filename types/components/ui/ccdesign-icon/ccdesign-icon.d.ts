import { AnyHTMLElement } from '../../../stencil-public-runtime';
export declare class CcdesignIcon {
    readonly name: string;
    readonly size: string;
    readonly color: string;
    svg: string;
    iconEl: HTMLCcdesignIconElement;
    /**
     * gets and sets icon svg to element
     */
    private getSVG;
    /**
     * component did fully load
     */
    componentDidLoad(): Promise<void>;
    /**
     * watches to see if icon name changes so it can update dom
     */
    componentWillUpdate(): Promise<void>;
    /**
     * render
     */
    render(): AnyHTMLElement;
}
