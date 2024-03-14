// Import the necessary dependencies for testing
import { signUp } from './AuthContext';

// Mock the createUserWithEmailAndPassword function
jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn(),
}));

describe('AuthContext', () => {
  it('should call createUserWithEmailAndPassword with the provided email and password', () => {
    // Arrange
    const email = 'test@example.com';
    const password = 'password';

    // Act
    signUp(email, password);

    // Assert
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(email, password);
  });
});
