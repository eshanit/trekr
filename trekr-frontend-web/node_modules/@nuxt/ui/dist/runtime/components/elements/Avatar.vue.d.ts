import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    src: {
        type: (BooleanConstructor | StringConstructor)[];
        default: null;
    };
    alt: {
        type: StringConstructor;
        default: null;
    };
    text: {
        type: StringConstructor;
        default: null;
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    size: {
        type: PropType<"sm" | "3xs" | "md" | "xs" | "2xs" | "lg" | "xl" | "2xl" | "3xl">;
        default: () => any;
        validator(value: string): boolean;
    };
    chipColor: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): boolean;
    };
    chipPosition: {
        type: PropType<"top-right" | "bottom-right" | "top-left" | "bottom-left">;
        default: () => any;
        validator(value: string): boolean;
    };
    chipText: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    imgClass: {
        type: StringConstructor;
        default: string;
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
    wrapperClass: import("vue").ComputedRef<string>;
    imgClass: import("vue").ComputedRef<string>;
    iconClass: import("vue").ComputedRef<string>;
    chipClass: import("vue").ComputedRef<string>;
    url: import("vue").ComputedRef<string | null>;
    placeholder: import("vue").ComputedRef<string>;
    error: import("vue").Ref<boolean>;
    onError: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    src: {
        type: (BooleanConstructor | StringConstructor)[];
        default: null;
    };
    alt: {
        type: StringConstructor;
        default: null;
    };
    text: {
        type: StringConstructor;
        default: null;
    };
    icon: {
        type: StringConstructor;
        default: () => any;
    };
    size: {
        type: PropType<"sm" | "3xs" | "md" | "xs" | "2xs" | "lg" | "xl" | "2xl" | "3xl">;
        default: () => any;
        validator(value: string): boolean;
    };
    chipColor: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): boolean;
    };
    chipPosition: {
        type: PropType<"top-right" | "bottom-right" | "top-left" | "bottom-left">;
        default: () => any;
        validator(value: string): boolean;
    };
    chipText: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    imgClass: {
        type: StringConstructor;
        default: string;
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
    alt: string;
    icon: string;
    ui: Partial<any>;
    class: any;
    src: string | boolean;
    text: string;
    size: "sm" | "3xs" | "md" | "xs" | "2xs" | "lg" | "xl" | "2xl" | "3xl";
    chipColor: any;
    chipPosition: "top-right" | "bottom-right" | "top-left" | "bottom-left";
    chipText: string | number;
    imgClass: string;
}, {}>;
export default _default;
