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
        <EditButton>A</EditButton>
      </PageHeader>

        <InputLabel>
          <h3>NAME</h3>
          <span>How should we call you?</span>
          <h3>{profileData.name} </h3>
          <Input type="text" />
        </InputLabel>
        <InputLabel>
          <h3>USERNAME</h3>
          <span>It’s your ID on our plataform!</span>
          <Input type="text" />
        </InputLabel>
        <InputLabel>
          <h3>EMAIL</h3>
          <span>You can always change it.</span>
          <Input type="text" />
        </InputLabel>
        <InputLabel>
          <h3>DATE OF BIRTH</h3>
          <span>When were you born?</span>
          <Input type="text" />
        </InputLabel>
        
    </PageContainer>
  );
};

export default Profile;
