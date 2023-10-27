// import '@testing-library/jest-dom';

// import matchers from '@testing-library/jest-dom/matchers';

// expect.extend(matchers);

// Clean up the DOM after each test, using the afterEach method from Vitest
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});
