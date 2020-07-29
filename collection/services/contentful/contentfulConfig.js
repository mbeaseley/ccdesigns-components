export function getConfig(spaceName) {
    return Spaces.find(s => s.name === spaceName);
}
const Spaces = [
    {
        name: 'master',
        id: '43i5e5k8e66i',
        deliveryToken: '70d056900c2105f59e34bda4393b9c1db14663dc59b959d9da5f51d20dc72f4d',
        previewToken: '090f73cec4a1d179f20c13de946c8ff90bc80c8e04bf2ec26c79b8c13672ddd3',
    },
];
