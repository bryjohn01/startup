import React from 'react';
import './app.css';

export function Login() {
  return (
    <main className="home">
      <section>
          <h2>Welcome to BakeOff Board</h2>
          <form>
              <label>Email</label><br />
              <input type="email" placeholder="you@example.com" /><br /><br />

              <label>Password</label><br />
              <input type="password" /><br /><br />

              <button type="submit">Login</button>
              <button type="submit">Create</button>
          </form>
      </section>

      <section>
        <h3>Logged in as:</h3>
        <p><strong>Username</strong> (placeholder)</p>
      </section>

    </main>
  );
}