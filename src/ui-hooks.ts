import { DOMmanipulator } from "./dom-manipulator";

import inlineEditorTemplate from './assets/inline-editor.html';

import * as MustacheIt from 'mustache';
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js?url";

export class UIHooks {
    constructor(private onHookingCompleted: any) {
        window.addEventListener("DOMContentLoaded", () => {
            this.loadHooks();

            if (onHookingCompleted)
                onHookingCompleted();
        });
    }

    loadHooks() {    
        // Search for inline code editors (from exercise pages)  
        let hookIdx = -1;
        for (let hookElem of document.querySelectorAll('av-elem')) {
            hookIdx++;

            let type = hookElem.getAttribute('type');

            switch (type) {
                case 'ieditor': {
                    let renderedTemplate = MustacheIt.render(inlineEditorTemplate({}), {
                        "hookIdx": hookIdx
                    });

                    let template = DOMmanipulator.elemsFromTemplate(renderedTemplate);
                    hookElem.after(template[0].cloneNode(true))

                    let parentElement = hookElem.parentElement;
                    if (parentElement.tagName.toLowerCase() != 'li')
                        parentElement = parentElement.parentElement;

                    let clonedNode = template[1].cloneNode(true);
                    for (let attr of hookElem.attributes) {
                        (clonedNode.firstChild.nextSibling as HTMLElement).setAttribute(attr.name, attr.value);
                    }

                    parentElement.lastChild.after(clonedNode);
                    hookElem.remove()

                    break;
                }
            }
        }

        // Search for av-tip        
        for (let hookElem of document.querySelectorAll('[class*=av-tippie]')) {
            hookElem.setAttribute("data-bs-toggle", "tooltip");
            hookElem.setAttribute("data-bs-placement", "top");

            new bootstrap.Tooltip(hookElem)
        }

        // Search for counters
        for (let counter of document.querySelectorAll('[class=counter]')) {
            counter.textContent = "0";

            let updateCounter = () => {
                const target = parseInt(counter.getAttribute("data-target"))
                let count = parseInt(counter.textContent);

                if (count < target) {
                    counter.textContent = `${Math.ceil(++count)}`;
                    setTimeout(updateCounter, 5);
                } else {
                    counter.textContent = target.toString();
                }
            };

            setInterval(updateCounter, 2000);
        };

        // Move counters below the logo
        let counters = document.querySelector('[class=counters]');
        if (counters) {
            //let logo = document.querySelector('[class=flex-container]');
            //logo.after(counters);
        }
    }
}