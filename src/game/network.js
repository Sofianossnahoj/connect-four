export async function getKey() {
  let networkKey = await window.store.createNetworkKey();
  return networkKey;
}