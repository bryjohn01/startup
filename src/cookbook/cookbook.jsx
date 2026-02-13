import React from 'react';
import './app.css';

export function Cookbook() {
  return (
    <main>
      <section>
          <h2>My Cookbook</h2>

          <table border="1">
              <tr>
              <th>Recipe</th>
              <th>Rating</th>
              <th>Last Made</th>
              </tr>
              <tr>
              <td>Banana Bread</td>
              <td>⭐⭐⭐⭐</td>
              <td>2026-01-20</td>
              </tr>
              <tr>
              <td>Brownies</td>
              <td>⭐⭐⭐⭐⭐</td>
              <td>2026-01-18</td>
              </tr>
          </table>

          <p><em>Data loaded from database (placeholder)</em></p>
      </section>
    </main>
  );
}