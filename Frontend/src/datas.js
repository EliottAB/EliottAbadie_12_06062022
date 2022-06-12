export async function getDatas(url){
    const data = await fetch(url);
    const json = await data.json();
    return json;
}