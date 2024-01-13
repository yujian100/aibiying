import HYrequest from "../index";

export function getMoredate(offset=0){
    console.log(offset)
    return HYrequest.get({
        url:'/entire/list',
        params:{
            offset:offset,
            size:20
        }
    })
}