import React from 'react';
import Link from '../../../src/components/link';
import { Avatar } from '../avatar';
import { Container, Row, Column, Name, Username } from './style';
import { OutlineButton } from '../buttons';

export const ProfileHeader = ({ user }: any) => {
  return (
    <Container>
      <Row>
        <Avatar size={48} radius={48} src={user.profilePhoto} />
        <Column>
          <Name>{user.name}</Name>
          <Username>@{user.username}</Username>
        </Column>
      </Row>

      <Link
        to={`https://${process.env.REACT_APP_PROD_DOMAIN}/users/${
          user.username
        }`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <OutlineButton>View User</OutlineButton>
      </Link>
    </Container>
  );
};

export const CommunityProfileHeader = ({ community }) => {
  return (
    <Container>
      <Row>
        <Avatar size={48} radius={8} src={community.profilePhoto} />
        <Column>
          <Name>{community.name}</Name>
          <Username>{community.metaData.members} members</Username>
        </Column>
      </Row>

      <Link
        to={`https://${process.env.REACT_APP_PROD_DOMAIN}/${community.slug}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <OutlineButton>View Profile</OutlineButton>
      </Link>
    </Container>
  );
};

export default ProfileHeader;
