import { NavDataItem } from '../../../../utils/modal/nav-data-item';
import 'pure-swipe/src/pure-swipe';
import { AnyHTMLElement } from '../../../../stencil-public-runtime';
export declare class MobileNav {
    readonly data: NavDataItem[];
    isNavOpen: boolean;
    isRootPage: boolean;
    env: string;
    el: HTMLMobileNavElement;
    /**
     * sets nav to open
     */
    private openNav;
    /**
     * sets nav to close
     */
    private closeNav;
    /**
     * sets user back to root page
     */
    private backRootPage;
    /**
     * component did fully load
     */
    componentDidLoad(): void;
    constructor();
    /**
     * Checks for environment, dev or prod
     */
    private determineEnvironment;
    /**
     * Binds querySelector contents to swipe action
     */
    private handleGuestures;
    /**
     * render
     */
    render(): AnyHTMLElement[];
}
