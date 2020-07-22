import React from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = ({ messages }) => {
  return (
    <aside className={styles['instructions-wrapper']}>
      <ul>
        {messages.length > 0 ? (
          messages.map(message => <Message message={message} />)
        ) : (
          <p className={styles.placeholder}>No messages yet</p>
        )}
      </ul>
    </aside>
  );
};

const Message = ({ message }) => {
  const { number, isAdded } = message;

  return (
    <li className={styles.message}>
      User&nbsp;<i>{isAdded ? 'added' : ' removed '}</i> &nbsp;card:&nbsp;
      <strong>{number}</strong>
    </li>
  );
};

export default Sidebar;
