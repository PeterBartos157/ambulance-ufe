import { newSpecPage } from '@stencil/core/testing';
import { Cv1pbAmbulanceWlList } from '../cv1pb-ambulance-wl-list';

describe('cv1pb-ambulance-wl-list', () => {
    it('renders', async () => {
      const page = await newSpecPage({
          components: [Cv1pbAmbulanceWlList],
          html: `<cv1pb-ambulance-wl-list></cv1pb-ambulance-wl-list>`,
      });

      const wlList = page.rootInstance as Cv1pbAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length;

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
    });
});
