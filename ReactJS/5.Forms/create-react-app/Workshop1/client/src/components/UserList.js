import User from "./User";
import { useState } from "react";
import UserDetails from "./UserDetails";
import * as userService from "../services/userService";
import UserCreate from "./UserCreate";
import UserDelete from "./UserDelete";
export default function UserList({
  users,
  onUserCreateSubmit,
  onUserDelete,
  onUserUpdateSubmit,
  formValues,
  formChangeHandler,
  formErrors,
  formValidate,
}) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteUser, setShowDeleteUser] = useState(null);
  const [showEditUser, setShowEditUser] = useState(null);
  const [showAddUser, setShowAddUser] = useState(false);

  async function onInfoClick(userId) {
    const user = await userService.getOne(userId);
    setSelectedUser(user);
  }
  const onClose = () => {
    setSelectedUser(null);
    setShowAddUser(false);
    setShowDeleteUser(null);
    setShowEditUser(null);
  };
  const onUserAddClick = () => {
    setShowAddUser(true);
  };

  const onUserCreateSubmitHandler = (e) => {
    onUserCreateSubmit(e);
    setShowAddUser(false);
  };

  const onUserUpdateSubmitHandler = (e, userId) => {
    onUserUpdateSubmit(e, userId);
    setShowEditUser(null);
    // onClose();
  };
  const onDeleteClick = (userId) => {
    // setDeleteUserId({userId})
    setShowDeleteUser(userId);
  };
  const onDeleteHandler = () => {
    onUserDelete(showDeleteUser);
    onClose();
  };
  const onEditClick = async (userId) => {
    const user = await userService.getOne(userId);
    setShowEditUser(user);
  };
  return (
    <>
      {selectedUser && <UserDetails {...selectedUser} onClose={onClose} />}
      {showAddUser && (
        <UserCreate
          onClose={onClose}
          onUserCreateSubmit={onUserCreateSubmitHandler}
          formValues={formValues}
          formChangeHandler={formChangeHandler}
          formErrors={formErrors}
          formValidate={formValidate}
        />
      )}
      {showDeleteUser && (
        <UserDelete onClose={onClose} onDelete={onDeleteHandler} />
      )}
      {showEditUser && (
        <UserCreate
          user={showEditUser}
          onClose={onClose}
          onUserCreateSubmit={onUserUpdateSubmitHandler}
          formValues={formValues}
          formChangeHandler={formChangeHandler}
          formErrors={formErrors}
          formValidate={formValidate}
        />
      )}
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>
                First name
                <svg
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Last name
                <svg
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Email
                <svg
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Phone
                <svg
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Created
                <svg
                  className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <User
                key={u._id}
                {...u}
                onInfoClick={onInfoClick}
                onDeleteClick={onDeleteClick}
                onEditClick={onEditClick}
              />
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn-add btn" onClick={onUserAddClick}>
        Add new user
      </button>
    </>
  );
}
