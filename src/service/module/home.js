import HYrequest from "../index";
export function goodprice(){
    return HYrequest.get({
        url:'/home/goodprice'
    })
}

export function highscore(){
    return HYrequest.get({
        url:'/home/highscore'
    })
}
export function discount(){
    return HYrequest.get({
        url:'/home/discount'
    })
}
export function hotrecommenddest(){
    return HYrequest.get({
        url:'/home/hotrecommenddest'
    })
}

export function longfor(){
    return HYrequest.get({
        url:'/home/longfor'
    })
}

export function plus(){
    return HYrequest.get({
        url:'/home/plus'
    })
}
