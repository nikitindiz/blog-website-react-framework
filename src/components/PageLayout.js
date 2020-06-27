import React from 'react';
import { NavLink } from 'react-router-dom';

const PageLayout = (props) => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Posts</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                Footer
            </footer>
        </>
    );
};

export default PageLayout;
