import React, { useState } from 'react';
import './App.css';
import fundo from './img/fundo.jpg'; // Imagem de fundo
import icon from './img/icone-150x150.png'; // Ícone
import { FaUser, FaCar, FaFileContract, FaMapMarkedAlt, FaEnvelope } from 'react-icons/fa'; // Ícones do React Icons

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const backgroundStyle = {
    backgroundImage: `url(${fundo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row',
  };

  return (
    <div style={backgroundStyle}>
      {/* Menu lateral */}
      <div className="sidebar">
        <div className="sidebar-item" onClick={() => setActiveSection('home')}>
          <FaEnvelope size={24} /> <span>Home</span>
        </div>
        <div className="sidebar-item" onClick={() => setActiveSection('clientes')}>
          <FaUser size={24} /> <span>Cadastro de Clientes</span>
        </div>
        <div className="sidebar-item" onClick={() => setActiveSection('veiculos')}>
          <FaCar size={24} /> <span>Gestão de Veículos</span>
        </div>
        <div className="sidebar-item" onClick={() => setActiveSection('contratos')}>
          <FaFileContract size={24} /> <span>Gestão de Contratos</span>
        </div>
        <div className="sidebar-item" onClick={() => setActiveSection('reservas')}>
          <FaMapMarkedAlt size={24} /> <span>Mapa de Reservas</span>
        </div>
        <div className="sidebar-item" onClick={() => setActiveSection('contact')}>
          <FaEnvelope size={24} /> <span>Contato</span>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="content">
        <header className="header">
          <img src={icon} alt="Ícone DriveNow" className="logo-small" />
          <span className="header-text">DriveNow</span>
        </header>

        {activeSection === 'home' && (
          <div className="chat-container">
            <div className="chat-message">
              <h1><img src={icon} alt="Ícone DriveNow" className="logo" /> A LIBERDADE AO SEU ALCANCE</h1>
              <br />
              <p>O sistema perfeito para a gestão de frotas de veículos, facilitando o controle de clientes, contratos e reservas.</p>
              <p>Bem-vindos Ao futuro da locação de veículos. 
              Uma solução inovadora que vai revolucionar a forma como as pessoas acessam e utilizam veículos.</p>
              <p><br></br> </p>
              <p><h3>Imagine um sistema que simplifica completamente o processo de locação, oferecendo conveniência, eficiência e uma experiência excepcional para os usuários</h3></p>
              
            </div>
          </div>
        )}
        {activeSection === 'clientes' && (
          <div className="chat-container">
            <div className="chat-message">
              <h2>Cadastro de Clientes</h2>
              <p>Gerencie todas as informações dos seus clientes de forma fácil e organizada.</p>
              <ul>
                <li><strong>Criação de Perfil:</strong> Registre os dados essenciais de seus clientes, como nome, endereço, telefone e e-mail.</li>
                <li><strong>Histórico de Alugueis:</strong> Acompanhe o histórico de veículos alugados pelos seus clientes.</li>
                <li><strong>Atualizações:</strong> Mantenha as informações sempre atualizadas com facilidade.</li>
                
              </ul>
            </div>
          </div>
        )}
        {activeSection === 'veiculos' && (
          <div className="chat-container">
            <div className="chat-message">
              <h2>Gestão de Veículos</h2>
              <p>Controle todas as marcas e modelos de veículos disponíveis na sua frota.</p>
              <ul>
                <li><strong>Cadastro de Veículos:</strong> Adicione novos veículos à sua frota, com informações como marca, modelo, ano e placa.</li>
                <li><strong>Status de Disponibilidade:</strong> Acompanhe a disponibilidade de cada veículo em tempo real.</li>
                <li><strong>Manutenção:</strong> Gerencie o histórico de manutenção de cada veículo.</li>
              </ul>
            </div>
          </div>
        )}
        {activeSection === 'contratos' && (
          <div className="chat-container">
            <div className="chat-message">
              <h2>Gestão de Contratos</h2>
              <p>Mantenha todos os contratos de locação organizados e acessíveis.</p>
              <ul>
                <li><strong>Criação de Contratos:</strong> Gere contratos de aluguel de veículos de maneira automática, com todos os termos e condições.</li>
                <li><strong>Validade e Renovação:</strong> Acompanhe a validade dos contratos e gerencie renovações de forma eficiente.</li>
              </ul>
            </div>
          </div>
        )}
        {activeSection === 'reservas' && (
          <div className="chat-container">
            <div className="chat-message">
              <h2>Mapa de Reservas</h2>
              <p>Visualize e gerencie as reservas de veículos de maneira intuitiva.</p>
              <ul>
                <li><strong>Calendário de Reservas:</strong> Veja todas as reservas em um mapa de calendário para fácil visualização e gestão.</li>
                <li><strong>Notificações:</strong> Receba alertas quando um veículo estiver disponível ou reservado.</li>
                <li><strong>Cancelamentos:</strong> Gerencie cancelamentos e atualizações de reservas.</li>
              </ul>
            </div>
          </div>
        )}
        {activeSection === 'contact' && (
          <div className="chat-container">
            <div className="chat-message">
              <h2>Contato</h2>
              <p>Entre em contato conosco para mais informações:</p>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" className="form-control" id="name" placeholder="Seu nome" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder="Seu e-mail" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" id="message" rows="3" placeholder="Sua mensagem"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
            </div>
          </div>
        )}
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} DriveNow. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
