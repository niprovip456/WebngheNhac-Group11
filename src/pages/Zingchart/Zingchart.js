import React from 'react';
import './Zingchart.scss';

function Zingchart() {
  return (
    <div className="container">
      <h1>Chat Bot Free</h1>
      <table className="link-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Liên kết</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chat1</td>
            <td>
              <a href="https://share.wendabao.net" target="_blank" rel="noopener noreferrer">
                https://share.wendabao.net
              </a>
            </td>
          </tr>
          <tr>
            <td>Chat2</td>
            <td>
              <a href="http://chat5.aiyunos.top" target="_blank" rel="noopener noreferrer">
                http://chat5.aiyunos.top
              </a>
            </td>
          </tr>
          <tr>
            <td>Chat3</td>
            <td>
              <a href="https://chat.tinycms.xyz:3002/#/chat" target="_blank" rel="noopener noreferrer">
                https://chat.tinycms.xyz:3002/#/chat
              </a>
            </td>
          </tr>
          <tr>
            <td>Chat4</td>
            <td>
              <a href="https://www.ichat2019.com/" target="_blank" rel="noopener noreferrer">
                https://www.ichat2019.com/
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Zingchart;
