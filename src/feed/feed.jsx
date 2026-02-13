import React from 'react';
import './app.css';

export function Feed() {
  return (
    <main>
        <section>
            <h2>Community Feed</h2>

            <article>
                <h3>Monkey Bread</h3>
                <img src="monkeybread.jpeg" alt="Monkey Bread" width="200" />
                <p>Rating: ⭐⭐⭐⭐☆</p>
                <p>Notes: Moist and flavorful, would add more cinnamon.</p>
                <p>Posted by: jeff</p>
            </article>

            <article>
                <h3>Apple Pie</h3>
                <img src="apple-pie.jpeg" alt="Apple Pie" width="200" />
                <p>Rating: ⭐⭐⭐⭐⭐</p>
                <p>Notes: Perfect texture.</p>
                <p>Posted by: jane</p>
            </article>
          </section>

          <section>
            <h2>Live Updates (Websocket Placeholder)</h2>
            <ul>
                <li>@alex just posted Sourdough Bread</li>
                <li>@sam rated Brownies ⭐⭐⭐⭐⭐</li>
            </ul>
          </section>
      </main>
  );
}