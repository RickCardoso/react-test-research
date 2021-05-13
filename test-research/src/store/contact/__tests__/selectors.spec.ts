import { getFullName } from '../selectors';

describe('getFullName', () => {
  it('should return the name with the lastname', () => {
    const fullName = getFullName({
      name: 'John',
      lastName: 'Doe',
      email: 'john@email.com',
      message: 'my message',
    });

    expect(fullName).toEqual('John Doe');
  });
});
