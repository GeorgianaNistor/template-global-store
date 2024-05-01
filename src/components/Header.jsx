import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../store/Cart/context';
import { useContext } from 'react';

export default function Header() {
  const { state } = useContext(CartContext);

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
