function delay(data, ms) {
    return new Promise(resolve => setTimeout(() => {
        resolve(data)
    }, ms))
}

delay({name: "user"}, 1000)
    .then((data) => console.log("Hello!", data))

async function getUserInfo() {
    return {name: 'Vic', age: 21, id: 1};
}

async function getUserAvatar(userInfo) {
    return userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
}

async function getUserAdditionalInfo(userInfo) {
    return userInfo.interests = ['sport', 'books'];
}

async function getResult() {
    let userInfo = await delay(getUserInfo(), 1000);
    await delay(getUserAvatar(userInfo), 1000);
    await delay(getUserAdditionalInfo(userInfo), 1000);
    console.log(userInfo)
}

getResult();

async function getUser() {
    return {name: 'Vic', age: 21, id: 1};
}

async function getInfo() {
    let user = await getUser();
    throw new Error('error');
}

getInfo()
    .catch(console.error)

