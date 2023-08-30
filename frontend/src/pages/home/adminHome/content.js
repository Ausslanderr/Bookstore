
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Admin = () => {
  
  const {adminUser } = useAuth();
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#f0f7fb', padding: '20px' }}>
      <h1 style={{textDecoration: 'underline'}}>Painel de Gerenciamento</h1>
      <h3>Ola {adminUser}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <div className="section" style={styles.section}>
          <h2>Gerenciar Pedidos</h2>
          <Link to="/gerenciar-pedidos" style={styles.buttonLink}>Ver Pedidos</Link>
        </div>
        <div className="section" style={styles.section}>
          <h2>Gerenciar Usuários</h2>
          <Link to="/gerenciar-usuarios" style={styles.buttonLink}>Ver Usuários</Link>
        </div>
        <div className="section" style={styles.section}>
          <h2>Gerenciar Estoque</h2>
          <Link to="/gerenciar-estoque" style={styles.buttonLink}>Ver Estoque</Link>
        </div>
      </div>
    </div>
  );
};
//#fff
const styles = {
  section: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    width: '30%',
  },
  buttonLink: {
    display: 'inline-block',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};

export default Admin;
