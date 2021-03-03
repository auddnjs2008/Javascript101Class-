// async & await
// clear style of using promise
//

//async 써보기

function fetchUser() {
  return new Promise((resolve, reject) => {
    //do network request in 10 secs...
    resolve("ellie");
  });
}

const user = fetchUser();
user.then(console.log);

//우린 promise를 써서 위처럼 했었다.

// 더 간단한 방법

async function asyncUser() {
  return "ellie";
}

const asyncuser = asyncUser();
asyncuser.then(console.log);
// 이렇게 하면 자동으로  함수 안에있는 코드 블럭들이
// 프로미스 되어진다.

//2. await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000); // delay가 끝날때까지 기다려준다.
  return "apple";
}

async function getBanana() {
  await delay(3000);
  return "banana";
}

//원래는 밑에처럼  체이닝을 이용해서 했어야했다.
function getBanana() {
  return delay(3000).then(() => "banana");
}

// await은  async가 붙은 함수 안에서만 쓸수있다.

function pickFruits() {
  // 기존에는
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple}${banana}`);
  }); // => 콜백지옥이 떠오른다.
}

pickFruits().then(console.log);

async function asyncFruits() {
  try {
    const apple = await getApple();
    const banana = await getBanana();
  } catch (error) {
    console.log(error);
  }
  return `${apple}+${banana}`;
}
// 이런식으로 간단히 바뀐다.

// 근데 위의 asyncFruits의 문제점은
// 사과를 받아올때도 바나나를 받아올때도
//각각 1초를 기다려야한다. 두 데이터는 상관없는 데이터인데

async function asyncDevelopFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  //이렇게 실행하면 1초만에 완료된다.
  // 개선되기전 코드는 2초에 실행된다.
  return `${apple}+${banana}`;
}

// 위의  asyncDevelopFruits처럼 병렬적으로
// 코딩을 하면 좀 더러워 보인다.

//3 .useful Promise APIS

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join("+")
  );
}

pickAllFruits().then(console.log);
