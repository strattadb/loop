import { gql } from 'apollo-server-express';

const ReactableReactionConnection = gql`
  type ReactableReactionConnection {
    pageInfo: PageInfo!
    totalCount: NonNegativeInt!
    edges: [ReactableReactionEdge]
  }
`;

const ReactableReactionEdge = gql`
  type ReactableReactionEdge {
    cursor: Cursor!
    node: Reaction!
  }
`;

export default [ReactableReactionConnection, ReactableReactionEdge];
