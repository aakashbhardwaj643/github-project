import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { Work } from  '@styled-icons/material/Work';
import { Calendar } from '@styled-icons/boxicons-regular/Calendar';
import { Location } from '@styled-icons/entypo/Location'; 
import GithubCorner from 'react-github-corner';

const Profile = styled.header`
  height: 80vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 500px) {
    height: 100vh;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 150px;
  border: 10px solid #04124E;
  margin-right: 20px;

  @media screen and (max-width: 500px) {
    margin-right: 0;
    width: 120px;
  }
`;

const UserDetails = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const AdditionalInfo = styled.div`
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  color: #fff;

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const UserName = styled.h2`
  font-size: 1.5rem;
  color: #A3D4E7;
`;

const BasicInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const BasicStats = styled.div`
  display: flex;
  margin-left: 100px;
  margin-top: 50px;

  @media screen and (max-width: 500px) {
    margin-left: 0;
  }
`;

const Card = styled.div`
  color: #A3D4E7;
  background: #04124E;
  font-size: 1rem;
  padding: 5px 0;
  margin: 0.5rem;
  width: 100px;
  border-radius: 5px;
  text-align: center;
  line-height: 0;

  @media screen and (max-width: 500px) {
    margin: 0.5rem 0.2rem;
  }
`;

const StatsCards = styled.div`
  display: flex;
`;

const WorkPlace = styled.div`
  color: #A3D4E7;
  display: flex;
  align-items: center;
`;

const WorkIcon = styled(Work)`
  width: 1.2rem;
`;

const DateJoined = styled.div`
  color: #A3D4E7;
  display: flex;
  align-items: center;
`;

const DateIcon = styled(Calendar)`
  width: 1.2rem;
`;

const UserLocation = styled.div`
  color: #A3D4E7;
  display: flex;
  align-items: center;
`;

const LocationIcon = styled(Location)`
  width: 1.2rem;
`;

const Error = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorText = styled.div`
  color: #A3D4E7;
`;

const GithubProfile = (props) => {
  const renderProfile = () => {
    if(props.profile[0] && !props.errors[0]) {
      return (
        <motion.div
          initial = {{opacity: 0}}
          animate = {{opacity: 1}}
          transition = {{duration: 1}}
        >
          <GithubCorner rel="noopener noreferrer" target="_blank" href="https://github.com/aakashbhardwaj643/github-project"/>
          <BasicInfo>
            <Avatar src={props.profile[0].avatar_url} alt="avatar"/>
            <UserDetails>
              <Name>{props.profile[0].name}</Name>
              <UserName>
                <a href={`${props.profile[0].html_url}`}>
                  {`@${props.profile[0].login}`}
                </a>
              </UserName>
              <AdditionalInfo>
                <WorkPlace>
                  <WorkIcon/>
                  {props.profile[0].company ? `: ${props.profile[0].company}` : ""}
                </WorkPlace>
                <DateJoined>
                  <DateIcon/>
                  {`: Joined ${props.profile[0].created_at.slice(0, 10)}`}
                </DateJoined>
                <UserLocation>
                  <LocationIcon/>
                  {`: ${props.profile[0].location}`}
                </UserLocation>
              </AdditionalInfo>
            </UserDetails>
          </BasicInfo>
          <BasicStats>
            <StatsCards>
              <Card>
                <h3>{props.profile[0].public_repos}</h3>
                <br/>
                <p>Repos</p>
              </Card>
              <Card>
                <h3>{props.profile[0].followers}</h3>
                <br/>
                <p>Followers</p>
              </Card>
              <Card>
                <h3>{props.profile[0].following}</h3>
                <br/>
                <p>Following</p>
              </Card>
            </StatsCards>            
          </BasicStats>
        </motion.div>
      );
    } else if(!props.profile[0] && props.errors[0]) {
      return (
        <Error>
          <ErrorText>
            User Does Not Exist!
          </ErrorText>
        </Error>
      );
    }
  }

  return (
    <Profile>
      {renderProfile()}
    </Profile>
  );
};

const mapStateToProps = (state) => {
  return { profile: state.profile, errors: state.errors };
}

export default connect(mapStateToProps)(GithubProfile);