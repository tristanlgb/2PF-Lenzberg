import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StateFeatureEffects } from './state-feature.effects';

describe('StateFeatureEffects', () => {
  let actions$: Observable<any>;
  let effects: StateFeatureEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StateFeatureEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StateFeatureEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
