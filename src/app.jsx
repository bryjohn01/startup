import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Feed } from './feed/feed';
import { Cookbook } from './cookbook/cookbook';
import { Add_Recipe } from './add_recipe/add_recipe';

export default function App() {
  return (
    <BrowserRouter>
        <div  className="body bg-dark text-light"><header  className="top-header">
            <h1>BakeOff Board</h1>
            </header>

            <div  className="app-layout">
                <nav  className="sidebar">
                    <ul>
                        <li><NavLink to="/">
                            Home
                            </NavLink>
                        </li>
                        <li><NavLink to="/feed">
                            Feed
                            </NavLink>
                        </li>
                        <li><NavLink to="/add_recipe">
                            Add Bake
                            </NavLink>
                        </li>
                        <li><NavLink to="/cookbook">
                            My Cookbook
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                
                <div  className="content">
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/feed' element={<Feed />} />
                        <Route path='/add_recipe' element={<Add_Recipe />} />
                        <Route path='/cookbook' element={<Cookbook />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>

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
    </BrowserRouter>
    );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}