import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface User {
  id: number;
  name: string;
  username: string;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Enter your username" },
        password: { label: "Password", type: "password", placeholder: "Enter your password" }
      },
      async authorize(credentials) {
        // Replace with your own logic to validate the user
        const user = { id: 1, name: 'User', username: credentials.username };

        // Here, you should fetch and validate the user from your database
        if (credentials.username === 'admin' && credentials.password === 'password') {
          return user; // Return user object on success
        } else {
          return null; // Return null on failure
        }
      }
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Customize the sign-in page
  },
  session: {
    strategy: 'jwt', // Use JWT for session management
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Store user ID in token
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id; // Add user ID to session
      return session;
    },
  },
});
