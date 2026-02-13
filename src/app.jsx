import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div  className="body bg-dark text-light"><header  className="top-header">
        <h1>BakeOff Board</h1>
        </header>

        <div  className="app-layout">
            <nav  className="sidebar">
                <ul>
                    <li><a href="index.html">
                        Home
                        </a>
                    </li>
                    <li><a href="feed.html">
                        Feed
                        </a>
                    </li>
                    <li><a href="add_recipe.html">
                        Add Bake
                        </a>
                    </li>
                    <li><a href="cookbook.html">
                        My Cookbook
                        </a>
                    </li>
                </ul>
             </nav>
            
            <div  className="content">
                <main  className="home">App components go here</main>

                <footer>
                <p>Created by Bryce Johnson</p>
                <p>
                    <a href="https://github.com/bryjohn01/startup.git">
                    View on GitHub
                    </a>
                </p>
                </footer>
            </div>
        </div>
    </div>
    );
}