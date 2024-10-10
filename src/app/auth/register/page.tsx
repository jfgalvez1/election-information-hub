'use client';
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
} from '@nextui-org/react';
import { registerUser } from '../../../../convex/register';
import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

export default function Component() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const registerUser = useMutation(api.register.registerUser);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(''); // Reset any previous error message

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    registerUser({ username: userName, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <CardHeader className="flex flex-col items-start mb-4">
          <div className="text-2xl font-bold text-gray-800">Register</div>
          <div className="text-gray-600">
            Create your account to get started.
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardBody className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-gray-700">
                Username
              </label>
              <Input
                id="username"
                placeholder="John Doe"
                required
                fullWidth
                className="border border-gray-300 rounded-md"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                required
                fullWidth
                className="border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-gray-700">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                required
                fullWidth
                className="border border-gray-300 rounded-md"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {errorMessage && <div className="text-red-600">{errorMessage}</div>}
          </CardBody>
          <CardFooter className="pt-6">
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
            >
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
