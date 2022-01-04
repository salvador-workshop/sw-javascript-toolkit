
/**
 * Formats arrays with < 32 members for proper 32-channel IO
 */
const formatIOChannels = (channelData) => {
  const numActiveChannels = channelData.length;
  const numDummyChannels = 32 - numActiveChannels;
  const dummyData = Array.apply(null, Array(numDummyChannels)).map(x => null)
  return channelData.concat(dummyData);
}

/**
 * Formats arrays with < 32 members for proper 32-channel IO
 */
const formatIOChannelFields = (channelFields) => {
  const numActiveChannels = channelFields.length;
  const numDummyChannels = 32 - numActiveChannels;
  const dummyFields = Array.apply(null, Array(numDummyChannels)).map(x => 'unused')
  return channelFields.concat(dummyFields);}

export default {
  formatIOChannels,
  formatIOChannelFields,
}
