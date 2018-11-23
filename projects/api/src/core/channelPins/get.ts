import db, { maybeAddTransactionToQuery } from '../db';
import { DBOptions } from '../types';
import { channelPinsTableName } from './constants';
import { ChannelPin } from './types';

export async function getChannelPinById(
  id: ChannelPin['id'],
  options: DBOptions = {},
): Promise<ChannelPin | null> {
  const channelPin = await getChannelPinBy({ id }, options);

  return channelPin;
}

export type GetChannelPinByArgs = Pick<ChannelPin, 'id'>;

async function getChannelPinBy(
  args: GetChannelPinByArgs,
  options: DBOptions = {},
): Promise<ChannelPin | null> {
  const query = db
    .select('*')
    .from(channelPinsTableName)
    .where(args)
    .first();

  maybeAddTransactionToQuery(query, options);

  const channelPin: ChannelPin | null = await query;

  return channelPin;
}

export async function getChannelPinsByIds(
  ids: ReadonlyArray<ChannelPin['id']>,
  options: DBOptions = {},
): Promise<ReadonlyArray<ChannelPin>> {
  const channelPins = await getChannelPinsBy({ ids }, options);

  return channelPins;
}

export type GetChannelPinsByArgs = Readonly<{
  ids: ReadonlyArray<ChannelPin['id']>;
}>;

async function getChannelPinsBy(
  args: GetChannelPinsByArgs,
  options: DBOptions = {},
): Promise<ReadonlyArray<ChannelPin>> {
  const query = db.select('*').from(channelPinsTableName);

  if (args.ids) {
    query.whereIn('id', args.ids as any);
  }

  maybeAddTransactionToQuery(query, options);

  const channelPins: ReadonlyArray<ChannelPin> = await query;

  return channelPins;
}