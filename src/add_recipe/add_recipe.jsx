import React from 'react';
import './app.css';

export function Add_Recipe() {
  return (
    <main>
      <section>
          <h2>Add a New Bake</h2>

          <form>
              <label>Recipe name</label><br />
              <input type="text" /><br /><br />

              <label>Recipe source URL</label><br />
              <input type="url" /><br /><br />

              <label>Rating</label><br />
              <select>
              <option>⭐</option>
              <option>⭐⭐</option>
              <option>⭐⭐⭐</option>
              <option>⭐⭐⭐⭐</option>
              <option>⭐⭐⭐⭐⭐</option>
              </select><br /><br />

              <label>Notes</label><br />
              <textarea></textarea><br /><br />

              <button type="submit">Post</button>
          </form>
      </section>

      <section>
          <h3>Recipe Suggestions (3rd-Party API Placeholder)</h3>
          <p>Results from external recipe API will appear here.</p>
      </section>
    </main>
  );
}