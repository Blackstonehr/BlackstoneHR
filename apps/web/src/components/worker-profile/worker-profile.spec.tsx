import { render } from '@testing-library/react';

import WorkerProfile from './worker-profile';

describe('WorkerProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkerProfile />);
    expect(baseElement).toBeTruthy();
  });
});
