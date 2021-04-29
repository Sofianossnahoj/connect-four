// DML886

export async function getKey() {
  let networkKey = await window.store.createNetworkKey();
  return networkKey;
}

/*export async function setKey() {
  let networkStore = await window.store.getNetworkStore('DML886', keyListener)
  console.log(networkStore);
}

function keyListener() {
  console.log('listener');
}*/