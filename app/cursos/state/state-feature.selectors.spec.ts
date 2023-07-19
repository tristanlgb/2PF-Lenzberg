import * as fromStateFeature from './state-feature.reducer';
import { selectStateFeatureState } from './state-feature.selectors';

describe('StateFeature Selectors', () => {
  it('should select the feature state', () => {
    const result = selectStateFeatureState({
      [fromStateFeature.stateFeatureFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
