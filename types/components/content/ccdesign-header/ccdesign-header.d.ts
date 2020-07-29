import { JSX } from '../../../stencil-public-runtime';
export declare class CcdesignHeader {
    readonly data: string;
    formattedData: any;
    readonly isClient: boolean;
    initialized: boolean;
    isMobileLayout: boolean;
    isRootPage: boolean;
    env: string;
    el: HTMLCcdesignHeaderElement;
    constructor();
    /**
     * Formats nav data
     */
    private formatContent;
    /**
     * Listens on doms window for viewport size
     */
    handleLoad(): void;
    /**
     * sets user back to root page
     */
    private backRootPage;
    /**
     * component will fully load
     */
    componentWillLoad(): void;
    /**
     * component did fully load
     */
    componentDidLoad(): void;
    /**
     * Checks for environment, dev or prod
     */
    private determineEnvironment;
    /**
     * Formats mobile nav bar
     * @param data - nav data items
     */
    private getNav;
    /**
     * render
     */
    render(): JSX.Element;
}
