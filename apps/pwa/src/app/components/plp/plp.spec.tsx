import { render } from '@testing-library/react';

import Plp from './plp';

describe('Plp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Plp />);
    expect(baseElement).toBeTruthy();
  });
});
