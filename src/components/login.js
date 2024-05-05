import TwitterLogin from "react-twitter-login";

const authHandler = (err, data) => {
  console.log("Result" , err, data);
};

export default function Login() {
  return (
    <TwitterLogin
      authCallback={authHandler}
      consumerKey={"NTZUV1NyeXo1YkZ6MkJIMVU5Tm86MTpjaQ"}
      consumerSecret={"v4ftPHxWXhwVKFosr4umwH5rv4DaO-UTrLMZ_zBFsVMpJo_NFJ"}
      buttonTheme={"dark"}
    />
  );
}
