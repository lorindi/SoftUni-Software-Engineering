// import UserList from "./UserList";
import {formatDate} from '../utils/dateUtils'

export default function User({
  _id,
  firstName,
  lastName,
  email,
  imageUrl,
  createdAt,
  phoneNumber,
  onInfoClick,
  onDeleteClick,
  onEditClick,
}) {
  return (
    <tr>
      <td>
        <img
          src={imageUrl}
          alt={`${firstName} ${lastName}`}
          className="image"
        />
      </td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{formatDate(createdAt)}</td>

      <td className="actions">
        <button className="btn edit-btn" title="Edit" onClick={() => onEditClick(_id)}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="pen-to-square"
            className="svg-inline--fa fa-pen-to-square"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 532 512"
          >
            <path
              fill="currentColor"
              d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"
            ></path>
          </svg>
        </button>
        <button className="btn delete-btn" title="Delete" onClick={() => onDeleteClick(_id)}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="trash"
            className="svg-inline--fa fa-trash"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 498 512"
          >
            <path
              fill="currentColor"
              d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
            ></path>
          </svg>
        </button>
        <button className="btn info-btn" title="Info" onClick={() => onInfoClick(_id)}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="info"
            className="svg-inline--fa fa-info"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-150 0 512 612"
          >
            <path
              fill="currentColor"
              d="M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z"
            ></path>
          </svg>
        </button>
      </td>
    </tr>
  );
}
