/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface Cv1pbAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface Cv1pbAmbulanceWlEditor {
        "ambulanceId": string;
        "apiBase": string;
        "entryId": string;
    }
    interface Cv1pbAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface Cv1pbAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCv1pbAmbulanceWlEditorElement;
}
export interface Cv1pbAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCv1pbAmbulanceWlListElement;
}
declare global {
    interface HTMLCv1pbAmbulanceWlAppElement extends Components.Cv1pbAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLCv1pbAmbulanceWlAppElement: {
        prototype: HTMLCv1pbAmbulanceWlAppElement;
        new (): HTMLCv1pbAmbulanceWlAppElement;
    };
    interface HTMLCv1pbAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLCv1pbAmbulanceWlEditorElement extends Components.Cv1pbAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCv1pbAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLCv1pbAmbulanceWlEditorElement, ev: Cv1pbAmbulanceWlEditorCustomEvent<HTMLCv1pbAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCv1pbAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLCv1pbAmbulanceWlEditorElement, ev: Cv1pbAmbulanceWlEditorCustomEvent<HTMLCv1pbAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCv1pbAmbulanceWlEditorElement: {
        prototype: HTMLCv1pbAmbulanceWlEditorElement;
        new (): HTMLCv1pbAmbulanceWlEditorElement;
    };
    interface HTMLCv1pbAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLCv1pbAmbulanceWlListElement extends Components.Cv1pbAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCv1pbAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLCv1pbAmbulanceWlListElement, ev: Cv1pbAmbulanceWlListCustomEvent<HTMLCv1pbAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCv1pbAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLCv1pbAmbulanceWlListElement, ev: Cv1pbAmbulanceWlListCustomEvent<HTMLCv1pbAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCv1pbAmbulanceWlListElement: {
        prototype: HTMLCv1pbAmbulanceWlListElement;
        new (): HTMLCv1pbAmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "cv1pb-ambulance-wl-app": HTMLCv1pbAmbulanceWlAppElement;
        "cv1pb-ambulance-wl-editor": HTMLCv1pbAmbulanceWlEditorElement;
        "cv1pb-ambulance-wl-list": HTMLCv1pbAmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface Cv1pbAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface Cv1pbAmbulanceWlEditor {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "entryId"?: string;
        "onEditor-closed"?: (event: Cv1pbAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface Cv1pbAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: Cv1pbAmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "cv1pb-ambulance-wl-app": Cv1pbAmbulanceWlApp;
        "cv1pb-ambulance-wl-editor": Cv1pbAmbulanceWlEditor;
        "cv1pb-ambulance-wl-list": Cv1pbAmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cv1pb-ambulance-wl-app": LocalJSX.Cv1pbAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLCv1pbAmbulanceWlAppElement>;
            "cv1pb-ambulance-wl-editor": LocalJSX.Cv1pbAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLCv1pbAmbulanceWlEditorElement>;
            "cv1pb-ambulance-wl-list": LocalJSX.Cv1pbAmbulanceWlList & JSXBase.HTMLAttributes<HTMLCv1pbAmbulanceWlListElement>;
        }
    }
}
