import React from 'react';
import {
  MdDashboard,
  MdSwapHoriz,
  MdHistory,
  MdWallet,
  MdAccountCircle,
  MdHeadsetMic,
  MdHelp,
  MdLogout
} from 'react-icons/md';
import './Sidebar.css';

function Sidebar({ isOpen }) {
  const menuItems = [
    { icon: MdDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: MdSwapHoriz, label: 'Transfers', id: 'transfers' },
    { icon: MdHistory, label: 'Transactions', id: 'transactions' },
    { icon: MdWallet, label: 'Activate your TRB Wallet', id: 'activate' },
    { icon: MdWallet, label: 'Manage Wallets', id: 'manage' },
  ];

  const bottomItems = [
    { icon: MdAccountCircle, label: 'Account', id: 'account' },
    { icon: MdHeadsetMic, label: 'Call Center', id: 'call' },
    { icon: MdHelp, label: 'Help', id: 'help' },
    { icon: MdLogout, label: 'Log Out', id: 'logout', color: '#ff4444' },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-circle">TRB</div>
          <div className="logo-text">
            <h2>TRB Bank</h2>
            <p>Digital Wallet</p>
          </div>
        </div>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <item.icon size={20} />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-bottom">
        {bottomItems.map((item) => (
          <div
            key={item.id}
            className="menu-item"
            style={{ color: item.color || '#fff' }}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
