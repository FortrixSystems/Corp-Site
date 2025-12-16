/**
 * Simple Authentication System
 * For admin panel access control
 * 
 * NOTE: This is a basic implementation for development.
 * For production, use a proper authentication service.
 */

export interface User {
  username: string;
  password: string; // In production, this should be hashed
  name: string;
  role: 'admin' | 'editor';
}

// Predefined admin accounts
export const ADMIN_USERS: User[] = [
  {
    username: 'admin',
    password: 'fortrix2024',
    name: 'Administrator',
    role: 'admin',
  },
  {
    username: 'editor',
    password: 'fortrix2024',
    name: 'Content Editor',
    role: 'editor',
  },
];

// Session storage key
const SESSION_KEY = 'fortrix_admin_session';

export interface Session {
  username: string;
  name: string;
  role: string;
  expiresAt: number;
}

/**
 * Authenticate user credentials
 */
export function authenticate(username: string, password: string): User | null {
  const user = ADMIN_USERS.find(
    (u) => u.username === username && u.password === password
  );
  return user || null;
}

/**
 * Create a session
 */
export function createSession(user: User): Session {
  const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
  const session: Session = {
    username: user.username,
    name: user.name,
    role: user.role,
    expiresAt,
  };

  if (typeof window !== 'undefined') {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  return session;
}

/**
 * Get current session
 */
export function getSession(): Session | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const sessionStr = localStorage.getItem(SESSION_KEY);
    if (!sessionStr) {
      return null;
    }

    const session: Session = JSON.parse(sessionStr);

    // Check if session expired
    if (Date.now() > session.expiresAt) {
      localStorage.removeItem(SESSION_KEY);
      return null;
    }

    return session;
  } catch {
    return null;
  }
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  return getSession() !== null;
}

/**
 * Logout user
 */
export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(SESSION_KEY);
  }
}

/**
 * Get current user
 */
export function getCurrentUser(): User | null {
  const session = getSession();
  if (!session) {
    return null;
  }

  return ADMIN_USERS.find((u) => u.username === session.username) || null;
}





