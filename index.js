/**
 * Created by Macbook on 2018/10/23.
 */
function change(msg) {
    console.log(msg);
    switch (msg){
        case '/home':
            return 'this is home';
        default :
            return 'this is 404';
    }
}
module.exports=change;