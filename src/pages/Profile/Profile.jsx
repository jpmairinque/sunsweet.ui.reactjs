import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
  Input,
  PageContainer,
  PageTitle,
  InputLabel,
  EditButton,
  PageHeader
} from "./styles";

const Profile = () => {  
  
  const [userData, setUserData] = useContext(UserContext);
  const [toggleEdit, setToggleEdit] = useState(false)
  
  
  const [newData, setNewData] = useState({
    name: userData.name,
    username: userData.username,
    email: userData.email,
    birth: userData.birth
  })

  const handleSubmit = () => {
    setToggleEdit(!toggleEdit); 
    setUserData(newData); 
  }
  
  return (

    <PageContainer>

      <PageHeader>
          <PageTitle>Profile</PageTitle>
          <EditButton 
          onClick={handleSubmit}>
            {toggleEdit ? "Save" : "Edit Profile"}
          </EditButton>
      </PageHeader>
      
      <>
        <InputLabel >
            <h3>NAME</h3>
            <span>How should we call you?</span>
            {toggleEdit ? 
            <Input 
              type="text" 
              maxLength="15"
              value={newData.name} 
              onChange= {(e)=> setNewData(prevState => ({...prevState, name:e.target.value}))}/> 
              : <p>{newData.name}</p>
            }
        </InputLabel>

        <InputLabel>
              <h3>USERNAME</h3>
              <span>It’s your ID on our plataform!</span>
              {toggleEdit ? 
              <Input 
              type="text" 
              maxLength="15"
              value={newData.username} 
              onChange={(e)=> setNewData(prevState => ({...prevState, username:e.target.value}))}/> 
              : <p>{"@" + newData.username}</p>
              }
        </InputLabel>

        <InputLabel>
            <h3>EMAIL</h3>
            <span>You can always change it.</span>
            {toggleEdit ? 
            <Input 
            type="text" 
            maxLength="25"
            value={newData.email} 
            onChange={(e)=> setNewData(prevState => ({...prevState, email:e.target.value}))}/>
            : <p>{newData.email}</p>
            }
        </InputLabel>

        <InputLabel>
            <h3>DATE OF BIRTH</h3>
            <span>When were you born?</span>
            {toggleEdit ? 
            <Input 
            type="text" 
            maxLength="15"
            value={newData.birth} 
            onChange={(e)=> setNewData(prevState => ({...prevState, birth:e.target.value}))}/> 
            : <p>{userData.birth}</p>
            }
        </InputLabel>   
      </>

    </PageContainer>
  );
};

export default Profile;
