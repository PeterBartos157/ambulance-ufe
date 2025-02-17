import { newSpecPage } from '@stencil/core/testing';
import { Cv1pbAmbulanceWlList } from '../cv1pb-ambulance-wl-list';

describe('cv1pb-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv1pbAmbulanceWlList],
      html: `<cv1pb-ambulance-wl-list></cv1pb-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <cv1pb-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cv1pb-ambulance-wl-list>
    `);
  });
});
