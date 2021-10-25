import { redirectTo } from "@contentpi/lib";
import { ChangeEvent, useState } from "react";

interface IProps {
  login(input: any): any;
  currentUrl: string;
}

export const Login = ({ login, currentUrl }: IProps) => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [invalidLogin, setInvalidLogin] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { name, value },
    } = e;
    if (name) {
      setValues((prevValues: any) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (user: IUser): Promise<void> => {
    const response = await login(user);
    if (response.error) {
      setInvalidLogin(true);
      setErrorMessage(response.message);
    } else {
      redirectTo(currentUrl || "/");
    }
  };

  return (
    <>
      <>
        <div className="wrapper">
          {invalidLogin && <div className="alert">{errorMessage}</div>}
          <div className="form">
            <p>
              <input
                type="email"
                autoComplete="off"
                className="email"
                name="email"
                placeholder="Email"
                onChange={onChange}
                value={values.email}
              />
            </p>
            <p>
              <input
                type="password"
                autoComplete="off"
                className="password"
                name="password"
                placeholder="Password"
                onChange={onChange}
                value={values.password}
              />
            </p>
            <div className="actions">
              <button onClick={(): Promise<void> => handleSubmit(values)}>
                Login
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
