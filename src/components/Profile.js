import { useEffect, useState } from "react";

const Profile = ({ profession }) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getUserInfo();
  }, []);
  //here you can destructure props object like that or you can write props and access like props.name and props.profession
  async function getUserInfo() {
    const data = await fetch("https://api.github.com/users/navya-polishetti");
    const json = await data.json();
    console.log(json);
    setUserInfo(json);
  }

  return (
    <div>
      <h1>This is a Functional Profile Component</h1>
      <h3>Name: {userInfo.name}</h3>
      <h3>Public_repos: {userInfo.public_repos}</h3>
      <h3>Profession: {profession}</h3>
      <img src="https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg"></img>
    </div>
  );
};

export default Profile;
