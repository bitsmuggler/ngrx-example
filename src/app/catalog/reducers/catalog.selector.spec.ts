import {ItemsFeatureState, selectItems} from "./catalog.selector";

describe('Catalog Selectors', () => {
  it('should return items', () => {
    const items = [
      {
        id: 'abc',
        imageUrl: 'https://myimage.de',
        name: 'my name',
        description: 'my description',
        price: 13
      }
    ];
    const state = {
      itemsFeature: {
        items
      } as ItemsFeatureState
    }

    expect(selectItems.projector(state)).toBe(items);
  });
});
