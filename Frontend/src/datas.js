import * as mockdatas from"./mockdatas"
const isprod = false

export async function getDatas(id, type){
    if (isprod) {
        const data = await fetch("http://localhost:3000/user/" + id + type);
        const json = await data.json();
        return json.data;
    }else{
        switch (type) {
            case "":
                return mockdatas.USER_MAIN_DATA.find((current) => current.id === id)

            case "/activity":
                return transformActivity(id)
            case "/average-sessions":
                return mockdatas.USER_AVERAGE_SESSIONS.find(current => current.userId === id)

            case "/performance":
                return mockdatas.USER_PERFORMANCE.find(current => current.userId === id)
        
            default:
                break;
        }
    }
}

function transformActivity(id){
    const data = mockdatas.USER_ACTIVITY.find(current => current.userId === id)
    const transformeddatas = {
        datas: data.sessions.map(session => (Object.assign({}, session, {day: session.day.slice(-2)}))),
        minkg: Math.min(...data.sessions.map(session => session.kilogram)),
        maxkg: Math.max(...data.sessions.map(session => session.kilogram))
    }
    return transformeddatas
}