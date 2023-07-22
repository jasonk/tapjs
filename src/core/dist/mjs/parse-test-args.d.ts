import type { Base, BaseOpts } from './base.js';
type Opts = Exclude<BaseOpts, 'parent'> & {
    parent?: any;
};
export type TestArgs<T extends Base, O extends Opts = Opts> = [] | [name: string] | [cb: ((t: T) => any) | false] | [extra: O] | [name: string | number, cb: ((t: T) => any) | false] | [name: string | number, extra: O] | [extra: O, cb: ((t: T) => any) | false] | [
    name: string | number,
    extra: O,
    cb: false | ((t: T) => any),
    defaultName?: string
];
export declare const parseTestArgs: <T extends Base<import("./base.js").TapBaseEvents>, O extends Opts = Opts>(...args: TestArgs<T, O>) => O;
export {};
//# sourceMappingURL=parse-test-args.d.ts.map