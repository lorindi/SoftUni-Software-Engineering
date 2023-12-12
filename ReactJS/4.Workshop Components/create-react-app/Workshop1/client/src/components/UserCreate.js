export default function UserCreate({ user, onClose, onUserCreateSubmit }) {
  return (
    <div className="overlay">
      <div className="backdrop" />
      <div className="modal">
        <div className="user-container">
          <header className="headers">
            <h2>Edit User/Add User</h2>
            <button className="btn close" onClick={onClose}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="xmark"
                className="svg-inline--fa fa-xmark"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                ></path>
              </svg>
            </button>
          </header>
          <form onSubmit={(e) => onUserCreateSubmit(e, user?._id)}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user" />
                  </span>
                  <input id="firstName" name="firstName" type="text" defaultValue={user?.firstName} />
                </div>
                <p className="form-error">
                  First name should be at least 3 characters long!
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user" />
                  </span>
                  <input id="lastName" name="lastName" type="text" defaultValue={user?.lastName}/>
                </div>
                <p className="form-error">
                  Last name should be at least 3 characters long!
                </p>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-envelope" />
                  </span>
                  <input id="email" name="email" type="text" defaultValue={user?.email} />
                </div>
                <p className="form-error">Email is not valid!</p>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone number</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-phone" />
                  </span>
                  <input id="phoneNumber" name="phoneNumber" type="text" defaultValue={user?.phoneNumber}/>
                </div>
                <p className="form-error">Phone number is not valid!</p>
              </div>
            </div>
            <div className="form-group long-line">
              <label htmlFor="imageUrl">Image Url</label>
              <div className="input-wrapper">
                <span>
                  <i className="fa-solid fa-image" />
                </span>
                <input id="imageUrl" name="imageUrl" type="text" defaultValue={user?.imageUrl} />
              </div>
              <p className="form-error">ImageUrl is not valid!</p>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-map" />
                  </span>
                  <input id="country" name="country" type="text" defaultValue={user?.address.country}/>
                </div>
                <p className="form-error">
                  Country should be at least 2 characters long!
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-city" />
                  </span>
                  <input id="city" name="city" type="text" defaultValue={user?.address.city} />
                </div>
                <p className="form-error">
                  City should be at least 3 characters long!
                </p>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="street">Street</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-map" />
                  </span>
                  <input id="street" name="street" type="text" defaultValue={user?.address.street}/>
                </div>
                <p className="form-error">
                  Street should be at least 3 characters long!
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="streetNumber">Street number</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-house-chimney" />
                  </span>
                  <input id="streetNumber" name="streetNumber" type="text" defaultValue={user?.address.streetNumber} />
                </div>
                <p className="form-error">
                  Street number should be a positive number!
                </p>
              </div>
            </div>
            <div id="form-actions">
              <button id="action-save" className="btn" type="submit">
                Save
              </button>
              <button id="action-cancel" className="btn" type="button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
