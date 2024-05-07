import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <header>
      <div className="d-flex justify-content-between mx-4">
        <Link to="/">Acasă</Link>
        <div>
          <Link to="/products" className="p-3">
            Produse
          </Link>
        </div>
      </div>
    </header>
  );
}
