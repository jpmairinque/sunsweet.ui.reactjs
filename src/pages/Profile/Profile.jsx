import React from "react";
import { useState } from "react";
import {
  Input,
  PageContainer,
  PageTitle,
  InputLabel,
  EditButton,
  PageHeader
} from "./styles";

const Profile = () => {


  const [toggleEdit, setToggleEdit] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Karla Vaz",
    username: "thekarlavaz",
    email: "karlavaz@mail.com",
    birth: "08/05/1997",
  });

  return (
    <PageContainer>

      <PageHeader>
        <PageTitle>Profile</PageTitle>
        <EditButton onClick={()=>{setToggleEdit(!toggleEdit)}}>{toggleEdit ? "Save" : "Edit Profile"}</EditButton>
      </PageHeader>

        <InputLabel>
            <h3>NAME</h3>
            <span>How should we call you?</span>
            {toggleEdit ? <Input type="text" value={profileData.name} 
            onChange={(e)=> setProfileData(prevState => ({...prevState, name:e.target.value}))}/> : <p>{profileData.name}</p>}
        </InputLabel>

        <InputLabel>
            <h3>USERNAME</h3>
            <span>It’s your ID on our plataform!</span>
            {toggleEdit ? <Input type="text" value={profileData.username} 
            onChange={(e)=> setProfileData(prevState => ({...prevState, username:e.target.value}))}/> : <p>{profileData.username}</p>}
        </InputLabel>

        <InputLabel>
            <h3>EMAIL</h3>
            <span>You can always change it.</span>
            {toggleEdit ? <Input type="text" value={profileData.email} 
            onChange={(e)=> setProfileData(prevState => ({...prevState, email:e.target.value}))}/> : <p>{profileData.email}</p>}
        </InputLabel>

        <InputLabel>
            <h3>DATE OF BIRTH</h3>
            <span>When were you born?</span>
            {toggleEdit ? <Input type="text" value={profileData.birth} 
            onChange={(e)=> setProfileData(prevState => ({...prevState, birth:e.target.value}))}/> : <p>{profileData.birth}</p>}
        </InputLabel>
        
    </PageContainer>
  );
};

export default Profile;
