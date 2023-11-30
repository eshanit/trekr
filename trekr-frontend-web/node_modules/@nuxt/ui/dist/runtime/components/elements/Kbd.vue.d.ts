import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    value: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: PropType<string | number | symbol>;
        default: () => any;
        validator(value: string): boolean;
    };
    class: {
        type: PropType<any>;
        default: undefined;
    };
    ui: {
        type: PropType<Partial<any>>;
        default: undefined;
    };
}, {
    ui: import("vue").ComputedRef<any>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    kbdClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: PropType<string | number | symbol>;
        default: () => any;
        validator(value: string): boolean;
    };
    class: {
        type: PropType<any>;
        default: undefined;
    };
    ui: {
        type: PropType<Partial<any>>;
        default: undefined;
    };
}>>, {
    ui: Partial<any>;
    class: any;
    value: string;
    size: string | number | symbol;
}, {}>;
export default _default;
