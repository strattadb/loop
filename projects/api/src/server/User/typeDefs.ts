import { gql } from 'apollo-server-express';

import { typeDefs as channelsTypeDefs } from './channels';
import { typeDefs as workspacesTypeDefs } from './workspaces';

export const User = gql`
  type User implements Node {
    id: ID!

    username: String!
    usernameIdentifier: String!

    email: Email!
    unverifiedEmail: Email

    firstName: String
    lastName: String

    workspaces(
      first: Int
      after: String
      last: Int
      before: String
    ): UserWorkspaceConnection!

    channels(
      workspaceId: ID!

      first: Int
      after: String
      last: Int
      before: String
    ): UserChannelConnection!
  }
`;

export default [User, ...workspacesTypeDefs, ...channelsTypeDefs];
