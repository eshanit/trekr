import type { Ref, PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: PropType<string | number | symbol>;
        default: null;
        validator(value: string): boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    description: {
        type: StringConstructor;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    help: {
        type: StringConstructor;
        default: null;
    };
    error: {
        type: (BooleanConstructor | StringConstructor)[];
        default: null;
    };
    hint: {
        type: StringConstructor;
        default: null;
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
    inputId: Ref<string>;
    size: import("vue").ComputedRef<any>;
    error: import("vue").ComputedRef<string | boolean | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: null;
    };
    size: {
        type: PropType<string | number | symbol>;
        default: null;
        validator(value: string): boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    description: {
        type: StringConstructor;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    help: {
        type: StringConstructor;
        default: null;
    };
    error: {
        type: (BooleanConstructor | StringConstructor)[];
        default: null;
    };
    hint: {
        type: StringConstructor;
        default: null;
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
    error: string | boolean;
    description: string;
    ui: Partial<any>;
    name: string;
    class: any;
    label: string;
    required: boolean;
    size: string | number | symbol;
    help: string;
    hint: string;
}, {}>;
export default _default;
