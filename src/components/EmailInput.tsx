import { EmailInputField, RequestEmailBtn } from "./styles/MainStyles.style";

interface EmailInputProps {
  email: string;
  setEmail: (email: string) => void;
  noError: boolean;
  setNoError: (error: boolean) => void;
}

function validateEmail(myEmail: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(myEmail).toLowerCase());
}

const EmailInput = ({
  email,
  setEmail,
  noError,
  setNoError,
}: EmailInputProps) => {
  return (
    <div>
      <EmailInputField
        placeholder={email}
        type="text"
        onChange={(event) => setEmail(event.target.value)}
      />
      <RequestEmailBtn
        onClick={() => {
          setEmail(email);
          setNoError(validateEmail(email));
        }}
      >
        Request Access
      </RequestEmailBtn>
    </div>
  );
};

export default EmailInput;
