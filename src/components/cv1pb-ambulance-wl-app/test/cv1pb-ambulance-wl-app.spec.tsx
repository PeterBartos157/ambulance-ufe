import { newSpecPage } from '@stencil/core/testing';
import { Cv1pbAmbulanceWlApp } from '../cv1pb-ambulance-wl-app';

describe('cv1pb-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [Cv1pbAmbulanceWlApp],
      html: `<cv1pb-ambulance-wl-app base-path="/"></cv1pb-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("cv1pb-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [Cv1pbAmbulanceWlApp],
      html: `<cv1pb-ambulance-wl-app base-path="/ambulance-wl/"></cv1pb-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("cv1pb-ambulance-wl-list");
  });
});
