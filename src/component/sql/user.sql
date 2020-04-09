CREATE TABLE USER_IMAGE
(
    id serial PRIMARY KEY,
    image bytea,
    upload_date timestamptz NOT NULL,
    user_id VARCHAR (50) NOT NULL,
    CONSTRAINT fk_users_and_user_image FOREIGN KEY (user_id) REFERENCES USERS (user_id)
);


CREATE TABLE ACCESS_LOG
(
    id serial PRIMARY KEY,
    login_datetime timestamptz NOT NULL,
    logout_datetime timestamptz,
    CONSTRAINT fk_users_and_access_log FOREIGN KEY(user_id) REFERENCES USERS(user_id)
);

CREATE TABLE OTP
(
    id serial PRIMARY KEY,
    otp VARCHAR (100) NOT NULL,
    create_date timestamptz NOT NULL ,
    CONSTRAINT fk_users_and_otp FOREIGN KEY(user_id) REFERENCES USERS(user_id)
);





Create Table FEATURES
(
    id serial PRIMARY KEY,
    feature_name VARCHAR(100) UNIQUE,
    parent_feature VARCHAR(100),
    child_or_parent VARCHAR (20) DEFAULT 'child' CHECK (child_or_parent IN ('child', 'parent')),
    level VARCHAR (50),
    created_by VARCHAR (100) NOT NULL,
    create_date timestamptz NOT NULL ,
    updated_by VARCHAR (100) ,
    update_date timestamptz ,
    CONSTRAINT fk_users_and_features FOREIGN KEY (created_by) REFERENCES USERS (created_by)
);



CREATE TABLE ROLES
(
    id serial PRIMARY KEY,
    role_name VARCHAR (100) NOT NULL UNIQUE,
    role_desc VARCHAR (1024),
    role_privilege json NOT NULL,
    created_by VARCHAR (100) NOT NULL,
    create_date timestamptz NOT NULL,
    approved_by VARCHAR (100),
    approve_date timestamptz,
    CONSTRAINT fk_user_and_roles FOREIGN KEY (created_by) REFERENCES USERS (created_by),
    CONSTRAINT fk_user_and_roles FOREIGN KEY (approved_by) REFERENCES USERS (approved_by)
);



CREATE TABLE USER_ROLE
(
    id serial PRIMARY KEY,
    user_id VARCHAR (50) NOT NULL,
    role_id VARCHAR (50) NOT NULL,
    created_by VARCHAR (100) NOT NULL,
    create_date timestamptz NOT NULL,
    approved_by VARCHAR (100),
    approve_date timestamptz,
    CONSTRAINT fk_users_and_user_role FOREIGN KEY (user_id) REFERENCES USERS (user_id),
    CONSTRAINT fk_roles_and_user_role FOREIGN KEY (role_id) REFERENCES ROLES (id),
    CONSTRAINT fk_users_and_user_role FOREIGN KEY (created_by) REFERENCES USERS (created_by),
    CONSTRAINT fk_users_and_user_role FOREIGN KEY (approved_by) REFERENCES USERS (approved_by)
);

CREATE TABLE USERS
(
    id serial PRIMARY KEY,
    user_id VARCHAR (50) UNIQUE,
    user_name VARCHAR (100) NOT NULL,
    password VARCHAR (50) NOT NULL,
    mobile VARCHAR (50) NOT NULL UNIQUE,
    email VARCHAR (100) UNIQUE,
    status VARCHAR (20) DEFAULT 'N' CHECK (status IN ('N', 'A', 'I','E')),
    approved_by VARCHAR (100),
    approve_date timestamptz,
    created_by VARCHAR (100) NOT NULL,
    create_date timestamptz NOT NULL
);