import "./Notifications.css";
import {
  activitiesData,
  contactsData,
  notificationsData,
} from "../../data/notificationsData";
import { truncateText } from "../../utils/stringUtils";

const NotificationItem = ({ icon, message, time }) => (
  <li className="notification-item">
    <div className="notification-icon">{icon}</div>
    <div className="notification-content">
      <span className="notification-message">{truncateText(message)}</span>
      <span className="notification-time">{time}</span>
    </div>
  </li>
);

const ActivityItem = ({ icon, message, time, user }) => (
  <li className="activity-item">
    <div className="activity-icon-container">
      <div className="user-avatar-placeholder"></div>{" "}
    </div>
    <div className="activity-content">
      <span className="activity-message">{truncateText(message)}</span>
      <span className="activity-time">{time}</span>
    </div>
  </li>
);

const ContactItem = ({ name, avatar }) => (
  <li className="contact-item">
    <div className="contact-avatar-placeholder"></div>
    <span className="contact-name">{truncateText(name)}</span>
  </li>
);

const Notifications = () => {
  return (
    <aside className="notifications">
      <section className="notifications-section">
        <h3>Notifications</h3>
        <ul>
          {notificationsData.map((notification) => (
            <NotificationItem key={notification.id} {...notification} />
          ))}
        </ul>
      </section>

      <section className="activities-section">
        <h3>Activities</h3>
        <ul>
          {activitiesData.map((activity) => (
            <ActivityItem key={activity.id} {...activity} />
          ))}
        </ul>
      </section>

      <section className="contacts-section">
        <h3>Contacts</h3>
        <ul>
          {contactsData.map((contact) => (
            <ContactItem key={contact.id} {...contact} />
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Notifications;
