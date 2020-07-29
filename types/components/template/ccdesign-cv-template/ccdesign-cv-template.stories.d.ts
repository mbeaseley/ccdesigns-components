declare const _default: {
    title: string;
    decorators: ((...args: any) => any)[];
};
export default _default;
export declare const Desktop: {
    (): string;
    story: {
        parameters: {
            viewport: {
                defaultViewport: string;
            };
        };
    };
};
export declare const Tablet: () => string;
export declare const Mobile: {
    (): string;
    story: {
        parameters: {
            viewport: {
                defaultViewport: string;
            };
        };
    };
};
